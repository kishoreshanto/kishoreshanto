<script lang="ts">
  export let src: string;
  export let alt: string;
  export let className: string = '';
  export let loading: 'lazy' | 'eager' = 'lazy';
  export let width: number | undefined = undefined;
  export let height: number | undefined = undefined;

  // Generate WebP source from original
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const optimizedSrc = src.startsWith('/') ? `/optimized${src}` : `/optimized/${src}`;
  const webpOptimizedSrc = optimizedSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
</script>

<picture>
  <!-- WebP optimized version -->
  <source 
    srcset="{webpOptimizedSrc}" 
    type="image/webp"
  />
  
  <!-- Original optimized version -->
  <source 
    srcset="{optimizedSrc}" 
    type="image/{src.split('.').pop()}"
  />
  
  <!-- Fallback -->
  <img 
    {src} 
    {alt} 
    {loading}
    {width}
    {height}
    class={className}
    decoding="async"
  />
</picture>
