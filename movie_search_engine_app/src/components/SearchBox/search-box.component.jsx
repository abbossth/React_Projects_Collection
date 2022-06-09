import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";

const SearchBox = () => {
  const { searchMovie } = useContext(GlobalContext);
//   const [searchString, setSearchString] = useState("");

  return (
    <div className="row">
      <div className="offset-md-2 col-12 col-md-8">
        <div className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            // value={searchString}
            placeholder="Search Movie..."
            aria-label="Search"
            onChange={(e) => searchMovie(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
