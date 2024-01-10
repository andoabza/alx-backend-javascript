export default function hasValuesFromArray(set, arr) {
  return arr.every((item) => set.has(item));
}
