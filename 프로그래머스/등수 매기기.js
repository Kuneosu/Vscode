const score = [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]];

function solution(score) {
    // 평균 값을 저장한 avg 배열 생성
    const avg = score.map(v => (v[0] + v[1]) / 2);
    // 평균 값을 내림차순으로 정렬하여 저장해둘 sort_avg 배열 생성 
    let sort_avg = [...avg];
    sort_avg.sort((a, b) => b - a);

    // 이전 값과 같은지 판단하는 변수
    let pre_item = 101;
    // 등수 값을 가지고 있는 변수
    let rank = 1;
    // 각 점수별 등수를 저장할 객체
    const ranks = {};

    // 정렬된 배열을 순회하면서 이전값과 다른 값이라면 객체의 키값으로 추가하고 rank를 value로 저장
    for (let item of sort_avg) {
        if (item !== pre_item) {
            ranks[item] = rank;
            rank++;
            pre_item = item;
        } else {
            rank++;
        }
    }

    const answer = [];

    // 정렬되지 않은 평균값 배열을 순회하면서 
    // 값에 맞는 value 값을 answer 배열에 저장.
    for (let it of avg) {
        it = it.toString();
        answer.push(ranks[it]);
    }

    return answer;
}

console.log(solution(score));