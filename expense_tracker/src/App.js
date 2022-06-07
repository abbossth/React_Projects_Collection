import "./App.css";

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const App = () => {
  return (
    <div className="App">
      <Header title={"Expense Tracker"} />
    </div>
  );
};

export default App;
