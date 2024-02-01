/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const res = []
   for(let i = 0 ; i < nums1.length ;i++){
       let nextGreater = -1
       for(let j = nums2.indexOf(1[i]) + 1 ; j<nums2.length;j++){
           if((nums1[i] < nums2[j])){
               nextGreater = nums2[j]
               break;
           }
       }
       res.push(nextGreater)
   }
   
   return res
};