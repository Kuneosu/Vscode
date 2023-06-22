// 콜백 함수

// const repeat = (count) => {
//     for (let idx = 0; idx < count; idx++) {
//         console.log(idx + 1);
//     }

// repeat(5);

// const repeatDouble = (count) => {
//     for (let idx = 0; idx < count; idx++) {
//         console.log((idx + 1) * 2);
//     }
// }

// repeatDouble(5);

const repeat = (count, callBack) => {
    for (let idx = 0; idx < count; idx++) {
        callBack(idx + 1);
    }
}

const origin = (count) => {
    console.log(count);
}

const double = (count) => {
    console.log(count * 2);
}

repeat(5, origin);
repeat(5, double);