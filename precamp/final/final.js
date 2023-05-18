// changeFocus : 휴대폰 번호가 입력되면 포커스를 옆 칸으로 넘겨주는 함수
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
// checkValidation : 휴대폰 번호 칸이 모두 입력되었는지 확인하고 인증번호 전송 버튼을 활성화 해주는 함수
const checkValidation = function() {

    let p1 = document.getElementById("p1").value
    let p2 = document.getElementById("p2").value
    let p3 = document.getElementById("p3").value
    let sb = document.getElementById("send__button").style

    if(p1.length===3&&p2.length===4&&p3.length===4){
        // 모든 input 이 비어있지 않을 때
        document.getElementById("send__button").disabled=false
        sb.color = "#0086FF"
        sb.backgroundColor = "white"
        sb.cursor = "pointer"}
        // 하나라도 비어 있을 때
        else{
        document.getElementById("send__button").disabled=true
        sb.color = ""
        sb.backgroundColor = ""
        sb.cursor = ""
    }
}
// time : 타이머 3분 , isStarted : 타이머가 실행중인지 여부
let time = 179
let isStarted = false
// auth : 인증번호 인증 함수
const auth = () => {

    if(isStarted === false){
        // 타이머가 작동중이 아닐때
        isStarted = true
        let fb = document.getElementById("finish__button")

        // 인증번호 전송 버튼 비활성화 및 색상 변경
        document.getElementById("send__button").disabled = true
        document.getElementById("send__button").style.color = ""
        document.getElementById("send__button").style.backgroundColor = ""
        document.getElementById("send__button").style.cursor = ""

        // 인증확인 버튼 활성화 및 색상 변경
        fb.disabled = false
        fb.style.color = "white"
        fb.style.backgroundColor = "#0068FF"
        fb.style.cursor = "pointer"

        // 6자리 랜덤 숫자 생성후 출력
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("number").innerText = token

        let timer 
        timer = setInterval(function() {
            let min = Math.floor(time/60)
            let sec = String(time%60).padStart(2,"0")
            if(time >= 0){
                // 시간이 남았을 때
                document.getElementById("timer").innerText = (min+":"+sec)
                time = time-1
            }else{
                // 시간 초과시 인증완료 버튼 비활성화 및 색상 변경
                fb.disabled = true
                fb.style.color = ""
                fb.style.backgroundColor = ""
                fb.style.cursor = ""

                // 인증번호 및 시간 초기화
                document.getElementById("number").innerText = "000000"
                document.getElementById("timer").innerText = "3:00"
                time = 179
                isStarted = false
                clearInterval(timer)
            }
        },10)
    }else{
        // 타이머가 작동중일때 
    }

}
// finish : 인증완료 버튼 클릭 시 함수
const finish = () =>{
    alert("인증이 완료되었습니다.")
    document.getElementById("finish__button").innerText="인증완료"
    time = 0

    let sub = document.getElementById("sub")
    sub.disabled = false
    sub.style.cursor = "pointer"
    sub.style.color = "#0068FF"
    sub.style.backgroundColor = "white"
    sub.style.borderColor = "#0068FF"
}
// checkInfo : 유저가 이메일,이름,비밀번호를 정상적으로 입력했는지 확인하는 함수
const checkInfo = () =>{
    let email = document.getElementById("info__email")
    let name = document.getElementById("info__name")
    let pw = document.getElementById("info__pw")
    let pwc = document.getElementById("info__pwc")
    let region = document.getElementById("city").value
    let gender = document.querySelector('input[type=radio][name=gender]:checked')
    let signup = true

    if(email.value===""){
        // 이메일 칸 비었을때
        document.getElementById("errEmail").innerText ="이메일을 입력해 주세요."
        signup = false
    }else{
        if(email.value.includes("@")){
            // 이메일 정상 입력 되었을 때
            document.getElementById("errEmail").innerText = ""
        }else{ // 이메일에 @ 가 존재하지 않을 때 
            document.getElementById("errEmail").innerText = "이메일이 올바르지 않습니다."
            signup = false
        }
    }

    if(name.value===""){
        // 이름 칸 비었을때
        document.getElementById("errName").innerText = "이름이 입력해 주세요."
        signup = false
    }else{
        // 이름 입력 되었을때
        document.getElementById("errName").innerText = ""
    }

    if(pw.value===""){
        // 비밀번호 칸 비었을때
        document.getElementById("errPw").innerText = "비밀번호를 입력해 주세요."
        signup = false
    }else{
        if(pw.value === pwc.value){
            // 비밀번호 확인 값 정상 입력
            document.getElementById("errPw").innerText = ""
        }else{
            // 비밀번호와 확인 값 다를 때
            document.getElementById("errPw").innerText = "비밀번호가 다릅니다."
            document.getElementById("errPwc").innerText = "비밀번호가 다릅니다."
            signup = false
        }
    }
    
    if(pwc.value === ""){
        // 비밀번호 확인 값 비었을 때
        document.getElementById("errPwc").innerText = "비밀번호를 입력해 주세요."
        signup = false
    }else{ // 정상 입력
        document.getElementById("errPwc").innerText = ""
    }

    if(region==="default"){
        // 지역 선택 안했을 때
        document.getElementById("errRegion").innerText = "지역을 선택해 주세요."
        signup = false
    }else{
        // 지역 선택 했을 때
        document.getElementById("errRegion").innerText = ""
    }

    if(!!gender){
        // 성별 선택 했을 때
        document.getElementById("errGender").innerText = ""
    }else{
        // 성별 선택 안했을 때
        document.getElementById("errGender").innerText = "성별을 선택해 주세요."
        signup = false
    }

    if(signup===true){
        alert("코드캠프 가입을 축하합니다.")
    }else{
        alert("정보를 다시 입력해주세요.")
    }
}