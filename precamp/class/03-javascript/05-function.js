// 함수 선언식
// function rn(){
//     const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
//     document.getElementById("number").innerText = token
// }


// 화살표 함수
const auth = () => {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    let colorCode = "#" + token
    document.getElementById("number").innerText = token
    document.getElementById("number").style.color = colorCode

    let time = 179

    setInterval(function() {
        let min = Math.floor(time/60)
        let sec = String(time%60).padStart(2,"0")
        if(time >= 0){
            document.getElementById("timer").innerText = (min+":"+sec)
            time = time-1
        }else{document.getElementById("complete").disabled = true}
    },1000)
}