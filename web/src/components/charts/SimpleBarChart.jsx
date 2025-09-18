import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimpleBarChart = ({ data, xAxisKey, barKey, fill }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey={xAxisKey} fontSize={12} />
        <YAxis fontSize={12} />
        <Tooltip cursor={{fill: 'rgba(245, 245, 245, 0.5)'}}/>
        <Legend wrapperStyle={{fontSize: "14px"}}/>
        <Bar dataKey={barKey} fill={fill} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
