
 // The function that return an INTEGER, The function accepts INTEGER_ARRAY arr as parameter.
 
function balancedSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let left = 0;
    let right = sum;
    for (let j = 0; j < arr.length; j++) {
        right -= arr[j];
        if (left === right) {
            return j;
        }
        left += arr[j];
    }
    return -1;
}