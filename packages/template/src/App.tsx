import React from 'react'
import { AppRouter } from './AppRouter'
import { joinNames, justifyCenter, alignCenter } from '@bizzell/tempest'
import { AppState } from './configureStore'
import { connect } from 'react-redux'

import styles from './index.css'
const { root } = styles

function App() {
  return (
    <div className={joinNames(root, justifyCenter)}>
      <div
        style={{
          padding: '24px 12px 24px',
          backgroundColor: '#ffffff',
          minWidth: '700px',
          minHeight: '500px',
        }}
      >
        <AppRouter />
      </div>
    </div>
  )
}

const mapStateToProps = function(state: AppState) {
  return { ...state }
}

const AppContainer = connect(mapStateToProps)(App)

export { AppContainer as App }
