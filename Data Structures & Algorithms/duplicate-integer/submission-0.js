class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const notDuplicateArray = []
        let duplicateFound = false 

        nums.map((num)=> {
            const found = notDuplicateArray.includes(num)
            if(found){
                duplicateFound = true
            }
            notDuplicateArray.push(num)
        })

        return duplicateFound;
    }
}
