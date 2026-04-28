import { useContext, useState } from "react"
import WatchlistContext from "../context/WatchlistContext"

const Watchlist = () => {

    const {watchlist, setWatchlist, deleteMovie} = useContext(WatchlistContext)
    // console.log(watchlist)
    const [titleValue, setTitleValue] = useState("")
    const [genreValue, setGenreValue] = useState("")

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
        if (titleValue !== "") {
            return filterMovie(titleValue, "title")
        } else if (genreValue !== "") {
            return filterMovie(genreValue, "genre")
        } else {
            return watchlist
        }
    }

    let filteredWatchlist = filteredMovies()

    return (
        <>
            <h2>Watchlist</h2>
            {watchlist.length > 0 ? (
                <>
                    <h3>Filter Transactions:</h3>
                    <form>
                        <div>
                            <label>Filter by Title: </label>
                            <input 
                                type="text"
                                value={titleValue}
                                onChange={(event) => setTitleValue(event.target.value)}
                            />
                        </div>
                        <h3>OR:</h3>
                        <div>
                            <label>Filter by Genre: </label>
                            <input 
                                type="text"
                                value={genreValue}
                                onChange={(event) => setGenreValue(event.target.value)}
                            />
                        </div>
                    </form>
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
                <h2>List is Empty</h2>
            )}
        </>
    )
}

export default Watchlist