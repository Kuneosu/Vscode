import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Diary from './pages/Diary';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import { getEmotionImgById } from "./util";
import React, { useEffect, useReducer, useRef, useState } from 'react';

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();


function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      // state 를 순회하면서 state 의 id 와 해당 액션의 id(UPDATE.targetID)가 같으면 수정된 데이터를 반환 아닌 경우 기존 데이터 반환
      return state.map((it) => String(it.id) === String(action.data.id) ? { ...action.data } : it);
    case "DELETE":
      // state에서 삭제하려는 일기의 id와 id가 다른 일기들만 필터링해서 반환
      return state.filter((it) => String(it.id) !== String(action.targetId));
    case "INIT":
      return action.data;
    default: {
      return state;
    }
  }
}

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime() - 1,
    content: "mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime() - 2,
    content: "mock2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime() - 3,
    content: "mock3",
    emotionId: 3,
  },
];

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  // 일기 state 생성
  const [data, dispatch] = useReducer(reducer, []);
  // 앞으로 배열 형태의 일기를 리스트로 렌더링할 때 아이템별로 고유한 key를 부여하기 위해 idRef 생성
  const idRef = useRef(0);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);
  // 일기 생성 함수
  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };
  // 일기 수정 함수
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };
  // 일기 삭제 함수
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <div className="App">
            {/* 리액트 라우터를 통해 각각의 페이지 컴포넌트들을 라우팅함. */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/diary/:id' element={<Diary />} />
              <Route path='/edit/:id' element={<Edit />} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}


export default App;
