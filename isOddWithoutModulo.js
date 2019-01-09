/*Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

Note:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.
*/
function checkOdd(num) {
    // your code here
    if(num<0){        //Check if number is negative 
        num=-num;     //Convert it into positive number
    }
    let b=Math.floor(num/2)    //Taking value for loop iteration
    for(var i=1;i<=b;i++){    
             num=num-2     //Will check the number is odd if it subtraction end to 1 by decrementing -2 to the number
             if(num==1){
                 return true;  //return true if number is odd
             }
            
        }  
             
    return false;      //return false if number is even
  
} 
  console.log(checkOdd(5))
  console.log(checkOdd(-5))
  console.log(checkOdd(8))
  console.log(checkOdd(-8))
  console.log( checkOdd(0))