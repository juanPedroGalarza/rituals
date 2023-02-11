import WriteText from "../components/WriteText"
import text from "../assets/text/home"
import "../styles/Home.css"
import { Link } from "react-router-dom"
import MainStyled from "../components/styled/MainStyled";

export default function Home() {
    return (
        <MainStyled>
            <p>{text.title}</p>
            <div className="home-description">
                <WriteText interval={100}>{text.description}</WriteText>
            </div>
            <Link to="/jugar">{"JUGAR :)"}</Link>
        </MainStyled>
    )
}