function Navbar() {

    return(
        <nav className="navbar">
        <h1>My blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '15px'
                }}>New post</a>
                <a href="/">About</a>
            </div>
        </nav>
    )
}

export default Navbar;