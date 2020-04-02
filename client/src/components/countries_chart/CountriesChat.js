import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CountriesChart = ({countries}) => {
    const data = countries.map(c => ({name: c.name, Infected: c.infected, amt: c.infected}))
    
    return(
        <BarChart width={400} height={300} data={data}
          margin={{top: 35, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="Infected" fill="#8884d8" />
        </BarChart>
    )
}

export default CountriesChart