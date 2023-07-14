const numlist = [1, 2, 3, 4, 5, 6];
const n = 4;
const distance = (numlist.map(x => Math.abs(n - x))).sort();
console.log(distance);
const answer = distance.map(x => n + x);
console.log(answer);
let pre = Math.max(distance) + 1;
for (let i = 0; i < answer.length; i++) {
    if (answer[i] === pre || !numlist.includes(answer[i])) {
        answer[i] -= (answer[i] - n) * 2;
    }
    pre = answer[i];
}

console.log(answer);