window.userscript_util = window.userscript_util || {};
window.userscript_util.add = {};

window.userscript_util.add.addGlobalStyle = (css) => {
    const head = document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = css;
    head.appendChild(style);
};


window.userscript_util.add.addGlobalJavaScript = (text) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = text;
    document.body.appendChild(script);
};



