export default function(set, startString) {
   let result = '';
    for (let item of set) {
       if (item.startsWith(startString)) {
           result += item.slice(startString.length) + '-';
       }
   }
   if (startString.length === 0) {
    return '';
    }
   return result.slice(0, -1);
}