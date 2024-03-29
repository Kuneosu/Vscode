const messageContainer = document.querySelector('.d-day-message');
const container = document.querySelector('.d-day-container');
const intervalIdArr = [];
const savedDate = localStorage.getItem('saved_date');


const dateFormMaker = () => {
    // 인풋창에 입력된 값들을 가져옴
    const year = (document.querySelector('#target-year').value)
    const month = (document.querySelector('#target-month').value)
    const day = (document.querySelector('#target-day').value)

    // 날짜 형태로 변환
    const dateForm = `${year}-${month}-${day}`;

    // 인풋값을 날짜 형태로 변환하여 리턴
    return dateForm;
}

const counterMaker = (target) => {
    const nowDate = new Date(); // 현재 날짜

    if (target !== savedDate) {
        localStorage.setItem('saved_date', target);
    }

    // 입력받은 날짜를 년,월,일로 구분하여 저장
    const targetYear = (target.split('-'))[0];
    const targetMonth = (target.split('-'))[1];
    const targetDay = (target.split('-'))[2];

    // 입력받은 날짜를 날짜 데이터 형식으로 변환, 자정을 기준으로 설정
    const targetDate = new Date(target).setHours(0, 0, 0, 0);

    // 입력받은 날짜에서 현재 날짜를 빼서 남은 시간을 계산
    const remaining = (targetDate - nowDate) / 1000;
    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60
    }

    // 출력될 html document
    const documentObj = {
        days: document.querySelector('#days'),
        hours: document.querySelector('#hours'),
        min: document.querySelector('#min'),
        sec: document.querySelector('#sec')
    }

    const timeKeys = Object.keys(remainingObj);
    const docKeys = Object.keys(documentObj);

    // 출력
    if (remaining <= 0) {
        container.style.display = 'none';
        messageContainer.style.display = 'flex';
        messageContainer.innerHTML = '<h3>타이머가 종료 되었습니다.</h3>';
        setClearInterval();
        return;
    } else if (isNaN(remaining)) {
        container.style.display = 'none';
        messageContainer.style.display = 'flex';
        messageContainer.innerHTML = '<h3>입력값이 유효하지 않습니다.</h3>';
        setClearInterval();
        return;
    }

    const timeFormat = (time) => {
        if (time < 10) {
            return time = "0" + time;
        } else {
            return time;
        }
    }
    for (i = 0; i < docKeys.length; i = i + 1) {
        const time = timeFormat(remainingObj[timeKeys[i]]);
        documentObj[docKeys[i]].textContent = time;
    }
    console.log('counter')
}

const starter = (target) => {
    if (!target) {
        target = dateFormMaker(); // 입력받은 목표 날짜
    }
    container.style.display = 'flex';
    messageContainer.style.display = 'none';
    setClearInterval();
    counterMaker(target);
    const intervalId = setInterval(() => { counterMaker(target) }, 1000);
    console.log('starter');
    intervalIdArr.push(intervalId);
    console.log(intervalIdArr);
}



const setClearInterval = () => {
    localStorage.removeItem('saved_date');
    for (let i = 0; i < intervalIdArr.length; i++) {
        clearInterval(intervalIdArr[i]);
    }
}

const resetTimer = () => {
    container.style.display = 'none';
    messageContainer.style.display = 'flex';
    messageContainer.innerHTML = '<h3>D-day 를 입력해 주세요.</h3>';
    setClearInterval();
}

if (savedDate) {
    starter(savedDate);
} else {
    container.style.display = 'none';
    messageContainer.innerHTML = '<h3>D-day 를 입력해 주세요.</h3>';
}