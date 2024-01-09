export default function updateUniqueItems(map) {
    map.forEach((value, key) => {
        if (value == 1) {
            map.set(key, 100)
        }
    return map;
    });
}