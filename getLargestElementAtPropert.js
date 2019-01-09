
/*
Write a function called "getLargestElementAtProperty".

Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.*/

function getLargestElementAtProperty(obj, key) {
    // your code here
    let arr=obj[key];
    let abb=[];
    for(i=0;i<arr.length;i++){
      for(j=0;j<arr.length;j++){
          if(arr[i]<arr[j]){
              let ab=arr[i];
              arr[i]=arr[j];
              arr[j]=ab;

          }
      }
    }
      return arr[(arr.length)-1];    }
  
  var obj = {
    key: [1,6,7,2,54,20]
  };
  var output = getLargestElementAtProperty(obj, 'key');
  console.log(output); 