import { useState, useEffect } from "react";
import "./App.css";
import SearchBox from "./components/search-box/searchBox";
import ItemsList from "./components/items-list/itemsList";

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="App">
      <SearchBox />
      <ItemsList items={items} />
    </div>
  );
};

export default App;
