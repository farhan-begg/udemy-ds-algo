  /* write a function called sumZero which accepts a sorted
  array of integers. The function should find the first pair
  where the sum is 0. Return an array that includes both values that sum to zero or 
  undefined if a pair does not exist. 
  
  example 
  sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
  sumZero([-2,0,1,3])
  sumZero([1,2,3])
  
  */



  // naive solution
  // time complexity O(n^2)
  function sumZero(arr){
      for( let i = 0; i < arr.length; i += 1 ){
          for(let j = i+1; j < arr.length; j += 1)
          if(arr[i] + arr[j] === 0){
              return [arr[i], arr[j]]
          }
      }

  }
  console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3]

// refactor 
function sumZero1(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        // check sum of left and right array
        if(sum === 0){
            return [arr[left], arr[right]]
        }else if (sum > 0){
            right --;
        } else {
            left += 1
        }
    }
}
// time complexity O(N)
//space complexity 0(1)
console.log(sumZero1([-3,-2,-1,0,1,2,3])) // [-3,3]
