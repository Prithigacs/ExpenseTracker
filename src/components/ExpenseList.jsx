const ExpenseList = ({ transactions, deleteTransaction }) => {
    return (
      <div className="card p-4 shadow-lg border-0 mt-4">
        <h4 className="text-center text-primary fw-bold mb-3">Transaction History</h4>
        <ul className="list-group">
          {transactions.length === 0 ? (
            <p className="text-center text-muted">No transactions added</p>
          ) : (
            transactions.map((transaction, index) => (
              <li
                key={index}
                className={`list-group-item d-flex justify-content-between align-items-center shadow-sm border-0 mb-2 rounded`}
                style={{
                  background: transaction.amount < 0 ? "#FFEBEE" : "#E8F5E9",
                  color: transaction.amount < 0 ? "#D32F2F" : "#388E3C",
                }}
              >
                <span className="fw-bold">{transaction.category}</span>
                <span className="fw-bold">${transaction.amount.toFixed(2)}</span>
                <button className="btn btn-danger btn-sm" onClick={() => deleteTransaction(index)}>X</button>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  };
  
  export default ExpenseList;
  