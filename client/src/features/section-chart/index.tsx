import React from 'react'
import { useRecoilValue } from 'recoil'
import { Chart } from '../components'
import chartDataFetcher from './selectors'

const ChartSection = () => {
  const data = useRecoilValue(chartDataFetcher)

  return (
    <>
      <h1 className="section-title">Revenue per month</h1>
      <Chart data={data} />
    </>
  )
}

export default ChartSection
