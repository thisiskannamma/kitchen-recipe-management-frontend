import React from 'react';
import { PieChart, Pie, Cell,  Tooltip, Legend } from 'recharts';


function Piechart() {
    const data = [
        { name: 'Monday', value: 40 },
        { name: 'Tuesday', value: 30 },
        { name: 'Wednesday', value: 30 },
        { name: 'Thursday', value: 20 },
        { name: 'Friday', value: 20 },
        { name: 'Saturday', value: 20 },
        { name: 'Sunday', value: 20 },
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',"#8884d8","pink","red"];
  return (
    <div>
        <PieChart width={400} height={600} >
        <Pie
          data={data}
          cx={170}
          cy={200}
          innerRadius={100}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          
        </Pie>
        <Tooltip></Tooltip>
          <Legend/>
        </PieChart>
    </div>
  )
}

export default Piechart