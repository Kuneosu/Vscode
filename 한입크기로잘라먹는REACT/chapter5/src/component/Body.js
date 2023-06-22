import "./Body.css";

const Body = () => {
    const handleOnClick = () => {
        alert("버튼을 클릭하셨군요.");
    }
    return (
        <div className="body">
            <button onClick={handleOnClick}>클릭</button>
        </div>
    );
}

// Body.defaultProps = {
//     favor: [],
// };

export default Body;