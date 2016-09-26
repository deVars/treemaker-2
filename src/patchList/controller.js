const patch = require(`../patch`);
const PatchEntry = require(`../patchEntry`);

function PatchListController(args) {
  let ctrl = this;
  ctrl.list = args.list || [];
  ctrl.patch = patch;
  ctrl.addEntry = addEntry;

  function addEntry() {
    ctrl.list.push(new PatchEntry());
  }
}

export default PatchListController;