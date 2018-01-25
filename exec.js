window.userscript_util = window.userscript_util || {};
window.userscript_util.exec = {};

function executeLater(userscript, GM_info, sec) {
    setTimeout(() => {

        const el = document.createElement("script");
        el.type = "text/javascript";
        el.text = `(${userscript})(${JSON.stringify(GM_info)});`;
        document.head.appendChild(el);

    }, sec);
}

window.userscript_util.executeLater = executeLater;
window.userscript_util.exec.executeLater = executeLater;


function logGmInfo(GM_info) {
    console.log(`init : ${GM_info.script.name} userscript(@${GM_info.script.version}) - ${document.location.toString()}`);
}

window.userscript_util.logGmInfo = logGmInfo;
window.userscript_util.exec.logGmInfo = logGmInfo;

function logGmError(GM_info, err) {
    console.error(`UserScript(${GM_info.script.name}): ${err.toString()}`);
}

window.userscript_util.logGmError = logGmError;
window.userscript_util.exec.logGmError = logGmError;
