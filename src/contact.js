import Navbar from "./navbar"
import { Link } from "react-router-dom"

const Contact = () => {


    return (
        <>
            <Navbar></Navbar>
            <h1>Contact Page</h1>
            <p>
                <Link to="/about">About</Link>

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

            </p>
        </>
    )

}


export default Contact