window.userscript_util = window.userscript_util || {};
window.userscript_util.param = {};

function removeParam(URI, REDUNDANT_PARAM_KEY, GM_info){
    try {
        //querystring to object
        const uri = new URI(window.location);
        const originalQuery = uri.query();

        //filter object key
        REDUNDANT_PARAM_KEY
            .filter(e => uri.hasQuery(e))
            .map(e => uri.removeQuery(e));

        //objet to querystring
        const newQuery = uri.query();
        console.log(newQuery);

        //relocate if filtered
        if (originalQuery !== newQuery) {
            console.log(`UserScript : change to filtered location : ${uri.toString()}`);
            history.pushState(null, null, uri.toString());
        } else {
            console.log("UserScript : no changes");
        }

    } catch (err) {
        userscript_util.exec.logGmError(GM_info, err);
    }
}

window.userscript_util.param.removeParam = removeParam;
