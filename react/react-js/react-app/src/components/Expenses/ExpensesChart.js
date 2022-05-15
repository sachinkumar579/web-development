import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 1 },
    { label: "Mar", value: 2 },
    { label: "Apr", value: 3 },
    { label: "May", value: 4 },
    { label: "Jun", value: 5 },
    { label: "Jul", value: 6 },
    { label: "Aug", value: 7 },
    { label: "Sep", value: 8 },
    { label: "Nov", value: 9 },
    { label: "Dec", value: 10 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  console.log(chartDataPoints);

  return <Chart dataPoints={chartDataPoints}></Chart>;
};

export default ExpensesChart;
