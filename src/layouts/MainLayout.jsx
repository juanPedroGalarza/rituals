// import Footer from "../components/Footer"
import Nav from "../components/Nav"
export default function MainLayout(props) {
    const list = [
        {to:"/",title:"Inicio"},
        {to:"/jugar",title:"Jugar"},
        {to:"/ayuda",title:"Ayuda"},
    ]
    return (
        <>
            <Nav list={list} />
            {props.children}
            {/* <Footer list={list} /> */}
        </>
    )
}