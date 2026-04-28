import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Watchlist from './components/Watchlist'
import AddMovie from './components/AddMovie'
import Home from './components/Home'
import { useState } from 'react'
import WatchlistContext from './context/WatchlistContext'

function App() {

  const [watchlist, setWatchlist] = useState([])

  const addMovie = (movie) => {
    setWatchlist([...watchlist, movie])
  }

  const deleteMovie = (id) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== id)
    setWatchlist(updatedWatchlist)
  }

  return (
    <WatchlistContext value={{
      watchlist: watchlist,
      setWatchlist: setWatchlist,
      addMovie: addMovie,
      deleteMovie: deleteMovie
    }}>
      <h1>Watchlist App 2026</h1>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies/watchlist" element={<Watchlist/>}/>
        <Route path="/movies/new" element={<AddMovie/>}/>
      </Routes>
    </WatchlistContext>
  )
}

export default App
