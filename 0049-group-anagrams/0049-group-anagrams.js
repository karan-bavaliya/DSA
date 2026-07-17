/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for (let str of strs) {
        // Sort the characters to create a unique key
        const key = str.split("").sort().join("");

        // Create array if key doesn't exist
        if (!map.has(key)) {
            map.set(key, []);
        }

        // Add original string
        map.get(key).push(str);
    }

    // Return grouped anagrams
    return Array.from(map.values());
};