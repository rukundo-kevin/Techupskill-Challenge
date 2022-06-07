
// A function to find a 2D before matrix given the 2D after matrix

function findMatrixBeforeSummation(afterMatrix) {
    let beforeMatrix = new Array(afterMatrix.length);
    for (let i = 0; i < afterMatrix.length; i++) {
        beforeMatrix[i] = new Array(afterMatrix[i].length);
        for (let j = 0; j < afterMatrix[i].length; j++) {
            beforeMatrix[i][j] = afterMatrix[i][j] - 1;
        }
    }
    return beforeMatrix;
}

function findMatrixAfterSummation(beforeMatrix) {
    let afterMatrix = new Array(beforeMatrix.length);
    for (let i = 0; i < beforeMatrix.length; i++) {
        afterMatrix[i] = new Array(beforeMatrix[i].length);
        for (let j = 0; j < beforeMatrix[i].length; j++) {
            afterMatrix[i][j] = beforeMatrix[i][j] + 1;
        }
    }
    return afterMatrix;
}

console.log(findMatrixAfterSummation([[1,2],[3,4]]))