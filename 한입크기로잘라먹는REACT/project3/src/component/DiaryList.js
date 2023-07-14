import "./DiaryList.css";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";

// 다이어리 리스트 정렬 옵션
const sortOptionList = [
    { value: "latest", name: "최신순" },
    { value: "oldest", name: "오래된 순" },
]

const DiaryList = ({ data }) => {
    // 정렬 옵션에 따른 값을 저장할 state 변수
    const [sortType, setSortType] = useState("latest");
    // 정렬 옵션에 따라 정렬된 데이터를 저장할 state 변수
    const [sortedData, setSortedData] = useState([]);

    // data 혹은 정렬 옵션이 변경됨에 따라 값을 정렬하여 반환하는 함수
    useEffect(() => {
        // 날짜를 비교하는 함수 
        const compare = (a, b) => {
            // sortType이 latest = 최신순일 경우 
            if (sortType === "latest") {
                return Number(b.date) - Number(a.date);
            } else { // sortType 이 oldest = 오래된순일 경우
                return Number(a.date) - Number(b.date);
            }
        };
        const copyList = JSON.parse(JSON.stringify(data));
        // 비교식에 따라 카피리스트를 정렬
        copyList.sort(compare);
        // 정렬된 데이터 state 변수에 정렬된 카피리스트 삽입
        setSortedData(copyList);
    }, [data, sortType]);
    // 정렬 옵션이 변경될 때 sortType 의 값을 변경된 값으로 설정
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }
    const navigate = useNavigate();
    // 새 일기 작성 버튼 클릭시 /new 페이지로 이동
    const onClickNew = () => {
        navigate("/new");
    };
    return (
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <select value={sortType} onChange={onChangeSortType}>
                        {sortOptionList.map((it, idx) => (
                            <option key={idx} value={it.value}>{it.name}</option>
                        ))}
                    </select>
                </div>
                <div className="right_col">
                    <Button type={"positive"} text={"새 일기 쓰기"} onClick={onClickNew} />
                </div>
            </div>
            <div className="list_wrapper">
                {sortedData.map((it) => (
                    <DiaryItem key={it.id} {...it} />
                ))}
            </div>
        </div>
    )
};

export default DiaryList;