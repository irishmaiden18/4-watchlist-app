import { useContext } from "react"
import WatchlistContext from "../context/WatchlistContext"
import { Link } from "react-router"

const Home = () => {

    const {watchlist} = useContext(WatchlistContext)

    const watched = watchlist.filter((movie) => {
        return movie.watched === true
    })

    const unwatched = watchlist.filter((movie) => {
        return movie.watched === false
    })

    return (
        <>
            <h2>Welcome User!</h2>

            {watchlist.length > 0 ? (
                <>
                    <h3>Total Movies in List: {watchlist.length}</h3>
                    <h4>Total Watched Movies: {watched.length}</h4>
                    <h4>Total Unwatched Movies: {unwatched.length}</h4>
                </>
            ) : (
                <>
                    <h3>Watchlist is empty!</h3>
                    <h3>Please add a new movie here: <Link to="/movies/new"><button>Add a New Movie</button></Link></h3>
                    
                </>
            )}


        </>
    )
}

export default Home