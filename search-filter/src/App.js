import { useState, useEffect } from "react";
import "./App.css";
import SearchBox from "./components/search-box/searchBox";
import ItemsList from "./components/items-list/itemsList";

const App = () => {
  const [items, setItems] = useState([]);
  const [searchString, setSearchString] = useState('')

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(searchString.toLowerCase())
  })

  const onStringChange = (string) => {
    setSearchString(string)
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="App">
      <SearchBox onStringChange={onStringChange} />
      <ItemsList items={filteredItems} />
    </div>
  );
};

export default App;
