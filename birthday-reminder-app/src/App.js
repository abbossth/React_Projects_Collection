import { useState, useEffect } from "react";
import List from "./List";
import "./App.css";

const App = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);
  return (
    <div className="App">
      <main>
        <section className="container">
          <h3 className="title">{people.length} birthday today</h3>
          <List people={people} />
          <button className="btn" onClick={() => setPeople([])}>
            Clear All
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;
