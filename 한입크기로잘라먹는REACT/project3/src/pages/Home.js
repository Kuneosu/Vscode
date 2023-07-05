// 메인 페이지

import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import Button from "../component/Button";
import DiaryList from "../component/DiaryList";
import Header from "../component/Header";
import { getMonthRangeByDate, setPageTitle } from "../util";

const Home = () => {
    // DiaryStateContext 를 통해 데이터를 받아옴
    const data = useContext(DiaryStateContext);
    // 날짜를 변경함에 따라 변경될 날짜 state 생성
    const [pivotDate, setPivotDate] = useState(new Date());
    // 변경된 날짜와 조건에 따라 필터링된 데이터를 담는 state 
    const [filteredData, setFilteredData] = useState([]);

    // data 또는 날짜가 변경될 때마다 조건에 맞는 데이터를 필터링함.
    useEffect(() => {
        // 데이터가 존재하는 경우
        if (data.length >= 1) {
            // 현재 설정된 날짜에 대한 최소 날짜와 최대 날짜를 구해옴
            const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
            // 구해온 최소,최대 날짜에 맞춰 그 사이 날짜에 생성된 데이터만 필터링하여 가져옴
            setFilteredData(
                data.filter(
                    (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
                )
            );
            // 데이터가 존재하지 않는 경우 빈 배열을 반환
        } else {
            setFilteredData([]);
        }
        setPageTitle("구너수의 감정 일기장");
    }, [data, pivotDate]);

    // 헤더에 쓸 날짜 포맷 지정
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;
    // 헤더의 > 버튼 클릭시 수행할 날짜 증가 함수
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };
    // 헤더의 < 버튼 클릭시 수행할 날짜 감소 함수
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }

    return (
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
                rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
            />
            <DiaryList data={filteredData} />
        </div>
    );
};

export default Home;