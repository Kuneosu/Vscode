// 함수 선언식
// function rn(){
//     const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
//     document.getElementById("number").innerText = token
// }


// 화살표 함수
let isStarted = false
const auth = () => {

    if(isStarted === false){
        // 타이머가 작동중이 아닐때
        isStarted = true

        document.getElementById("complete").disabled = false
        document.getElementById("send").innerText = "인증번호 재전송"
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        let colorCode = "#" + token
        document.getElementById("number").innerText = token
        document.getElementById("number").style.color = colorCode
    
        let time = 179
        let timer 

        timer = setInterval(function() {
            let min = Math.floor(time/60)
            let sec = String(time%60).padStart(2,"0")
            if(time >= 0){
                document.getElementById("timer").innerText = (min+":"+sec)
                time = time-1
            }else{
                document.getElementById("complete").disabled = true
                isStarted = false
                clearInterval(timer)
            }
        },1000)
    }else{
        // 타이머가 작동중일때
        // 페이지 새로고침으로 초기화
        window.location.reload()
    }

}