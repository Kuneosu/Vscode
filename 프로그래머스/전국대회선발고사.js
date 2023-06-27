

function solution(rank, attendance) {
    let answer = 0;
    const true_rank = [];
    for (let i = 0; i < attendance.length; i++) {
        if (attendance[i]) {
            true_rank.push(rank[i]);
        }
    }

    true_rank.sort(compareNumbers = (a, b) => {
        return a - b;
    });

    const a = rank.findIndex(v => v === true_rank[0]);
    const b = rank.findIndex(v => v === true_rank[1]);
    const c = rank.findIndex(v => v === true_rank[2]);

    answer = (10000 * a) + (100 * b) + c;

    return answer;
}

const r = [3, 7, 2, 5, 4, 6, 1];
const a = [false, true, true, true, true, false, false];

console.log(solution(r, a));

