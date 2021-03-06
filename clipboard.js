window.userscript_util = window.userscript_util || {};
window.userscript_util.clipboard = {};

window.userscript_util.clipboard.bindClipboardAction = (sel, index) => {
    if (!sel) {
        if( index !== undefined ) {
            sel = `#copy-button${index}`;
        }else{
            sel = `#copy-button`;
        }
    }
    const clipboard = new Clipboard(sel);

    clipboard.on("success", function (e) {
        // console.info("Action:", e.action);
        // console.info("Text:", e.text);
        // console.info("Trigger:", e.trigger);

        e.clearSelection();
        document.querySelector(sel).style.backgroundColor = "#d9534f";
        document.querySelector(sel).style.borderColor = "#d43f3a";

    });

    clipboard.on("error", function (e) {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);
    });

};

