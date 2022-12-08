import { PieChart, Pie, Cell } from "recharts";
import { SimulationChartProps } from "./types";

const Chart = (props: SimulationChartProps) => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx = 0,
    cy = 0,
    midAngle = 0,
    innerRadius = 0,
    outerRadius = 0,
    percent = 0,
    index = 0,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="1.5rem"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={props.data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={130}
        fill="#8884d8"
        dataKey="value"
        className="pie"
      >
        {props.data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.name === "Wins" ? "#367E18" : "#E0144C"}
            stroke="#000"
            strokeWidth={1}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart;
