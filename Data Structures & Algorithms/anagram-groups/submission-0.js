class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const output = []
        const newArray = []
        strs.map((str) => {
            newArray.push(str.split(''))
        })

        while (newArray.length > 0) {
            const val = newArray[0]
            const innerOutput = [val.join('')]

            newArray.splice(0, 1)
            for (let i = newArray.length - 1; i >= 0; i--) {
                const newVal = newArray[i];

                if (val.length !== newVal.length) continue;

                const isAnagram = [...val].sort().join('') === [...newVal].sort().join('');

                if (isAnagram) {
                    innerOutput.push(newVal.join(''));
                    newArray.splice(i, 1); // Safely delete because we are looping backwards!
                }
            }
            output.push(innerOutput)
        }

        // newArray.map((val, index) => {
        //     const innerOutput = [val]
        //     newArray.splice(0, 1).map((newVal) => {
        //         if (val.length !== newVal.length) return
        //         const setNewVal = new Set(newVal);
        //         val.every(valInner => setNewVal.has(valInner));
        //         const isAnagram = val.every(valInner => setNewVal.has(valInner))
        //         isAnagram && innerOutput.push(newVal)
        //     })
        //     output.push(innerOutput)
        //     console.log(newArray)

        // })


        return output.sort((a, b) => {
            return a.length - b.length
        })
    }
}
