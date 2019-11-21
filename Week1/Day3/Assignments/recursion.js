function sum(x,length) {
    if (length == 1) {
      return 1;
    } else {
      return x[length-1] + sum(x , length- 1);
    }
  }
  
  let arr =[1, 2, 3, 4, 5];
  console.log(sum(arr,arr.length));