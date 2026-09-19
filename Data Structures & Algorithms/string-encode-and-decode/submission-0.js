class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let enCodedStr = ""

        for (const str of strs) {
            enCodedStr += str.length + "-$" + str
        }

        return enCodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const regexStr = /(\d+)\-\$/g
        const output = []

        while (true) {
            const checkStr = regexStr.exec(str)


            if (!checkStr) break

            const lengthOfStr = parseInt(checkStr[1], 10)

            const decodedStr = str.substring(
                regexStr.lastIndex,
                regexStr.lastIndex + lengthOfStr
            )

            output.push(decodedStr)

            regexStr.lastIndex += lengthOfStr
        }

        return output
    }
}
