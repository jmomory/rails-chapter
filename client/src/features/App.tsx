import React, { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import 'semantic-ui-css/semantic.min.css'
import Header from './header'
import Sections from './sections'
import ChartSection from './section-chart'
import './index.css'
import { Dimmer, Loader } from 'semantic-ui-react'

const App = () => {
  return (
    <RecoilRoot>
      <Header />
      <Suspense
        fallback={
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        }
      >
        <Sections />
      </Suspense>
      <Suspense
        fallback={
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        }
      >
        <ChartSection />
      </Suspense>
    </RecoilRoot>
  )
}

export default App
