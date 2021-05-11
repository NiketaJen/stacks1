/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

// Constraints: 
//1 <= target.length <= 100
//1 <= target[i] <= n
//1 <= n <= 100
//target is strictly increasing.


 var buildArray = function(target, n) {
    
    let result = [];
    let i = 0;
    let num = 1;

    while (num <= n) {
        if (i == target.length) {
            return result
        } 
        else if (target[i] == num) {
            result.push("Push");
            i++
        } else {
            result.push("Push");
            result.push("Pop")
        }
        num++
    }
    return result;
};