<script lang="ts">
	import IntroSection from '$component/hero-page/IntroSection.svelte';
</script>

<main class="container mx-auto mt-12 mb-8 py-8 sm:px-10 md:px-10">
	<!-- Intro Section -->
	<IntroSection />
	<hr class="my-8 w-full border-amber-gold pb-2" />

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<div id="left-panel"></div>
		<div id="right-panel-skillsets" class="flex flex-col gap-4 rounded-3xl bg-[#f9d8b0] p-6">
			<h1 class="text-center font-lora text-xl font-bold text-amber-800 md:text-3xl">
				Things that I can do
			</h1>
			<ul class="text-ivory-400 font-ivy-text">
				<li>
					<span class="font-bold">Programming Languages:</span> Python, C, C++, Java, TypeScript, JavaScript,
					SQL, PHP, R, C#/.NET Razor Pages, Swift, MIPS
				</li>
				<li>
					<span class="font-bold">Core Software Engineering:</span> OOP (encapsulation/ abstraction/inheritance/ polymorphism),
					class design & abstraction tradeoffs, system design fundamentals, build toolchains (CMake +
					Make)
				</li>
				<li>
					<span class="font-bold">Full-Stack Web Engineering:</span> SvelteKit, Node.js, npm (dependency/devDependency
					resolution), SSR/CSR/SPA/hybrid rendering, routing/adapters/hydration/pre-rendering, Tailwind
					CSS, HTML, CSS, state management, Prettier, Vitest, jQuery
				</li>
				<li>
					<span class="font-bold">Backend & API Development:</span> REST API design/implementation, SvelteKit
					server endpoints, Flask APIs for ML inference, open vs restricted APIs, CORS
				</li>
				<li>
					<span class="font-bold">Authentication & Security Foundations:</span> JWT auth, secure cookies
					(HttpOnly/Secure/SameSite), bcrypt password hashing/verification, RBAC/role-based authorization,
					OAuth/social login (Google sign-in), auth guards/middleware patterns
				</li>
				<li>
					<span class="font-bold">Databases & Data Modeling:</span> MongoDB Atlas, Supabase Postgres,
					MySQL, schema design, Supabase RLS, SQL-first data access, Mongoose ODM, Drizzle (via SvelteKit
					template)
				</li>
				<li>
					<span class="font-bold">Cloud, Deployment & Hosting:</span> Vercel deployments, AWS (EC2/VPS,
					VPC, load balancing, auto-scaling, S3, Lambda, IAM ), hosting/server fundamentals (XAMPP)
				</li>
				<li>
					<span class="font-bold">Containers & Local Dev Environments:</span> Docker CLI, Docker Desktop,
					Dockerfiles, docker-compose/YAML multi-service stacks, containerized databases for dev workflows
				</li>
				<li>
					<span class="font-bold">Version Control, CI/CD & Collaboration:</span> Git, GitHub (PRs, reviews,
					issues, releases, branch protection), GitHub Actions CI/CD
				</li>
				<li>
					<span class="font-bold">AI/ML/DL Frameworks & Tooling:</span> PyTorch, torchvision, scikit-learn,
					NumPy, Pandas, SciPy, matplotlib, OpenCV, timm (pretrained ViT), TensorFlow/Keras, MNE (EEG)
				</li>
				<li>
					<span class="font-bold">ML/DL Environments & Productivity:</span> pip, uv, virtual environments/reproducible
					workflows, Jupyter Notebook, Google Colab, Kaggle, JetBrains Datalore, GPU utilization awareness
					(CUDA/CPU↔GPU transfers)
				</li>
				<li>
					<span class="font-bold">Computer Vision & Video Analytics:</span> video anomaly detection pipelines,
					image defect detection (fabric tear/torn), MP4 video handling, CV preprocessing/feature extraction,
					model serving via Flask APIs
				</li>
				<li>
					<span class="font-bold">Deep Learning Architectures:</span> Vision Transformers (ViT; e.g.,
					vit_small_patch16_224), attention/multi-head attention, SSTAF-style transformer concepts, CNNs,
					ResNet50, MLPs, recurrent models (SRU++/RNN-family)
				</li>
				<li>
					<span class="font-bold">Classical ML & Statistical Models:</span> Random Forest, Decision Trees
					(ID3/C4.5/CART), GBDT, SVM (RBF), K-Means, KNN, Linear Regression
				</li>
				<li>
					<span class="font-bold">Evaluation, Validation & Reproducibility:</span> Accuracy/Precision/Recall/F1,
					AUROC/AUC, AUPRC/PRC, MSE, K-fold/5-fold CV, LOSO CV, grid search tuning, Git/GitHub for reproducibility
				</li>
				<li>
					<span class="font-bold">Efficiency & Profiling (Research):</span> runtime benchmarking, energy
					measurement (J/mJ/W), carbon footprint/CO2e reporting, memory/resource usage profiling, powermetrics
					(macOS), powerstat (Linux), HWiNFO (Windows)
				</li>
				<li>
					<span class="font-bold">Data Formats:</span> JSON, CSV, MP4
				</li>
				<li>
					<span class="font-bold">Publications & Scientific Writing:</span> LaTeX, custom .cls/.sty authoring,
					latexmk + lualatex, IEEE/ACM/Elsevier template workflows, Overleaf collaboration
				</li>
				<li>
					<span class="font-bold">Research Areas & Publications:</span> automated surveillance video anomaly
					detection, snoRNA–disease similarity prediction, garment defect detection via camera, Random
					Forest + clustering hybrid (+~10% performance), EEG decoding/modeling
				</li>
				<li>
					<span class="font-bold">Desktop & Networking:</span> JavaFX desktop apps (UI + CSS), Java peer-to-peer
					networking
				</li>
				<li>
					<span class="font-bold">Operating Systems & Platforms:</span> Linux, macOS, Android Studio,
					Maven, Gradle/Kotlin, Xcode, AOSP build/compile + device customization
				</li>
				<li>
					<span class="font-bold">UI/UX Implementation Practices:</span> Figma layouts/wiring, Material
					Design 3 usage, Apple HIG awareness, “Refactoring UI” principles
				</li>
			</ul>
		</div>
	</div>
</main>
