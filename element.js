window.userscript_util = window.userscript_util || {};
window.userscript_util.element = {};


window.userscript_util.element.pseudoBodyButtonWith = (msg) => {
    const button = `
body:before {
    background-color: rgba(163, 60, 214, 0.6);
    border-radius: 0 0 5px 0;
    color: #fff;
    content: '${msg}';
    font-size: 20px;
    font-weight: bold;
    left: 0;
    line-height: 12px;
    padding: 15px 10px;
    position: fixed;
    text-align: center;
    top: 3em;
    left: 3em;
    z-index: 9999;
    pointer-events: auto;
    cursor: pointer;
}
`;
    return button;
};


window.userscript_util.element.ClearDiv = "<div style='clear: both;'>&nbsp;</div>";

window.userscript_util.element.CopyDiv = `
    <div>
        <button id='copy-button'  data-clipboard-target='#article_link_list' style='margin: 5px;
        color: #fff;
        background-color: #5cb85c;
        border-color: #4cae4c;
        display: inline-block;
        padding: 6px 12px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
        -webkit-appearance: button;
        overflow: visible;'>Copy</button>
        <br />
        <br />
    </div>
    `;

window.userscript_util.element.ListDiv = `
    <div id='article_link_list' style='
        margin-bottom: 2em;
        padding: 15px;
        background-color: #d9edf7;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333;
        box-sizing: border-box;'>
    </div>`;


window.userscript_util.element.attachLinkAreatTo = (sel) => {
    const div = document.createElement("div");
    div.innerHTML = userscript_util.element.ClearDiv + userscript_util.element.CopyDiv + userscript_util.element.ListDiv;
    document.querySelector(sel).insertAdjacentElement("afterend", div);
};


window.userscript_util.element.attachLinkAddress = (href) => {
    document.querySelector("#article_link_list").append(href);
    document.querySelector("#article_link_list").append(document.createElement("br"));
};


window.userscript_util.element.attachLinkAddressExtractedFrom = (sel) => {
    document.querySelectorAll(sel).forEach((e, i) => {
        if( i%10 === 0 ){
            userscript_util.element.attachLinkAddress("");
        }
        userscript_util.element.attachLinkAddress(e.href);
    });
    userscript_util.element.attachLinkAddress("about:blank");
};

