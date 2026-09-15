class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sArray = s.split('').sort()
        const tArray = t.split('').sort()
        if(sArray.length != tArray.length) return false
        const testArray = tArray.every((value, index) => value === sArray[index]);

        return testArray
    }
}
