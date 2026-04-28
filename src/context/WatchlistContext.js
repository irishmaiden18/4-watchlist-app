import { createContext } from "react";

const WatchlistContext = createContext({
    watchlist: [],
    setWatchlist: () => {},
    addMovie: () => {},
    deleteMovie: () => {}

})

export default WatchlistContext