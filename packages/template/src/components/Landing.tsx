import React, { Component, Fragment } from 'react'
import { Navigation } from './Navigation'

export class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <h1>BAR</h1>
      </Fragment>
    )
  }
}
