import "./Info.css";

const Info = ({ info, type }) => {
    return (
        <div className="INFO">
            <span className="info_text">{info}</span>
            <input className="info_input" type={type} />
        </div>
    );
}

export default Info;