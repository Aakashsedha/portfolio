// Zoom and Resolution Fix Utility
export const applyZoomFix = () => {
  // Force zoom level to 1
  if (document.body) {
    document.body.style.zoom = '1';
    document.body.style.transform = 'scale(1)';
    document.body.style.transformOrigin = 'top left';
  }

  // Force root element zoom
  const root = document.getElementById('root');
  if (root) {
    root.style.zoom = '1';
    root.style.transform = 'scale(1)';
    root.style.transformOrigin = 'top left';
  }

  // Force html element zoom
  if (document.documentElement) {
    document.documentElement.style.zoom = '1';
    document.documentElement.style.transform = 'scale(1)';
    document.documentElement.style.transformOrigin = 'top left';
  }

  // Detect and fix browser zoom
  const detectZoom = () => {
    let ratio = 0;
    const screen = window.screen;
    const ua = navigator.userAgent.toLowerCase();

    if (window.devicePixelRatio !== undefined) {
      ratio = window.devicePixelRatio;
    } else if (~ua.indexOf('msie')) {
      if (screen.deviceXDPI && screen.logicalXDPI) {
        ratio = screen.deviceXDPI / screen.logicalXDPI;
      }
    } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
      ratio = window.outerWidth / window.innerWidth;
    }

    if (ratio) {
      ratio = Math.round(ratio * 100);
    }

    return ratio;
  };

  // Apply fixes based on detected zoom
  const currentZoom = detectZoom();
  console.log('Detected zoom level:', currentZoom);

  // Force viewport meta tag update
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=3.0, user-scalable=yes, viewport-fit=cover');
  }

  // Force CSS zoom properties
  const style = document.createElement('style');
  style.textContent = `
    html, body, #root, .App {
      zoom: 1 !important;
      transform: scale(1) !important;
      -webkit-transform: scale(1) !important;
      -moz-transform: scale(1) !important;
      -ms-transform: scale(1) !important;
      transform-origin: top left !important;
      -webkit-text-size-adjust: none !important;
      -ms-text-size-adjust: none !important;
      text-size-adjust: none !important;
    }
  `;
  document.head.appendChild(style);
};

// Apply fixes when DOM is ready
export const initializeZoomFix = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyZoomFix);
  } else {
    applyZoomFix();
  }

  // Also apply on window resize
  window.addEventListener('resize', applyZoomFix);
  
  // Apply on window load
  window.addEventListener('load', applyZoomFix);
};
