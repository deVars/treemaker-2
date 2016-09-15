const m = require(`mithril`);
const patchList = require(`../patchList`);
const PatchEntry = require(`../patchEntry`);
const test_data = require(`../../test_data.json`);
export default () => {
  let data = test_data.map(entry => new PatchEntry(entry)), 
    test = {
      a: {
        view: () => ({tag: "div", attrs: {}, children: [{tag: "p", attrs: {}, children: ["Hello World! A!"]}
        ]})
      }, 
      b: {
        view: () => ({tag: "div", attrs: {}, children: [{tag: "p", attrs: {}, children: ["Hello World! B!"]}
        ]})
      },
      patch: patchList
    },
    path = m.route.param(`page`);
  if (path === `index`) {
    path = `patch`;
  }
  return {
    content: test[path],
    data: data
  };
};