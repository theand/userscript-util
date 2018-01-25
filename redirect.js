window.userscript_util = window.userscript_util || {};
window.userscript_util.redirect = {};

function prepareRedirectButton(title) {
    title = title || "Go To PC Version";
    const button = userscript_util.element.pseudoBodyButtonWith(title);
    userscript_util.add.addGlobalStyle(button);
}

window.userscript_util.redirect.prepareRedirectButton = prepareRedirectButton;


function bindRedirectEvent(new_url) {
    document.querySelector("body").addEventListener("click", function (event) {
        // console.log(event.target.tagName + " - " + event.type);
        if (event.target.tagName === "BODY") {
            document.location.href = new_url;
        }
    });
}

window.userscript_util.redirect.bindRedirectEvent = bindRedirectEvent;


function metaPropertyUrlResolver(key) {
    key = key || "og:url";
    const url = document.querySelector(`meta[property='${key}']`);

    if (!url) {
        throw "no meta";
    }
    return url.content;
}

window.userscript_util.redirect.metaPropertyUrlResolver = metaPropertyUrlResolver;


function installRedirectButton(button_title, targetUrlResolver) {
    try {

        userscript_util.redirect.prepareRedirectButton(button_title);

        const targetUrl = targetUrlResolver();
        console.log(`targetUrl is ${targetUrl}`);

        userscript_util.redirect.bindRedirectEvent(targetUrl);

    } catch (err) {
        userscript_util.exec.logGmError(GM_info, err);
    }
}

window.userscript_util.redirect.installRedirectButton = installRedirectButton;
