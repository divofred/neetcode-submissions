class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let index1 = null
       let index2 = null

        nums.map((num, index)=> {
           const newArray = [...nums]
           
          newArray.slice(index+1).map((newNum, innerIndex)=> {
            if(num + newNum === target){
                index1 = index
                index2 = innerIndex+(index+1)
            }
          })
        })

        return [index1, index2]
    }
}
