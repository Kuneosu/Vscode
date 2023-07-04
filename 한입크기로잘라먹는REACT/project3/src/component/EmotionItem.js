// Home 페이지 내의 감정 아이템 컴포넌트
import "./EmotionItem.css";

// id : emotionId 
// img : 해당 감정의 이미지 주소
// name : 해당 감정의 name
// onClick : 이 감정 아이템을 클릭했을 때 발생할 이벤트
// isSelected : 이 아이템이 선택되어있는지 아닌지
const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
    // 감정아이템을 클릭했을 시 해당 감정의 ID를 가지고 onClick 함수 실행
    const handleOnClick = () => {
        onClick(id);
    };

    return (
        // isSelected 값이 참일 경우 class 명으로 EmotionItem_on_id 거짓일 경우 EmotionItem_off 로 클래스명을 줘서 스타일을 각기 다르게 설정
        <div className={["EmotionItem", isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`,].join(" ")} onClick={handleOnClick}>
            <img alt={`emotion${id}`} src={img} />
            <span>{name}</span>
        </div>
    );
};

export default EmotionItem;