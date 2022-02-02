import { Link } from "react-router-dom"

function Navbar() {

    return(
        <nav className="navbar">
        <Link to='/'><h1>My blog</h1></Link>
            <div className="links">
                <Link to="/create" className="newPost">New post</Link>
                <Link to="about">About</Link>
            </div>
        </nav>
    )
}

export default Navbar;