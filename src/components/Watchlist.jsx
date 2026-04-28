import { useContext, useState } from "react"
import WatchlistContext from "../context/WatchlistContext"
import { Link } from "react-router"

const Watchlist = () => {

    const {watchlist, setWatchlist, deleteMovie} = useContext(WatchlistContext)
    // console.log(watchlist)
    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")

    const toggleWatched = (id) => {

        const updatedWatchlist = watchlist.map ((movie) => {
            if (movie.id === id) {
                const updatedMovie = {
                    ...movie,
                    watched: !movie.watched
                }
                return updatedMovie
            } else {
                return movie
            }
        })
        setWatchlist(updatedWatchlist)
    }

    const filterMovie = (filterBy, property) => {
        const filteredMovies = watchlist.filter((movie) => {
            return movie[property] === filterBy
        })
        return filteredMovies
    }

    const filteredMovies = () => {
        if (title !== "") {
            return filterMovie(title, "title")
        } else if (genre !== "") {
            return filterMovie(genre, "genre")
        } else {
            return watchlist
        }
    }

    let filteredWatchlist = filteredMovies()

    return (
        <>
            <h2>Movies</h2>
            {watchlist.length > 0 ? (
                <>
                    <h3>Filter Movies:</h3>
                    <form>
                        <div>
                            <label>Filter by Title: </label>
                            <input 
                                type="text"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>
                        <h3>OR:</h3>
                        <div>
                            <label>Filter by Genre: </label>
                            <input 
                                type="text"
                                value={genre}
                                onChange={(event) => setGenre(event.target.value)}
                            />
                        </div>
                    </form>
                    <br />
                    <Link to="/movies/new"><button>Add a New Movie</button></Link>
                    <h3>Watchlist</h3>
                    <ol>
                        {filteredWatchlist.map((movie) => (
                            <li key={movie.id}>
                                <p><b>{movie.title}</b></p>
                                <p>Genre: {movie.genre} - {movie.year}</p>
                                <p>{movie.watched ? <b>Watched</b> : <b>Not-Watched</b>} <button onClick={() => toggleWatched(movie.id)}>Change Watched Status</button></p>
                                <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
                            </li>
                        ))}
                    </ol>
                </>
            ) : (
                <>
                    <h2>List is Empty</h2>
                    <Link to="/movies/new"><button>Add a New Movie</button></Link>
                </>
            )}
        </>
    )
}

export default Watchlist