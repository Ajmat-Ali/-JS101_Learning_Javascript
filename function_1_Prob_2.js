function find_difference(num1,num2){
    let sub = num1 - num2;
      let res = find_absolute(sub);
    console.log(res);
  }
  find_difference(17,3);   // Calling the function
  
  function find_absolute(number){
    if(number < 0){
      let finalResult = number * -1;
      return finalResult;
    }else{
      return number;
    }
  }
  
  