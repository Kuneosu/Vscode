import { useNavigate } from "react-router-dom";
import "./Button.css";

const Button = ({ text, size }) => {
    const navigate = useNavigate();
    const onClickBtn = () => {
        navigate('/name');
    }
    return (
        <button className={size} onClick={onClickBtn}>{text}</button>
    );
}

export default Button;