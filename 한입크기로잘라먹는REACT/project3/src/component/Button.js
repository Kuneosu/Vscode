// 각종 버튼 컴포넌트

import "./Button.css";

// text : 버튼에 들어갈 내용
// type : 버튼의 종류 ( default, positive, negative )
// onClick : 버튼 클릭 이벤트
const Button = ({ text, type, onClick }) => {
    // 전달받은 버튼 타입이 p,n 둘 중 하나라면 p,n 중에서 선택 아니라면 default 선택
    const btnType = ["positive", "negative"].includes(type) ? type : "default";
    return (
        // class명에 btnType 을 포함시켜서 type에 따라 버튼의 스타일이 변경되도록 설정
        <button className={["Button", `Button_${btnType}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    );
};

// type 매개변수의 기본값으로 default 설정
Button.defaultProps = {
    type: "default",
};
export default Button;