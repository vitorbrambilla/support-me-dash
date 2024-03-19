"use client";

import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";

export default function TeamDistributionChart() {
  const data = [
    {
      name: "Delta",
      value: 55,
      color: "#84cc16",
    },
    {
      name: "Alpha",
      value: 34,
      color: "#3b82f6",
    },
    {
      name: "Canary",
      value: 11,
      color: "#f97316",
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Tooltip
          labelClassName="font-bold"
          wrapperClassName="dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-md dark:!border-border"
        />

        <Pie data={data} dataKey="value" nameKey="name">
          {data.map((item, i) => (
            <Cell key={i} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
