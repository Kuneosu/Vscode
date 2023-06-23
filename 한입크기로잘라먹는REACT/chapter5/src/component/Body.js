import "./Body.css";
import { useRef, useState } from "react";

const Body = () => {
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handleOnClick = () => {
        if (text.length < 5) {
            textRef.current.focus();
        } else {
            alert(text);
            setText("");
        }
    };

    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성완료</button>
        </div>
    );
}

// 자식 컴포넌트를 불러와 부모와 함께 리렌더링하기.
// const Body = () => {
//     const [number, setNumber] = useState(0);
//     const onIncrease = () => {
//         setNumber(number + 1);
//     };
//     const onDecrease = () => {
//         setNumber(number - 1);
//     };

//     return (
//         <div>
//             <h2>{number}</h2>
//             <Viewer number={number} />

//             <div>
//                 <button onClick={onIncrease}>+</button>
//                 <button onClick={onDecrease}>-</button>
//             </div>
//         </div>
//     );
// }

// 여러가지 state 객체로 한꺼번에 관리하기
// const Body = () => {
//     const [state, setState] = useState({
//         name: "",
//         gender: "",
//         birth: "",
//         bio: "",
//     });

//     const handleOnChange = (e) => {
//         setState({
//             ...state,
//             [e.target.name]: e.target.value,
//         });
//     }

//     return (
//         <div className="body">
//             <div>
//                 <input name="name" value={state.name} onChange={handleOnChange} placeholder="이름" />
//             </div>
//             <div>
//                 <select name="gender" value={state.gender} onChange={handleOnChange}>
//                     <option key={""}></option>
//                     <option key={"남성"}>남성</option>
//                     <option key={"여성"}>여성</option>
//                 </select>
//             </div>
//             <div>
//                 <input name="birth" type="date" value={state.birth} onChange={handleOnChange} />
//             </div>
//             <div>
//                 <textarea name="bio" value={state.bio} onChange={handleOnChange} />
//             </div>
//             <div>
//                 Name : {state.name} <br />
//                 Birth : {state.birth} <br />
//                 Gender : {state.gender} <br />
//                 Bio : {state.bio}
//             </div>
//         </div >

//     );
// }

// Body.defaultProps = {
//     favor: [],
// };

export default Body;