const Expansion = (picture, k) => {
    let answer = [];
    for (line of picture) {
        let new_line = "";
        for (word of line) {
            for (let i = 0; i < k; i++) {
                new_line += word;
            }
        }
        for (let i = 0; i < k; i++) {
            answer.push(new_line);
        }
    }
    return answer;
};

pic = [".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."];
console.log(Expansion(pic, 2));