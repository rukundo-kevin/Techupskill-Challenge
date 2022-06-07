// A function to return the array of frequency of maximum value in an array

function ArrayOfFrequencyOfMaxValue(numbers, q) {
    let arr = new Array(numbers.length).fill(0);
    let max = 0;
    let maxIndex = 0;
    for (let i = 0; i < q; i++) {
        let index = numbers[i];
        arr[index]++;
        if (arr[index] > max) {
            max = arr[index];
            maxIndex = index;
        }
    }
    return arr;
}