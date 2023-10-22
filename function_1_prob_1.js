function addNumbers(num1 , num2){
    let sum = num1 + num2;
    return sum;
  }
  
  function finalAdd(a,b){
    let add = addNumbers(a,b) + a+b;
    return add;
  }
  let res = finalAdd(3,4);
  console.log(res)
  