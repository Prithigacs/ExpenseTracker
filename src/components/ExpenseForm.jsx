import { useState } from "react";

const ExpenseForm = ({ addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) return;

    const transactionAmount = type === "expense" ? -Math.abs(amount) : Math.abs(amount);

    addTransaction({ amount: transactionAmount, category });
    setAmount("");
    setCategory("");
  };

  return (
    <div className="card p-4 shadow-lg border-0">
      <h4 className="text-center text-primary fw-bold mb-3">Add Transaction</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control shadow-sm"
          />
        </div>
        <div className="mb-3">
  <input
    type="text"
    placeholder="Enter Category (e.g., Food, Travel)"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="form-control shadow-sm"
    style={{ border: "2px solid #007bff", borderRadius: "8px" }}
  />
</div>

<div className="mb-3 d-flex justify-content-center">
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      id="income"
      value="income"
      checked={type === "income"}
      onChange={(e) => setType(e.target.value)}
    />
    <label className="form-check-label" htmlFor="income">Income</label>
  </div>

  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      id="expense"
      value="expense"
      checked={type === "expense"}
      onChange={(e) => setType(e.target.value)}
    />
    <label className="form-check-label" htmlFor="expense">Expense</label>
  </div>
</div>

        <button className="btn btn-primary w-100 fw-bold shadow-sm">Add Transaction</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
