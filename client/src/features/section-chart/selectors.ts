import { selector } from 'recoil'
import { countryState } from '../header/atoms'
import axios from 'axios'

const chartDataFetcher = selector({
  key: 'data/chart',
  get: async ({ get }) => {
    const country = get(countryState)
    const data: any = await axios.get<any>(
      `http://localhost:4000/api/orders/monthlyrevenue/${country}`
    )
    return data.data.revenue_per_month
  },
})

export default chartDataFetcher
