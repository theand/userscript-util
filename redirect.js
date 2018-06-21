window.userscript_util = window.userscript_util || {};
window.userscript_util.redirect = {};

window.userscript_util.redirect.prepareRedirectButton = (title) => {
    title = title || "Go To PC Version";
    const button = userscript_util.element.pseudoBodyButtonWith(title);
    userscript_util.add.addGlobalStyle(button);
};


window.userscript_util.redirect.bindRedirectEvent = (new_url, redirector) => {
    document.querySelector("body").addEventListener("click", function (event) {
        // console.log(event.target.tagName + " - " + event.type);
        if (event.target.tagName === "BODY") {
            if (redirector) {
                redirector(new_url);
            } else {
                document.location.href = new_url;
            }
        }
    });
};


window.userscript_util.redirect.metaPropertyUrlResolver = (key, value) => {
    key = key || "property";
    value = value || "og:url";
    const url = document.querySelector(`meta[${key}='${value}']`);

    if (!url) {
        throw "no meta";
    }
    return url.content;
};


window.userscript_util.redirect.installRedirectButton = (button_title, targetUrlResolver, redirector, resolver_key, resolver_value) => {
    try {


        const targetUrl = targetUrlResolver(resolver_key, resolver_value);
        console.log(`targetUrl is ${targetUrl}`);

        if (targetUrl) {
            userscript_util.redirect.prepareRedirectButton(button_title);
            userscript_util.redirect.bindRedirectEvent(targetUrl, redirector);
        }

    } catch (err) {
        userscript_util.exec.logGmError(GM_info, err);
    }
};

