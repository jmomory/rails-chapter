import { selector } from 'recoil'
import { countryState } from '../header/atoms'
import axios from 'axios'

const dataFetcher = selector({
  key: 'data',
  get: async ({ get }) => {
    const country = get(countryState)
    const revenue: any = await axios.get<any>(
      `http://localhost:4000/api/orders/revenue/${country}`
    )
    const average: any = await axios.get<any>(
      `http://localhost:4000/api/orders/average/${country}`
    )
    const customers: any = await axios.get<any>(
      `http://localhost:4000/api/orders/customers/${country}`
    )
    return {
      revenue: `${revenue.data.revenue}€`,
      average: `${average.data.average}€`,
      customers: customers.data.numbers,
    }
  },
})

export default dataFetcher
