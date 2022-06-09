
const SearchBox = () => {
    return (
        <div className="row">
            <div className="offset-md-2 col-12 col-md-8">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search Movie..." aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchBox