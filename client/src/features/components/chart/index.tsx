import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

export const Chart = (data: any) => {
  return (
    <AreaChart
      width={1000}
      height={500}
      data={data.data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="period" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  )
}

export default Chart
