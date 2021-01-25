/* write a function called maxSubarrySum */
function maxSubarrySum(arr, num) {
    if ( num > arr.length){
        return null   
}

var max = -Infinity;
for (let i = 0; i < arr.length - num + 1; i ++ ){
    temp = 0;
    for (let j = 0; j < num; j++){
        temp +=[i + j];
    }
    if (temp > max){
        max = temp;
    }
}
    return max
}

maxSubarrySum([2,3,4,5], 3)

// sliding window approach

function maxSubarrySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    // create first sum
    for (let i = 0; i < num; i++){
     // store sum in variable
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        // start loop from tempsum
        tempSum = tempSum - arr[i - num] + arr[i];
        // takes maximum between maxSum and tempSum
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum 
}

// time c o(n)
// array [1,2,3,4,5,6,] subtract previous number and add the next 
