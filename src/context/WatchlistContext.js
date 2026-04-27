import { createContext } from "react";

const WatchlistContext = createContext({
    watchlist: [],
    setWatchlist: () => {},
    addMovie: (movie) => {},
    deleteMovie: () => {}

})

export default WatchlistContext