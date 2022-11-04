import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/Nav.css"
export default function Nav(props) {
    const [drop, setDrop] = useState(false)
    const printItem = (item) => {
        return (
            <Link key={item.title}
                to={item.to}
                onClick={() => setDrop(!drop)}>{item.title}</Link>
        )
    }
    return (
        <nav className="nav-container">
            <h1 className="nav-title" onClick={() => setDrop(!drop)}>
            {drop ? "▼" : "▲"} RITUALS</h1>
            {drop ? <div className="nav-list">
                {props.list?.map(printItem)}</div> : null}
        </nav>
    )
}