export default function(set, startString) {
   let result = '';
   if (startString.length == 0) {
    return result;
   }
    for (let item of set) {
       if (item.startsWith(startString)) {
           result += item.slice(startString.length) + '-';
       }
   }
   return result.slice(0, -1);
}