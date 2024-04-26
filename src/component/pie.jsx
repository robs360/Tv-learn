import React from "react";
import { Tooltip, PieChart, Pie, Cell } from "recharts";

const Piech = () => {
  const data = [
    { name: 'Spain', value: 2000 },
    { name: 'Italy', value: 1500 },
    { name: 'France', value: 1000 },
    { name: 'England', value: 1000 },
    { name: 'Switzerland', value: 2000 },
    { name: 'Netherlands', value: 1000 }, // Corrected the spelling of Netherlands
  ];

  // Define an array of colors for each segment
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF5733'];

  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {/* Use index to map each color to its corresponding segment */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Piech;
