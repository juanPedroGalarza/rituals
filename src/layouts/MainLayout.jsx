import Footer from "../components/Footer"
import Nav from "../components/Nav"
export default function MainLayout(props){
    return (
        <>
            <Nav />
            {props.children}
            <Footer/>
        </>
    )
}