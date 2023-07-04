let arr = [[57, 192, 534, 2], [9, 345, 192, 999]];

[
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876]
]

// arr.length = 행의 길이 = 4
// item.length = 열의 길이 = 3 

// arr.length > item.length 
// => 모든 아이템에 아이템의 길이가 행의 길이가 될때까지 0을 추가

// item.length > arr.length
// => 배열에 item.length 길이의 0으로 가득 찬 배열을 행의 길이가 열의 길이가 될때까지 추가

const makeSquare = (arr) => {
    let answer = arr;
    let row = answer.length;
    let col = answer[0].length;
    if (row > col) {
        for (let i = 0; i < row; i++) {
            while (answer[i].length < row) {
                answer[i].push(0);
            }
        }
    }
    else if (col > row) {
        let new_item = []
        for (let i = 0; i < col; i++) {
            new_item.push(0);
        }
        while (answer.length < col) {
            answer.push(new_item);
        }
    } else {
        return answer;
    }
    return answer;
}

console.log(makeSquare(arr));