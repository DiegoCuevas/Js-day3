function deepCompare(o1, o2) {
  if (o1 === o2) return true;
  if (
    o1 == null ||
    typeof o1 != 'object' ||
    o2 == null ||
    typeof o2 != 'object'
  )
    return false;

  for (let key in o2) {
    if (!(key in o1) || !deepCompare(o1[key], o2[key])) return false;
  }
  return Object.keys(o1).length == Object.keys(o2).length;
}