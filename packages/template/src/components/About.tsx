import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom'
import { Navigation } from './Navigation'

export class About extends Component<RouteComponentProps> {
  render() {
    const { match } = this.props
    return (
      <Fragment>
        <Navigation />
        <h2 style={{ textAlign: 'center' }}>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.url}
          render={() => <h3>Please select a topic.</h3>}
        />
      </Fragment>
    )
  }
}

const Topic = ({ match }: RouteComponentProps<{ topicId: string }>) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
