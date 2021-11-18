import React from 'react'
import { number } from 'prop-types'

const Loader = ({ height }: { height: string }) => (
  <div className="loader" style={{ height: `${height}px` }}>
    <div className="rect rect1" />
    <div className="rect rect2" />
    <div className="rect rect3" />
    <div className="rect rect4" />
    <div className="rect rect5" />
  </div>
)

Loader.defaultProps = {
  height: 50,
}

Loader.propTypes = {
  height: number,
}

export default Loader
