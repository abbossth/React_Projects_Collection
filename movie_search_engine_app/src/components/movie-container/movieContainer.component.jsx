
const MovieContainer = ({ imageUrl, name, text }) => {
    return (
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
            <div className="card border-0">
                <h3 className="text-center">{ name }</h3>
                <img src={imageUrl} className="card-img-top" alt="movieCover" />
                <div className="card-body">
                    <p className="card-text text-center">{ text }</p>
                </div>
            </div>
        </div>
    )
}

export default MovieContainer
