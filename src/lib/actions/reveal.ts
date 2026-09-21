export function reveal(node: HTMLElement, options: { delay?: number } = {}) {
  if (typeof window === 'undefined') return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    node.dataset.visible = 'true';
    return;
  }

  node.classList.add('reveal-ready');
  node.style.setProperty('--reveal-delay', `${options.delay ?? 0}ms`);
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.dataset.visible = 'true';
        observer.unobserve(node);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  observer.observe(node);
  return { destroy: () => observer.disconnect() };
}

export function magnetic(node: HTMLElement) {
  if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) return;

  const move = (event: PointerEvent) => {
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
    node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };
  const reset = () => (node.style.transform = 'translate3d(0, 0, 0)');

  node.addEventListener('pointermove', move);
  node.addEventListener('pointerleave', reset);
  return {
    destroy() {
      node.removeEventListener('pointermove', move);
      node.removeEventListener('pointerleave', reset);
    }
  };
}
