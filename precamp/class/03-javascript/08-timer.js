// let time = 10

// setInterval(function() {
//     if(time >= 0){
//         console.log(time)
//         time = time - 1
// }}
//     ,1000)

    // VM1581:3 10
    // VM1581:3 9
    // VM1581:3 8
    // VM1581:3 7
    // VM1581:3 6
    // VM1581:3 5
    // VM1581:3 4
    // VM1581:3 3
    // VM1581:3 2
    // VM1581:3 1
    // VM1581:3 0


let time = 180

setInterval(function() {
    let min = Math.floor(time/60)
    let sec = String(time%60).padStart(2,"0")
    if(time >= 0){
        console.log(min+":"+sec)
        time = time-1
    }
},1000)