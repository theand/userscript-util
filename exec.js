window.userscript_util = window.userscript_util || {};


function executeLater(userscript, GM_info, sec) {
    setTimeout(() => {

        const el = document.createElement("script");
        el.type = "text/javascript";
        el.text = `(${userscript})(${JSON.stringify(GM_info)});`;
        document.head.appendChild(el);

    }, sec);
}

window.userscript_util.executeLater = executeLater;
