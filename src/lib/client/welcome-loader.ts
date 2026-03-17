type ThreeModule = typeof import('three');

type ParticleFieldOptions = {
	count: number;
	minRadius: number;
	maxRadius: number;
	size: number;
	opacity: number;
	palette: string[];
};

function disposeMaterial(material: import('three').Material | import('three').Material[]) {
	const materials = Array.isArray(material) ? material : [material];

	for (const entry of materials) {
		entry.dispose();
	}
}

function createParticleField(THREE: ThreeModule, options: ParticleFieldOptions) {
	const positions = new Float32Array(options.count * 3);
	const colors = new Float32Array(options.count * 3);
	const palette = options.palette.map((color) => new THREE.Color(color));

	for (let index = 0; index < options.count; index += 1) {
		const stride = index * 3;
		const radius = options.minRadius + Math.random() * (options.maxRadius - options.minRadius);
		const theta = Math.random() * Math.PI * 2;
		const phi = Math.acos(2 * Math.random() - 1);

		positions[stride] = radius * Math.sin(phi) * Math.cos(theta);
		positions[stride + 1] = radius * Math.cos(phi) * 0.72;
		positions[stride + 2] = radius * Math.sin(phi) * Math.sin(theta);

		const from = palette[index % palette.length];
		const to = palette[(index + 1) % palette.length];
		const tint = from.clone().lerp(to, Math.random());

		colors[stride] = tint.r;
		colors[stride + 1] = tint.g;
		colors[stride + 2] = tint.b;
	}

	const geometry = new THREE.BufferGeometry();
	geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
	geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

	const material = new THREE.PointsMaterial({
		size: options.size,
		vertexColors: true,
		transparent: true,
		opacity: options.opacity,
		blending: THREE.AdditiveBlending,
		depthWrite: false,
		sizeAttenuation: true
	});

	return new THREE.Points(geometry, material);
}

function buildScene(host: HTMLElement, THREE: ThreeModule) {
	let renderer: import('three').WebGLRenderer;

	try {
		renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
			powerPreference: 'high-performance'
		});
	} catch {
		return () => {};
	}

	renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
	renderer.setClearColor(0x000000, 0);
	renderer.outputColorSpace = THREE.SRGBColorSpace;
	renderer.domElement.setAttribute('aria-hidden', 'true');
	renderer.domElement.style.width = '100%';
	renderer.domElement.style.height = '100%';
	renderer.domElement.style.display = 'block';

	host.replaceChildren(renderer.domElement);

	const scene = new THREE.Scene();

	const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 40);
	camera.position.set(0, 0, 7.6);

	const ambientField = createParticleField(THREE, {
		count: 150,
		minRadius: 2.8,
		maxRadius: 4.9,
		size: 0.036,
		opacity: 0.42,
		palette: ['#fff4de', '#ffd7a4', '#f7a664']
	});
	ambientField.rotation.set(Math.PI / 8, 0, Math.PI / 12);

	const accentField = createParticleField(THREE, {
		count: 18,
		minRadius: 1.05,
		maxRadius: 1.75,
		size: 0.05,
		opacity: 0.68,
		palette: ['#fff7ea', '#ffe0ba']
	});
	accentField.rotation.set(-Math.PI / 10, 0, 0);

	scene.add(ambientField, accentField);

	const resize = () => {
		const width = Math.max(host.clientWidth, 1);
		const height = Math.max(host.clientHeight, 1);
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height, false);
	};

	resize();

	let resizeObserver: ResizeObserver | null = null;
	const onWindowResize = () => resize();

	if (typeof ResizeObserver !== 'undefined') {
		resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(host);
	} else {
		window.addEventListener('resize', onWindowResize);
	}

	const clock = new THREE.Clock();

	renderer.setAnimationLoop(() => {
		const elapsed = clock.getElapsedTime();

		ambientField.rotation.y = elapsed * 0.018;
		accentField.rotation.y = -elapsed * 0.04;
		accentField.rotation.x = -Math.PI / 10 + Math.sin(elapsed * 0.25) * 0.025;

		camera.position.x = Math.sin(elapsed * 0.18) * 0.14;
		camera.position.y = Math.cos(elapsed * 0.15) * 0.08;
		camera.lookAt(0, 0, 0);

		renderer.render(scene, camera);
	});

	return () => {
		renderer.setAnimationLoop(null);
		resizeObserver?.disconnect();
		if (!resizeObserver) {
			window.removeEventListener('resize', onWindowResize);
		}

		scene.traverse((entry) => {
			const object = entry as import('three').Object3D & {
				geometry?: import('three').BufferGeometry;
				material?: import('three').Material | import('three').Material[];
			};

			object.geometry?.dispose();
			if (object.material) {
				disposeMaterial(object.material);
			}
		});

		renderer.dispose();
		host.replaceChildren();
	};
}

export async function mountWelcomeScene(host: HTMLElement) {
	const THREE = await import('three');

	if (!host.isConnected) {
		return () => {};
	}

	return buildScene(host, THREE);
}
