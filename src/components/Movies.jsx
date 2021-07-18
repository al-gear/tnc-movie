import { FaImdb } from "react-icons/fa"

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Movies = ({ item }) => {

    return (
        <div className="movies">

            <div className="movies-img"><img src={baseUrl + item.backdrop_path} alt={item.title} /></div>
            <h5>{item.title || item.orjinal_title || item.name || "---"}</h5>
            <div className="movies-info">
                <span>{item.release_date || item.first_air_date || "none"}</span>
                <div className="imdb">
                    <FaImdb />
                    <span>{item.vote_average || "-"}</span>
                </div>
            </div>
        </div>
    )
}

export default Movies
