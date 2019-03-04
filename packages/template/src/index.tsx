import { render } from 'react-dom'
import React from 'react'
import styles from './index.css'
import { joinNames, justifyCenter, alignCenter } from '@bizzell/tempest'

import 'froala-editor/js/froala_editor.pkgd.min.js'
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'font-awesome/css/font-awesome.css'

import { AppRouter } from './AppRouter'

const { root } = styles

import { Provider, connect } from 'react-redux'
import { store, AppState } from './store'

function App() {
  return (
    <div className={joinNames(root, justifyCenter, alignCenter)}>
      <div style={{ padding: '24px 12px 24px', backgroundColor: '#ffffff' }}>
        <AppRouter />
      </div>
    </div>
  )
}

const mapStateToProps = function(state: AppState) {
  return { ...state }
}

const AppContainer = connect(mapStateToProps)(App)

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('anchor')!,
)
