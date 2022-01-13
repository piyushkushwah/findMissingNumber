function findMissingNumber(){
  let arr = [1,2,4,5,6,7,8,10];
  let obj ={};

  for(let i =0; i< arr.length; i++){
      obj[arr[i]] = arr[i];
  }

  for(let i = 0; i < arr[arr.length - 1]; i++){
    if(obj[i] === undefined){
      console.log(i);
    }
  }
}

findMissingNumber();