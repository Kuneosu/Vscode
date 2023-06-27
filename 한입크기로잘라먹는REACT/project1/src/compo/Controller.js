import "./Controller.css"

const Controller = ({ handleCount, count }) => {
    return (
        <div className="Btn">
            <button onClick={() => handleCount(-1)}>-1</button>
            <button onClick={() => handleCount(-10)}>-10</button>
            <button onClick={() => handleCount(-100)}>-100</button>
            <button onClick={() => handleCount(+100)}>+100</button>
            <button onClick={() => handleCount(+10)}>+10</button>
            <button onClick={() => handleCount(+1)}>+1</button>
            <button onClick={() => handleCount(-count)}>C</button>
        </div>
    );
};

export default Controller;