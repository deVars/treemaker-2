const m = require(`mithril`);
const DEFAULT_DATA = {
  desc: '',
  is_container_type: false,
  is_enabled: true,
  offset: 0,
  value: 0
};

function PatchEntry(data) {
  if (data === undefined) {
    data = DEFAULT_DATA;
  }

  let pe = {
    desc: m.prop(data.desc),
    is_enabled: m.prop(data.is_enabled),
    is_container_type: m.prop(data.is_container_type),
    offset: m.prop(data.offset),
    value: m.prop(data.value),
    _are_children_hidden: m.prop(false),
    children: data.children &&
      data.children.map(childData => (new PatchEntry(childData)))
  }

  pe.toggleEnabled = toggleEnabled;
  pe.toggleContainerType = toggleContainerType;
  pe.toggleHideChildren = toggleHideChildren;
  return pe;

  function toggleEnabled() {
    pe.is_enabled(!pe.is_enabled());
  }

  function toggleContainerType() {
    pe.is_container_type(!pe.is_container_type());
    if (!pe.is_container_type()) {
      pe.value = m.prop(DEFAULT_DATA.value);
      pe.offset = m.prop(DEFAULT_DATA.offset);
      delete pe.children;
    } else {
      delete pe.value;
      delete pe.offset;
      pe.children = [];
    }
  }

  function toggleHideChildren() {
    pe._are_children_hidden(!pe._are_children_hidden());
    m.redraw();
  }
}

export default PatchEntry;