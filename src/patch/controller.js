const setClass = require('../utils/setClass');

function PatchController(config) {
  function deleteEntry() {
    if (config.index !== undefined) {
      config.list.splice(config.index, 1);
    }
  }

  return {
    deleteEntry: deleteEntry,
    patchEntry: config.entry || {},
    patchEntries: config.list || [],
    patchId: +(new Date()),
    patchList: require(`../patchList`),
    setClass: setClass
  };
}

export default PatchController;