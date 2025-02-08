export function isMobile() {
    // eslint-disable-next-line no-restricted-globals
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile
}
