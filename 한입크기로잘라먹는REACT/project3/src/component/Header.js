// 최상단 헤더 섹션 컴포넌트
import "./Header.css";

// title : 헤더에 들어갈 텍스트
// leftChild : 헤더의 왼쪽에 위치할 요소
// rightChild : 헤더의 오른쪽에 위치할 요소
const Header = ({ title, leftChild, rightChild }) => {
    return (
        <div className="Header">
            {/* 매개변수로 전달받은 요소들을 헤더의 각 구역에 배치 */}
            <div className="header_left">{leftChild}</div>
            <div className="header_title">{title}</div>
            <div className="header_right">{rightChild}</div>
        </div>
    );
};

export default Header;