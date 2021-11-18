import React from 'react'
import { useRecoilValue } from 'recoil'
import { CardSection } from '../components'
import './index.css'
import dataFetcher from './selectors'

const Sections = () => {
  const { revenue, average, customers } = useRecoilValue(dataFetcher)

  return (
    <>
      <h1 className="section-title">Summary</h1>
      <div className="sections">
        <CardSection title="revenue" data={revenue} />
        <CardSection title="Average Revenue per Order" data={average} />
        <CardSection title="Customers" data={customers} />
      </div>
    </>
  )
}

export default Sections
