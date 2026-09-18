class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        nums.sort()

        const numMap = new Map()

        for (const num of nums) {
            if (numMap.has(num)) {
                const numGet = numMap.get(num)
                numGet.push(num)
            } else {
                numMap.set(num, [num])
            }
        }
        const output = [...new Set([...numMap.values()].sort((a, b) => a.length - b.length).flat())]
        return output.reverse().slice(0, k)
    }
}
