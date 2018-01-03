window.userscript_util = window.userscript_util || {};


function injectExternalJavaScript(src) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
}

window.userscript_util.injectExternalJavaScript = injectExternalJavaScript;

function injectExternalStyleSheet(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}

window.userscript_util.injectExternalStyleSheet = injectExternalStyleSheet;