const m = require(`mithril`);

function PatchEntry(data) {
  if (!data) {
    return;
  }

  this.desc = m.prop(data.desc);
  this.is_enabled = m.prop(data.is_enabled);
  this.is_container_type = m.prop(data.is_container_type);
  this.offset = m.prop(data.offset);
  this.value = m.prop(data.value);
  this.children = data.children && 
      data.children.map(childData => (new PatchEntry(childData)));
}

export default PatchEntry;