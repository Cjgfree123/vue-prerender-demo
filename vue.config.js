let PrerenderPlugin = require("prerender-spa-plugin");
let path = require("path");

module.exports = {
    configureWebpack:{
        plugins:[
            new PrerenderPlugin({
                staticDir: path.join(__dirname,"dist"),
                routes:["/","/about"],
            }),
        ],
    }
};