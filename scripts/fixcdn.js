const fixcdn = () => location.href = 'https://fixcdn.hyonsu.com' + location.pathname;

(() => {
    const url = new URL(location.href);

    const exStr = url.searchParams.get('ex');
    const exTime = parseInt(exStr, 16) * 1000;
    if(isNaN(exTime) || exTime <= Date.now()) return fixcdn();

    const navigationData = performance.getEntriesByType('navigation')[0];
    const responseCode = navigationData.responseStatus;

    if(responseCode === 404) return fixcdn();

    document.addEventListener('DOMContentLoaded', () => {
        if(document.body.innerText.trim() === 'This content is no longer available.') return fixcdn();
    });
})()