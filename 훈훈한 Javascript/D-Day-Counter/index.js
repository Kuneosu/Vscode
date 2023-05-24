const func = () => {
    const year = (document.querySelector('#year').value)
    const month = (document.querySelector('#month').value)
    const day = (document.querySelector('#day').value)

    console.log(year, month, day)
}

const counterMaker = () => {
    const year = (document.querySelector('#year').value)
    const month = (document.querySelector('#month').value)
    const day = (document.querySelector('#day').value)

    const nowDate = new Date();
    const targetDate = new Date(year + '-' + month + '-' + day);
    const remaining = (targetDate - nowDate) / 1000;
    const remainingDate = Math.floor(remaining / 3600 / 24);
    const remainingHours = Math.floor(remaining / 3600) % 24;
    const remainingMin = Math.floor(remaining / 60) % 60;
    const remainingSec = Math.floor(remaining) % 60;
    console.log(targetDate + " 까지 " + remainingDate + " 일 " + remainingHours + "시간 남았습니다.")
}