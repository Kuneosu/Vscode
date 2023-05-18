// 1. 단어를 입력하고 버튼을 누르면
// 2. input 태그의 값을 읽는다
// 3. 제시어의 끝 글자와 입력값의 첫 글자를 비교한다
// 3+. 입력값이 preword 에 있는 값인지 확인한다.
// 3++. preword에 있는 값일 경우 결과란에 땡! 을 출력한다.
// 4. 제시어의 끝 글자와 입력값의 첫 글자가 같으면 결과란에
//    정답입니다! 를 표시하고, 제시어를 입력값으로 변경한다.
// 4+. 제시어를 입력값으로 변경하면서 입력값을 preword에 저장한다.
// 5. 제시어의 끝 글자와 입력값의 첫 글자가 다르면 결과란에 땡!을 표시하고,
//    제시어는 변경하지 않는다.
let preword = []
const startWord = () => {
    let myword = document.getElementById("myword").value
    let word = document.getElementById("word").innerText

    let lastword = word[word.length-1]
    let firstword = myword[0]

    if(firstword === lastword){
        if(preword.includes(myword)){
            document.getElementById("result").innerText = "땡 !"}
        else{
            preword.push(myword)
            document.getElementById("result").innerText = "정답입니다 !"
            document.getElementById("word").innerText = myword
            document.getElementById("myword").value = ""
            
        }
    }else{
        document.getElementById("result").innerText = "땡 !"
    }
}

const lotto = () => {
    // let numbers = {
    //     n1 : document.getElementById("n1").innerText,
    //     n2 : document.getElementById("n2").innerText ,
    //     n3 : document.getElementById("n3").innerText ,
    //     n4 : document.getElementById("n4").innerText ,
    //     n5 : document.getElementById("n5").innerText ,
    //     n6 : document.getElementById("n6").innerText 
    // }
    let nums = []

    for(let i=1;i<7;i++){
        let num = Math.floor((Math.random()*(45-1))+1)
        if(nums.includes(num)){
            i--
        }else{
            nums.push(num)
            // numbers[`n${i}`] = num
        }
    }
    
    document.getElementById("n1").innerText = nums[0]
    document.getElementById("n2").innerText = nums[1]
    document.getElementById("n3").innerText = nums[2]
    document.getElementById("n4").innerText = nums[3]
    document.getElementById("n5").innerText = nums[4]
    document.getElementById("n6").innerText = nums[5]
}