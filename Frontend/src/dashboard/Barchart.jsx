
import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Barchart() {
  const data = [
    {
      category: "veg",
      noOfRecipes: 20,
      Breakfast: 5,
      Lunch: 7,
      Dinner: 8
    },
    {
      category: "non-veg",
      noOfRecipes: 10,
      Breakfast: 4,
      Lunch: 2,
      Dinner: 4
    },
    {
      category: "baked",
      noOfRecipes: 5,
      Breakfast: 2,
      Lunch: 2,
      Dinner: 1
    },
    {
      category: "grilled",
       noOfRecipes: 12, 
       Breakfast: 5,
      Lunch: 2,
      Dinner: 5
    },
    {
      category: "cold", 
      noOfRecipes: 30,
       Breakfast: 10,
      Lunch: 12,
      Dinner: 8
    },
  ]

  return (
    <div>
      <ResponsiveContainer width="99%" aspect={2}>
      <BarChart
      width={400}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="noOfRecipes" fill="orange" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      <Bar dataKey="Breakfast" fill="blue" activeBar={<Rectangle fill="pink" stroke="blue" />} />

      <Bar dataKey="Lunch" fill="green" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      <Bar dataKey="Dinner" fill="red" activeBar={<Rectangle fill="pink" stroke="blue" />} />
    </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Barchart