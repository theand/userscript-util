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

window.userscript_util.element.NthCopyDiv = (index) => {
    return `
    <div>
        <button id='copy-button${index}'  data-clipboard-target='#article_link_list${index}' style='margin: 5px;
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
};

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

window.userscript_util.element.NthListDiv = (index) => {
    return `
    <div id='article_link_list${index}' style='
        margin-bottom: 2em;
        padding: 15px;
        background-color: #d9edf7;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333;
        box-sizing: border-box;'>
    </div>`;
}

window.userscript_util.element.attachLinkAreatTo = (sel, index) => {
    const div = document.createElement("div");
    if( index === "" ) {
        div.innerHTML = userscript_util.element.ClearDiv + userscript_util.element.CopyDiv + userscript_util.element.ListDiv;
    }else{
        div.innerHTML = userscript_util.element.ClearDiv + userscript_util.element.NthCopyDiv(index) + userscript_util.element.NthListDiv(index);
    }
    document.querySelector(sel).insertAdjacentElement("afterend", div);
};


window.userscript_util.element.attachLinkAddress = (href, index) => {
    document.querySelector(`#article_link_list${index}`).append(href);
    document.querySelector(`#article_link_list${index}`).append(document.createElement("br"));
};


window.userscript_util.element.attachLinkAddressExtractedFrom = (sel, lineBreakPredicate, skipPredicate, urlBuilder, indexPredicate) => {
    if( !indexPredicate ){
        indexPredicate = () => "";
    }

    const indexSet = new Set();
    let lastIndex = "";

    document.querySelectorAll(sel).forEach((e, i) => {

        if( lineBreakPredicate && lineBreakPredicate(i) && i!==0 ){
            userscript_util.element.attachLinkAddress("about:blank", lastIndex);
            userscript_util.clipboard.bindClipboardAction(null, lastIndex);
        }

        if( !indexSet.has(indexPredicate(i))){
            userscript_util.element.attachLinkAreatTo("form.bd_srch_btm", indexPredicate(i));
            indexSet.add(indexPredicate(i));
        }


        if( skipPredicate && skipPredicate(e, i) ){
            //do nothing;
        }else {
            let url;
            if( urlBuilder ) {
                url = urlBuilder(e);
            }else{
                url = e.href
            }
            userscript_util.element.attachLinkAddress(url, indexPredicate(i));
        }

        lastIndex = indexPredicate(i);
    });
    if( lastIndex !== ""){
        userscript_util.element.attachLinkAddress("about:blank", lastIndex);
        userscript_util.clipboard.bindClipboardAction(null, lastIndex);
    }

};

