function solution(id_pw, db) {
    const try_id = id_pw[0];
    const try_pw = id_pw[1];
    let checker = 0;

    for (let user of db) {
        const user_id = user[0];
        const user_pw = user[1];
        console.log(`user_id = ${user_id} , user_pw = ${user_pw}`);
        console.log(`try_id = ${try_id} , try_pw = ${try_pw}`);
        if (user_id === try_id && user_pw === try_pw) {
            return 'login';
        }
        else if (user_id === try_id && user_pw !== try_pw) {
            checker += 1;
        }
        else {
            continue;
        }
    }
    if (checker !== 0) {
        return 'wrong pw';
    } else {
        return 'fail';
    }
}
const ip = ["rabbit04", "98761"];
const data = [["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]];

console.log(solution(ip, data));