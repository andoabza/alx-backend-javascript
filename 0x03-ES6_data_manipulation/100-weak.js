import WeakMap from 'es6-weak-map';

export const weakmap = new WeakMap();

export default function queryAPI({ protocol, name }) {
  const endpoint = `${protocol}://${name}`;
  let called = weakmap.get(endpoint) || 0;
  called += 1;
  weakmap.set(endpoint, called);
  if (called >= 5) throw Error('Endpoint load is high');
}
