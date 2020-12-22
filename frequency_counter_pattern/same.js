/* write a function called same, which accepts two arrays.
 the function should return true if every value in the array has its corressponding 
value squared in the second array
 the frequency values must be the same

example
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

// Naive Solution
function same(arr1, arr2){
    // check if 2 arrays have different length
    if( arr1.length !== arr2.length){
        return false;
    }
    // loop over first array
    for (let i = 0; i < arr1.length; i += 1 ){
        // what is the index square
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // if index is not in there return false
        if (correctIndex === -1){
            return false;
        }
        // removes index from array
        arr2.splice(correctIndex, 1)
    }
    return true;
}
console.log(same([1,2,3], [4,1,9]))



// REFACTORED SOLUTION
function same1(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    // objects count frequency of individual values in array
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // loop over every value in array1 and add one to counter if value exist or initialize to one
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    // loop over object to compare key
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same1([1,2,3,2,5], [9,1,4,4,11]))
same([1,2,3,2,5], [9,1,4,4,11])
