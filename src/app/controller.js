const m = require(`mithril`);
const patchList = require(`../patchList`);

const Preview = require(`../preview`);
const DataService = require(`../store`);

function AppController() {
  let ctrl = this,
      test = {
        a: {
          view: () => ({tag: "div", attrs: {}, children: [{tag: "p", attrs: {}, children: ["Hello World! A!"]}
          ]})
        },
        b: {
          view: () => ({tag: "div", attrs: {}, children: [{tag: "p", attrs: {}, children: ["Hello World! B!"]}
          ]})
        },
        patch: patchList,
        raw: Preview,
      },
      path = m.route.param(`page`);

  ctrl.data = DataService.getData();
  if (path === `index`) {
    path = `patch`;
  }

  return {
    content: test[path],
    data: ctrl.data,
    load: DataService.loadFile,
    saveUrl: DataService.getDataURL,
    generateUrl: DataService.generateDataURL,
    exportFilename: DataService.exportFilename
  };


}

export default AppController;