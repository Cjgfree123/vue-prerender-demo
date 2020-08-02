let PrerenderPlugin = require("prerender-spa-plugin");
let path = require("path");

module.exports = {
    configureWebpack:{
        plugins:[
            new PrerenderPlugin({
                staticDir: path.join(__dirname,"dist"),
                routes:["/","/about"],
                // render: 所采用的渲染引擎是什么，目前用的是 V3.4.0 版本支持 PuppeteerRenderer
                renderer: new Renderer({
                    inject: {
                      foo: 'bar'
                    },
                    renderAfterDocumentEvent: 'render-event'
                  })
            }),
        ],
    }
};