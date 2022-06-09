import { useContext } from "react"
import "./moviesContainer.styles.scss"
import MovieContainer from "../movie-container/movieContainer.component"
import { GlobalContext } from "../../contexts/GlobalState"

const MoviesContainer = () => {
    const { movies } = useContext(GlobalContext)

    return (
        <div className="moviesContainer row row-cols-1 row-cols-md-2 g-4">
            {
                movies.map(movie => {
                    const { id, name, imageUrl, text } = movie
                    return (
                        // <h1 key={movie.id}>{text}</h1>
                        <MovieContainer key={id} name={name} imageUrl={imageUrl} text={text} />
                    )
                })
            }
        </div>
    )
}

export default MoviesContainer