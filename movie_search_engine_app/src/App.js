import "./App.css";
import Header from "./components/Header/header.component";
import SearchBox from "./components/SearchBox/search-box.component";
import InfoText from "./components/info-text/infoText.component";
import MoviesContainer from "./components/movies-container/moviesContainer.component";
import { GlobalProvider } from "./contexts/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container-fluid">
        <Header title="Movie Search Engine APP" />
        <SearchBox />
        <InfoText text={"Sharing a few of our favourite movies"} />
        <MoviesContainer />
      </div>
    </GlobalProvider>
  );
};

export default App;
