
let arr =[6,5,7,7,8,8,6,10],target=6;

function findFirstandLastIndex(){

let newarr=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
newarr.push(i);

    }
}
if(newarr.length===0){
    return [-1,-1]
}
return [newarr[0],newarr[newarr.length-1]]

}

console.log(findFirstandLastIndex(arr,target));
