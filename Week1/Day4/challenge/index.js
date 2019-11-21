var firstMissingPositive = function(nums) {

    for(var i=1; i<nums.length; i++){
        if(nums.includes(i)){
            continue;
        }else{
            return i;
        }
    }
};

console.log(firstMissingPositive([3,4,-1,1]))