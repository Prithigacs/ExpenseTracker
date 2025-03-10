import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

const App = () => {
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("transactions")) || [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income + expenses;

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center fw-bold text-primary mb-4">Expense Tracker</h1>

      <div className="row">
        {/* Left Side: Balance, Transactions & Form */}
        <div className="col-md-7">
          {/* Balance Section */}
          <div className="card p-4 shadow-lg border-0 mb-3" 
               style={{ background: "linear-gradient(to right, #4CAF50, #81C784)", color: "white" }}>
            <h2 className="text-center fw-bold">Balance: ${balance.toFixed(2)}</h2>
          </div>

          {/* Income & Expense Section */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="card bg-success text-white p-3 shadow-lg">
                <h4 className="fw-bold">Income: ${income.toFixed(2)}</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-danger text-white p-3 shadow-lg">
                <h4 className="fw-bold">Expenses: ${Math.abs(expenses).toFixed(2)}</h4>
              </div>
            </div>
          </div>

          <ExpenseForm addTransaction={addTransaction} />
          <ExpenseList transactions={transactions} deleteTransaction={deleteTransaction} />
        </div>

        {/* Right Side: Chart */}
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <div className="chart-container w-100">
            <ExpenseChart transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
