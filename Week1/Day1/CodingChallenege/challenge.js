function twoSum(arr, target) {
    let numObject = {};
    for (var i = 0; i < arr.length; i++) {
        let thisNum = arr[i];
        numObject[thisNum] = i;
    }
    for (var i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            return [i, numObject[diff]];
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9));
// Output [ 0, 1 ]
