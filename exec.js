window.userscript_util = window.userscript_util || {};
window.userscript_util.exec = {};

window.userscript_util.exec.executeLater = (userscript, GM_info, sec) => {
    setTimeout(() => {

        const el = document.createElement("script");
        el.type = "text/javascript";
        el.text = `(${userscript})(${JSON.stringify(GM_info)});`;
        document.head.appendChild(el);

    }, sec);
};


window.userscript_util.exec.logGmInfo = (GM_info) => {
    console.log(`init : ${GM_info.script.name} userscript(@${GM_info.script.version}) - ${document.location.toString()}`);
};


window.userscript_util.exec.logGmError = (GM_info, err) => {
    console.error(`UserScript(${GM_info.script.name}): ${err.toString()}`);
};

