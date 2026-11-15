const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const duration = 700;
let frame: number | undefined;

function stopScroll() {
  if (frame !== undefined) {
    window.cancelAnimationFrame(frame);
    frame = undefined;
  }
}

window.addEventListener('wheel', stopScroll, { passive: true });
window.addEventListener('touchstart', stopScroll, { passive: true });
window.addEventListener('keydown', stopScroll);
window.addEventListener('popstate', stopScroll);
reducedMotion.addEventListener('change', stopScroll);

for (const link of document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
  link.addEventListener('click', (event) => {
    if (
      reducedMotion.matches || event.defaultPrevented || event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
    ) return;

    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;

    event.preventDefault();
    stopScroll();
    if (window.location.hash !== link.hash) {
      window.history.pushState(null, '', link.hash);
    }

    const from = window.scrollY;
    const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const targetTop = from + target.getBoundingClientRect().top - margin;
    const to = Math.max(0, Math.min(targetTop, maxScroll));

    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    if (Math.abs(to - from) < 1) return;

    const start = performance.now();
    function move(now: number) {
      const progress = Math.min(1, Math.max(0, (now - start) / duration));
      const eased = 1 - (1 - progress) ** 3;
      window.scrollTo({ top: from + (to - from) * eased, behavior: 'instant' });
      frame = progress < 1 ? window.requestAnimationFrame(move) : undefined;
    }

    frame = window.requestAnimationFrame(move);
  });
}
