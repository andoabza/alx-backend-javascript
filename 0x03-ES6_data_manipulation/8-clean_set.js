export default function cleanSet(set, startString) {
    if (!startString || typeof startString !== 'string') return '';
    let result = '';
    for (const item of set) {
      if (item.startsWith(startString)) {
        result += item.slice(startString.length) + '-';
      }
    }
    return result.slice(0, -1); // remove trailing '-'
  }