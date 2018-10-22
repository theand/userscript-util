window.userscript_util = window.userscript_util || {};
window.userscript_util.html = {};

window.userscript_util.html.htmlToElement = (html) => {
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement/content
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content;
};


window.userscript_util.html.stripHtml = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText;
};

