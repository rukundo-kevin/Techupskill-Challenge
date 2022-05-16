// most visited node in a circular array in c++
// https://www.hackerrank.com/challenges/most-visited-node-in-a-circular-array/problem

function most_visited_node_in_a_circular_array(n, queries) {
    let arr = new Array(n).fill(0);
    let max = 0;
    let maxIndex = 0;
    for (let i = 0; i < queries.length; i++) {
        let index = queries[i];
        arr[index]++;
        if (arr[index] > max) {
            max = arr[index];
            maxIndex = index;
        }
    }
    return maxIndex;
}

let n = 4
let rounds = [1,3,1,2]

console.log(most_visited_node_in_a_circular_array(n, rounds));

