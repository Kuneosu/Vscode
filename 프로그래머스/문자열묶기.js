let strArr = ["a", "bc", "d", "fg", "h"];
const sol = (strArr) => {
    const lenArr = []
    const counts = {};
    for (let i = 0; i < strArr.length; i++) {
        lenArr[i] = strArr[i].length;
    }
    for (let i = 0; i < lenArr.length; i++) {
        const key = lenArr[i];

        if (counts[key]) {
            counts[key] += 1;
        } else {
            counts[key] = 1;
        }
    }

    let maxKey = null;
    let maxValue = -Infinity;

    for (const key in counts) {
        if (counts[key] > maxValue || (counts[key] === maxValue && key > maxKey)) {
            maxValue = counts[key];
            maxKey = key;
        }
    }
    return maxKey;
}

console.log(sol(strArr));