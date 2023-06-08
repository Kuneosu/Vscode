const generateBtn = document.querySelector('#generateBtn')
const gridContainer = document.querySelector('#gridContainer')
const img = '<img src="https://picsum.photos/200/300?random=1">'
generateBtn.addEventListener('click', () => {
    if (gridContainer.children.length >= 30) {
        const confirmed = confirm("모든 사진을 지우시겠습니까?");
        if (confirmed) {
            gridContainer.innerHTML = "";
        }
    } else {
        const img = document.createElement('img');
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        const imgUrl = `https://picsum.photos/500?random=${randomNumber}`;
        img.src = imgUrl;

        gridContainer.appendChild(img);
    }
})

