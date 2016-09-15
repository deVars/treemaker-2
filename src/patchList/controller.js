const patch = require(`../patch`);

function PatchListController(args) {
    this.list = args.list || [];
    this.patch = patch;
    console.debug(this.list);
}

export default PatchListController;