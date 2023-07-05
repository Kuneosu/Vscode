// 일기를 작성하는 페이지
import "./Editor.css";
import { useCallback, useEffect, useState } from "react";
import { getFormattedDate, emotionList } from "../util";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import EmotionItem from "./EmotionItem";

// initData : 기존에 생성되어있던 데이터
// onSubmit : 작성 완료 버튼 클릭 시 이벤트
const Editor = ({ initData, onSubmit }) => {
    // useNavigate 를 사용하여 뒤로가기 구현 => navigate(-1);
    const navigate = useNavigate();
    // useEffect 를 사용하여 initData 가 변경될때마다 state를 initData 로 업데이트
    useEffect(() => {
        if (initData) {
            setState({
                ...initData,
                date: getFormattedDate(new Date(parseInt(initData.date))),
            });
        }
    }, [initData]);
    // 날짜, emotionId, 내용을 가지고 있는 state 
    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: "",
    });
    // 날짜가 변경되었을 때  state 날짜를 업데이트 해주는 함수
    const handleChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        });
    };
    // 내용이 변경되었을 때 state 내용을 업데이트 해주는 함수
    const handleChangeContent = (e) => {
        setState({
            ...state,
            content: e.target.value,
        });
    };
    // 작성 완료 버튼 클릭시 함수
    const handleSubmit = () => {
        onSubmit(state);
    }
    // 취소 버튼 클릭시 뒤로가기를 수행하는 함수
    const handleOnGoBack = () => {
        navigate(-1);
    }
    // 각각의 감정을 클릭시 클릭한 감정id로 state의 감정id를 업데이트 하는 함수
    const handleChangeEmotion = useCallback((emotionId) => {
        setState((state) => ({
            ...state,
            emotionId,
        }));
    }, []);


    return (
        <div className="Editor">
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input type="date" value={state.date}
                        onChange={handleChangeDate} />
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                    {/* 감정리스트를 순회하면서 각 감정별 아이템 생성
                    state의 감정ID가 순회중인 감정의 ID와 동일할 경우 isSelected 값을 True로 설정 */}
                    {emotionList.map((it) => (
                        <EmotionItem
                            key={it.id}
                            {...it}
                            onClick={handleChangeEmotion}
                            isSelected={state.emotionId === it.id} />
                    ))}
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                    <textarea
                        placeholder="오늘은 어땠나요?"
                        value={state.content}
                        onChange={handleChangeContent} />
                </div>
            </div>
            <div className="editor_section bottom_section">
                <Button text={"취소하기"} onClick={handleOnGoBack} />
                <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default Editor;