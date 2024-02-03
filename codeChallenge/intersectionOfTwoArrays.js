/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let arr  = []
    let arr1 = nums1.length>=nums2.length?nums1:nums2;
    let arr2 = nums1.length<nums2.length?nums1:nums2;
    for(let i = 0; i<arr2.length; i++){
        let indx = arr1.indexOf(arr2[i])
        if(indx!= -1){
            arr.push(arr2[i])
            arr1.splice(indx, 1)
        }
    }
    return arr;
};