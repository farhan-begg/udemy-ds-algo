/* Implement a function called countUniqueValues, 
which accpets a sorted array, and counts the unique values in 
the array. There can be negative numbers in the array,
but it will always be sorted  

countUniqueValues([1,1,1,1,2]) // 2
countUniqueValues([]) // 0



*/

function countUniqueValues(arr){
  
    if(arr.length === 0){
        return 0
    }
    let i = 0

    for(let j = 1; j < arr.length; j += 1)
        // if i is not equal to j 
        // increment then assign i to j
        if(arr[i] !== arr[j]){
            i += 1;
            arr[i] = arr[j]
            
        }
        return i + 1
}
console.log(countUniqueValues([1,1,1,1,2])) // 2
// time complexity O(n)