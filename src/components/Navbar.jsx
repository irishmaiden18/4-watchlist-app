import { Link } from "react-router"

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <div className="nav-links">

                <Link to="/">Home</Link>
                <Link to="/movies/watchlist">Watchlist</Link>
                <Link to="/movies/new">Add a New Movie</Link>

            </div>
        </nav>
    </>
  )
}

export default Navbar