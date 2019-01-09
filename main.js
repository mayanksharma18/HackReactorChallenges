function checkOdd(num) {
    // your code here
    if(num<0){        //Check if number is negative 
        num=-num;     //Convert it into positive number
    }
    let b=Math.floor(num/2)    //Taking value for loop iteration
    for(var i=1;i<=b;i++){    
             num=num-2     //Will check the number is odd if it sums end to 1 by decrementing -2 to the number
             if(num==1){
                 return true;  //return true if number is odd
             }
            
        }  
             
    return false;
  
}
  console.log(checkOdd(5))
  console.log(checkOdd(-5))
  console.log(checkOdd(8))
  console.log(checkOdd(-8))
  console.log( checkOdd(0))