import "./App.css";
import { useState, useContext } from "react";
import { GlobalProvider } from "./context/GlobalState";
import { GlobalContext } from "./context/GlobalState";

const amountDisplay = (amount) => {
  return amount < 0 ? `-$${-amount}` : `$${amount}`;
};

const App = () => {
  return (
    <GlobalProvider>
      <div className="container m-auto px-2" style={{ maxWidth: "600px" }}>
        <Header title={"Expense Tracker"} />
        <div className="row mt-2">
          <div className="col-12 col-md-6">
            <Balance />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12 col-12">
            <Statistics />
          </div>
        </div>
        <div className="row mt-5 px-2">
          <div className="col-12">
            <History />
          </div>
        </div>
        <div className="row mt-5 px-2">
          <div className="col-12">
            <AddNewTransaction />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

const Header = ({ title }) => {
  return <h1 className="text-center">{title}</h1>;
};

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, amount) => acc + amount, 0).toFixed(2);

  return (
    <div className="text-start mt-4 px-2">
      <p className="text-uppercase m-0"> Your Balance </p>
      <h2 className="text-uppercase"> {amountDisplay(total)} </h2>
    </div>
  );
};

const Statistics = () => {
  const { transactions } = useContext(GlobalContext);

  const incomes = transactions.map((transaction) =>
    transaction.amount >= 0 ? transaction.amount : 0
  );
  const expenses = transactions.map((transaction) =>
    transaction.amount < 0 ? transaction.amount : 0
  );

  const incomeTotal = incomes.reduce((acc, curr) => acc + curr, 0).toFixed(2);
  const expenseTotal = expenses.reduce((acc, curr) => acc + curr, 0).toFixed(2);

  return (
    <div className="row text-center fw-bold">
      <div className="col-6">
        <Income amount={amountDisplay(incomeTotal)} />
      </div>
      <div className="col-6">
        <Expense amount={amountDisplay(expenseTotal)} />
      </div>
    </div>
  );
};

const Income = ({ amount }) => {
  return (
    <div className="card">
      <div className="card-body">
        <p className={`text-uppercase m-0`}>Income</p>
        <h3 className={"text-uppercase m-0 text-success"}>{amount}</h3>
      </div>
    </div>
  );
};

const Expense = ({ amount }) => {
  return (
    <div className="card">
      <div className="card-body">
        <p className={`text-uppercase m-0`}>Expense</p>
        <h3 className={"text-uppercase m-0 text-danger"}>{amount}</h3>
      </div>
    </div>
  );
};

const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h1> History </h1>
      {transactions.length === 0 ? (
        <div className="alert alert-light" role="alert">
          No Transaction
        </div>
      ) : (
        transactions.map((item) => {
          return (
            <HistoryItem
              text={item.text}
              amount={item.amount}
              key={item.id}
              id={item.id}
            />
          );
        })
      )}
    </div>
  );
};

const HistoryItem = ({ id, amount, text }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div className="row mt-2 border">
      <div
        className="py-2 d-flex justify-content-between"
        style={{
          borderRight: `5px solid ${amount >= 0 ? "green" : "red"}`,
          backgroundColor: "#fff",
        }}
        title="Double Click to Delete the Transaction"
        onDoubleClick={() => deleteTransaction(id)}
      >
        <p className="m-0">{text}</p>
        <p className="m-0">{amount < 0 ? `-$${-amount}` : `$${amount}`}</p>
      </div>
    </div>
  );
};

const AddNewTransaction = () => {
  // eslint-disable-next-line
  const [text, setText] = useState("");
  // eslint-disable-next-line
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label className="label">Text</label>
          <input
            type="text"
            id="text"
            className="form-control"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label className="label">Amount</label>
          <p>(negative-expense, positive-income)</p>
          <input
            type="number"
            id="text"
            className="form-control"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default App;
