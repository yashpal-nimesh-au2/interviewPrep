var findMedianSortedArrays = function(nums1, nums2) {
    var arr = [],
		len = nums1.length + nums2.length;
    if(len == 1) {
        return nums1.length == 1 ? nums1[0] : nums2[0];
    }   
    var arr_len = len % 2 == 0 ? (len)/2 + 1 : Math.ceil(len/2);    
    var i = 0,
        j = 0;   
    while(arr.length < arr_len) {
        if(i < nums1.length && j < nums2.length) {
            if(nums1[i] <= nums2[j]) {
                arr.push(nums1[i]);
                i++;
            }
            else {
                arr.push(nums2[j]);
                j++;
            }
        }
        else if(i >= nums1.length) {
            arr.push(nums2[j]);
            j++;
        }
        else {
            arr.push(nums1[i]);
            i++;
        }
    }

    return len % 2 == 0 ? (arr[arr.length-1] + arr[arr.length-2])/2 : arr[arr.length-1];
};

console.log(findMedianSortedArrays([1,3],[2]))