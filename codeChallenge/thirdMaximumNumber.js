/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = [...new Set(nums)]
    nums.sort((a,b)=> b-a)
    if(nums.length<3){
        return nums[0]
    }
    return nums[2]
};