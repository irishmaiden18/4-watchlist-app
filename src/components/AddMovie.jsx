import { useContext, useState } from "react"
import WatchlistContext from "../context/WatchlistContext"
import { useNavigate } from "react-router"

const AddMovie = () => {

    const [movie, setMovie] = useState(
        {
            id: "", 
            title: "", 
            genre: "", 
            year: 0, 
            watched: false
        }
    )

    const {watchlist, addMovie} = useContext(WatchlistContext)

    const navigate = useNavigate()

    const handleChange = (event) => {

        const {name, value} = event.target 

        const updatedMovie = {
            ...movie,
            [name]: value
        }

        setMovie(updatedMovie)
    }

    const handleSubmit = (event) => {

        event.preventDefault()

        const newMovie = {
            id: Date.now(),
            title: movie.title,
            genre: movie.genre,
            year: movie.year,
            watched: false
        }

        addMovie(newMovie)

        navigate("/movies/watchlist")

    }

  return (
    <>
        <h2>Add a Movie</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input 
                    type="text"
                    name="title"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Genre: </label>
                <input 
                    type="text"
                    name="genre"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Year: </label>
                <input 
                    type="number"
                    name="year"
                    onChange={handleChange}
                />
            </div>
            <button>Add Movie</button>
        </form>
    </>
  )
}

export default AddMovie