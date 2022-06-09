import { useContext } from "react"
import "./moviesContainer.styles.scss"
import MovieContainer from "../movie-container/movieContainer.component"
import { GlobalContext } from "../../contexts/GlobalState"

const MoviesContainer = () => {
    const { filteredMovies } = useContext(GlobalContext)
    // const [movie, setMovie] = useState(movies)

    return (
        <div className="moviesContainer row row-cols-1 row-cols-md-2 g-4">
            {
                filteredMovies.map(movie => {
                    const { id, name, imageUrl, text } = movie
                    return (
                        <MovieContainer key={id} name={name} imageUrl={imageUrl} text={text} />
                    )
                })
            }
        </div>
    )
}

export default MoviesContainer