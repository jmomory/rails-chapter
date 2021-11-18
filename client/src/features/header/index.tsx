import React from 'react'
import MemoryLogo from '../../assets/memory-half-white.svg'
import { Dropdown } from 'semantic-ui-react'
import { countryState } from './atoms'
import './index.css'
import { useRecoilState } from 'recoil'

const Header = () => {
  const [country, setCountry] = useRecoilState(countryState)

  const countryOptions = [
    { key: 'au', value: 'Australia', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'Austria', flag: 'at', text: 'Austria' },
    { key: 'bh', value: 'Bahrain', flag: 'bh', text: 'Bahrain' },
    { key: 'be', value: 'Belgium', flag: 'be', text: 'Belgium' },
    { key: 'br', value: 'Brazil', flag: 'br', text: 'Brazil' },
    { key: 'ca', value: 'Canada', flag: 'ca', text: 'Canada' },
    {
      key: 'ci',
      value: 'Channel Islands',
      flag: 'gb',
      text: 'Channel Islands',
    },
    { key: 'cy', value: 'Cyprus', flag: 'cy', text: 'Cyprus' },
    { key: 'cz', value: 'Czech Republic', flag: 'cz', text: 'Czech Republic' },
    { key: 'dk', value: 'Denmark', flag: 'dk', text: 'Denmark' },
    { key: 'ie', value: 'EIRE', flag: 'ie', text: 'EIRE' },
    {
      key: 'eu',
      value: 'European Community',
      flag: 'eu',
      text: 'European Community',
    },
    { key: 'fi', value: 'Finland', flag: 'fi', text: 'Finland' },
    { key: 'fr', value: 'France', flag: 'fr', text: 'France' },
    { key: 'de', value: 'Germany', flag: 'de', text: 'Germany' },
    { key: 'gr', value: 'Greece', flag: 'gr', text: 'Greece' },
    { key: 'is', value: 'Iceland', flag: 'is', text: 'Iceland' },
    { key: 'il', value: 'Israel', flag: 'il', text: 'Israel' },
    { key: 'it', value: 'Italy', flag: 'it', text: 'Italy' },
    { key: 'jp', value: 'Japan', flag: 'jp', text: 'Japan' },
    { key: 'lb', value: 'Lebanon', flag: 'lb', text: 'Lebanon' },
    { key: 'lt', value: 'Lithuania', flag: 'lt', text: 'Lithuania' },
    { key: 'mt', value: 'Malta', flag: 'mt', text: 'Malta' },
    { key: 'nl', value: 'Netherlands', flag: 'nl', text: 'Netherlands' },
    { key: 'no', value: 'Norway', flag: 'no', text: 'Norway' },
    { key: 'pl', value: 'Poland', flag: 'pl', text: 'Poland' },
    { key: 'pt', value: 'Portugal', flag: 'pt', text: 'Portugal' },
    { key: 'za', value: 'RSA', flag: 'za', text: 'RSA' },
    { key: 'sa', value: 'Saudi Arabia', flag: 'sa', text: 'Saudi Arabia' },
    { key: 'sg', value: 'Singapore', flag: 'sg', text: 'Singapore' },
    { key: 'es', value: 'Spain', flag: 'es', text: 'Spain' },
    { key: 'se', value: 'Sweden', flag: 'se', text: 'Sweden' },
    { key: 'ch', value: 'Switzerland', flag: 'ch', text: 'Switzerland' },
    {
      key: 'ae',
      value: 'United Arab Emirates',
      flag: 'ae',
      text: 'United Arab Emirates',
    },
    { key: 'gb', value: 'United Kingdom', flag: 'gb', text: 'United Kingdom' },
    { key: 'us', value: 'USA', flag: 'us', text: 'USA' },
  ]

  return (
    <div className="header-app">
      <img className="logo" src={MemoryLogo} alt="memory-logo" />
      <Dropdown
        className="dropdown"
        placeholder="Select Country"
        search
        selection
        defaultValue={country}
        onChange={(_, data) => setCountry(data.value as string)}
        options={countryOptions}
      />
    </div>
  )
}

export default Header
