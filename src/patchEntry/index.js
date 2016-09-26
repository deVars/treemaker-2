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
    children: data.children &&
      data.children.map(childData => (new PatchEntry(childData)))
  }

  pe.toggleEnabled = toggleEnabled;
  pe.toggleContainerType = toggleContainerType;
  return pe;

  function toggleEnabled() {
    pe.is_enabled(!pe.is_enabled());
  }

  function toggleContainerType() {
    pe.is_container_type(!pe.is_container_type());
  }
}

export default PatchEntry;