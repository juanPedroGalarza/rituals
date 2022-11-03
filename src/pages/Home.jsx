import WriteText from "../components/WriteText"
import text from "../assets/text/home"
import "../styles/Home.css"
import { Link } from "react-router-dom"
export default function Home() {
    return (
        <main className="main">
            <p>{text.title}</p>
            <div className="home-description">
                <WriteText interval={100}>{text.description}</WriteText>
            </div>
            <Link to="/play">{"Play :)"}</Link>
        </main>
    )
}