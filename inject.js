window.userscript_util = window.userscript_util || {};
window.userscript_util.inject = {};

window.userscript_util.inject.injectExternalJavaScript = (src) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
};


window.userscript_util.inject.injectExternalStyleSheet = (href) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
};

