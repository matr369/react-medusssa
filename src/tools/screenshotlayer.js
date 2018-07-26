const SCREENSHOT_LAYER_URL = 'http://api.screenshotlayer.com/api/capture';

const DEFAULT_PARAMS = {
    access_key: 'b04207cb093dbbd0a9b8076316e3eef9',
    viewport: '800=600',
    fullpage: 1
};

const SCREENSHOT_LAYER_URL = 'http://api.screenshotlayer.com/api/capture';


async function fetchSiteScreenshot(url, viewport, fullpage) {
    let screenshotLayerURL = new URL(SCREENSHOT_LAYER_URL);
    screenshotLayerURL.search = new URLSearchParams({
        ...DEFAULT_PARAMS,
        url,
        viewport,
        fullpage
    });
    const screenshot = await fetch(screenshotLayerURL);
    return screenshot.json();
}