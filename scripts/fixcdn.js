(() => {
    const navigationData = performance.getEntriesByType('navigation')[0];
    const responseCode = navigationData.responseStatus;

    if(responseCode !== 404) return;

    location.href = 'https://fixcdn.hyonsu.com' + location.pathname;
})()