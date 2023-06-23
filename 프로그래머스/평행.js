function solution(dots) {
    let slopes = new Set();
    // 두 선분이 평행하다 = 두 선분의 기울기가 같다
    // 선분의 기울기 = (y1-y2) / (x1-x2)
    for (let i = 0; i < 4; i++) {
        let x1 = dots[i][0];
        let y1 = dots[i][1];
        for (let j = i + 1; j < 4; j++) {
            console.log(`i = ${i}, j = ${j}`)
            let x2 = dots[j][0];
            let y2 = dots[j][1];
            if (x1 === x2 && y1 === y2) {
                slope = `${i}${j}`;
            }
            else {
                let slope = (y1 - y2) / (x1 - x2);
            }
            slopes.add(slope);

        }
    }
    answer = slopes.size === 9 ? 0 : 1;
    return answer;
}

let dots = [[4, 1], [4, 1], [2, 4], [5, 10]];

console.log(solution(dots));