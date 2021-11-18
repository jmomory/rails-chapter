import { selector } from 'recoil'
import { countryState } from './atoms'

const countrySelected = selector({
  key: 'data',
  get: ({ get }) => {
    const country = get(countryState)
    return country
  },
})

export default countrySelected
