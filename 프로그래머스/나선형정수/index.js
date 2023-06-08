function create2DArray(rows, columns) {
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }
    return arr;
}

const solution = (n) => {
    let arr = create2DArray(n, n);

    let leftCol = 0;
    let rightCol = n - 1;
    let topRow = 0;
    let bottomRow = n - 1;
    let num = 1;
    while (topRow <= bottomRow && leftCol <= rightCol) {
        for (let i = leftCol; i <= rightCol; i++) {
            arr[topRow][i] = num;
            num++;
        }
        topRow++;

        for (let j = topRow; j <= bottomRow; j++) {
            arr[j][rightCol] = num;
            num++;
        }
        rightCol--;

        if (topRow <= bottomRow) {
            for (let x = rightCol; x >= leftCol; x--) {
                arr[bottomRow][x] = num;
                num++;
            }
            bottomRow--;
        }

        if (rightCol >= leftCol) {
            for (let y = bottomRow; y >= topRow; y--) {
                arr[y][leftCol] = num;
                num++;
            }
            leftCol++;
        }

    }
    return arr;

}

