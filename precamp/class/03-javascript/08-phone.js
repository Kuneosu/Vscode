const ff = () => {
    let condition = document.getElementById("p1").value

    if(condition === ""){
        document.getElementById("number").innerText="바꼈죠 ?"
    }
}

const changeFocus1 = () =>{

    let phone1 = document.getElementById("p1").value
    if(phone1.length === 3){
        document.getElementById("p2").focus()
    }
}

const changeFocus2 = () =>{

    let phone2 = document.getElementById("p2").value
    if(phone2.length === 4){
        document.getElementById("p3").focus()
    }
}

const checkValidation = function() {

    let p1 = document.getElementById("p1").value
    let p2 = document.getElementById("p2").value
    let p3 = document.getElementById("p3").value

    if(p1.length===3&&p2.length===4&&p3.length===4){
        // 모든 input 이 비어있지 않을 때
        document.getElementById("send").disabled=false
    }else{
        // 하나라도 비어 있을 때
        document.getElementById("send").disabled=true
    }
}


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