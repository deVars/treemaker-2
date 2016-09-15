require(`material-design-lite`);
require(`material-design-lite/dist/material.blue_grey-deep_orange.min.css`);
require(`font-awesome/css/font-awesome.min.css`);
require(`./styles/index.css`);

const m = require(`mithril`),
      BODY = window.document.body;

const App = require(`./app`);

m.route.mode = `hash`;
m.route(BODY, `/index`, {
  '/:page': App
});
