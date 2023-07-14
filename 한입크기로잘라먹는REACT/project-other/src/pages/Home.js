import Block from "../components/Block";
import Info from "../components/Info";
import Button from "../components/Button";
import "./Home.css";
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="HOME">
            <Header title={"Mascoter Maker"} />
            <Block size="big" />
            <div className="info_box">
                <Info info={"대회명"} type={"text"} />
                <Info info={"인원 수"} type={"number"} />
                <Block size="small" />
                <Button text={"확인"} size="small_button" />
            </div>
        </div>
    );
}

export default Home;