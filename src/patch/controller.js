export default args => ({
  changeContainerType: (val) => {
    if (!val) {
      args.data.offset(undefined);
      args.data.value(undefined);
    }
    args.data.is_container_type(val);
  },
  patchEntry: args.data || {},
  patchId: +(new Date()),
  patchList: require(`../patchList`),
  dvClass: config => 
    Object.keys(config)
      .map(key => config[key] === true ? key : '')
      .join(' ')
});