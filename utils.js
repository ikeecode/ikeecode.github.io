// ============================================
// PERFORMANCE OPTIMIZATIONS & ERROR HANDLING
// ============================================

// Utility: Debounce function for performance
const debounce = (func, wait = 100) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Improved image loading with error handling
const setupImageWithFallback = (imgElement, src, fallback) => {
    if (!imgElement) return;

    imgElement.src = src;
    imgElement.onerror = () => {
        console.warn('Failed to load image:', src);
        if (fallback && src !== fallback) {
            imgElement.src = fallback;
        }
    };
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { debounce, setupImageWithFallback };
}
