window.userscript_util = window.userscript_util || {};
window.userscript_util.html = {};

function htmlToElement(html) {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content;
}

window.userscript_util.htmlToElement = htmlToElement;
window.userscript_util.html.htmlToElement = htmlToElement;

function stripHtml(html) {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText;
}

window.userscript_util.stripHtml = stripHtml;
window.userscript_util.html.stripHtml = stripHtml;
