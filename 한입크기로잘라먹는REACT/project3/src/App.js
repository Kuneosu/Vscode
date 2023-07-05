import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Diary from './pages/Diary';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import React, { useEffect, useReducer, useRef, useState } from 'react';

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();


function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      const newState = [action.data, ...state];
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "UPDATE": {
      const newState = state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it);
      localStorage.setItem("diary", JSON.stringify(newState));
      // state 를 순회하면서 state 의 id 와 해당 액션의 id(UPDATE.targetID)가 같으면 수정된 데이터를 반환 아닌 경우 기존 데이터 반환
      return newState;
    }
    case "DELETE": {
      const newState = state.filter((it) => String(it.id) !== String(action.targetId));
      localStorage.setItem("diary", JSON.stringify(newState));
      // state에서 삭제하려는 일기의 id와 id가 다른 일기들만 필터링해서 반환
      return newState;
    }
    case "INIT":
      // 초기 데이터가 있을 경우 초기 데이터를 그대로 반환
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
  // 데이터가 로드 되었는지를 판별하는 state 변수
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  // 일기 state 생성
  const [data, dispatch] = useReducer(reducer, []);
  // 앞으로 배열 형태의 일기를 리스트로 렌더링할 때 아이템별로 고유한 key를 부여하기 위해 idRef 생성
  const idRef = useRef(0);

  // 데이터가 로드 되었을때 로드 state 변수를 true로 변경
  useEffect(() => {
    const rawData = localStorage.getItem("diary");
    if (!rawData) {
      setIsDataLoaded(true);
      return;
    }
    const localData = JSON.parse(rawData);
    if (localData.length === 0) {
      setIsDataLoaded(true);
      return;
    };
    localData.sort((a, b) => Number(b.id) - Number(a.id));
    idRef.current = localData[0].id + 1;
    dispatch({
      type: "INIT",
      data: localData
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

  // 데이터가 아직 로드되지 않았을때는 데이터 로딩 문구 반환, 로드 되었다면 본 페이지 반환
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
