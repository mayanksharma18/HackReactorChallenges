/*
Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key. 

Notes:
* If the array at the given key is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.

*/
function checkArray(obj, key) {
    // your code here
   let ab=obj["key"];//taking values of key in variable
     if(Array.isArray(ab))  //The Array.isArray() method checks if the given value is an Array or not.
     {
       let sum=0;       
      for(i=0;i<ab.length;i++){
      sum+=ab[i];
      }
    return sum/2;               //returns average
    }
    else{
      return 0;
    }
  
    }
  
 var obj = {
        key: [4,5,6]
      };
      var output = checkArray(obj, 'key');
      console.log(output);
    
    