export default function updateUniqueItems(map) {
  if (typeof map.get !== 'function') { throw Error('Cannot process'); }
  map.forEach((value, key) => {
    if (map.get(key) === 1) {
      map.set(key, 100);
    }
    return map;
  });
}
