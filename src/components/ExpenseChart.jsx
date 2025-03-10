import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const ExpenseChart = ({ transactions }) => {
  const data = transactions.map((t) => ({
    name: t.category,
    value: Math.abs(t.amount),
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF52DE", "#FF4C4C"];

  return (
    <div className="card p-4 shadow-lg border-0 mt-4">
      <h4 className="text-center text-primary fw-bold mb-3">Expense Distribution</h4>
      <div className="d-flex flex-column align-items-center">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
      </div>
    </div>
  );
};

export default ExpenseChart;
