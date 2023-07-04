// 특정 id의 일기를 보여주는 페이지

import { useParams } from "react-router-dom";

const Diary = () => {
    const { id } = useParams();
    return (
        <div>
            <div>{id}번 일기</div>
            <div>Diary 페이지입니다.</div>
        </div>
    );
};

export default Diary;