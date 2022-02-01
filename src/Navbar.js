import { Link } from "react-router-dom"

function Navbar() {

    return(
        <nav className="navbar">
        <h1>My blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className="newPost">New post</Link>
                <Link to="/">About</Link>
            </div>
        </nav>
    )
}

export default Navbar;