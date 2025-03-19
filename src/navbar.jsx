import { Link } from "react-router-dom"
const Navbar=()=>{

return(

    <>
    <div>
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/about">About</Link></ul>
        <ul><Link to="/contact">Contact</Link></ul>
    </div>
    </>
)

}


export default Navbar