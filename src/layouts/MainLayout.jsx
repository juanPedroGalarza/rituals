// import Footer from "../components/Footer"
import Nav from "../components/Nav"
export default function MainLayout(props) {
    const list = [
        {to:"/",title:"Home"},
        {to:"/play",title:"Play"},
        {to:"/help",title:"Help"},
    ]
    return (
        <>
            <Nav list={list} />
            {props.children}
            {/* <Footer list={list} /> */}
        </>
    )
}