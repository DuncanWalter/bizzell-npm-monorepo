import { render } from 'react-dom'
import React from 'react'
import styles from './index.css'
import {
  Button,
  joinNames,
  justifyCenter,
  alignCenter,
  justifyEnd,
} from '@bizzell/tempest'
import { DisplayRenderer, LayoutRoot } from '@bizzell/wizard'

import 'froala-editor/js/froala_editor.pkgd.min.js'
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'font-awesome/css/font-awesome.css'

import FroalaEditor from 'react-froala-wysiwyg'

const { root, editorContainer } = styles
import { store } from './store'
import { increment, decrement } from './actions'

function ButtonDemo() {
  return (
    <div>
      <div className={editorContainer}>
        <FroalaEditor tag="textarea" />
      </div>
      <div className={justifyEnd}>
        <Button
          text="Hello World!"
          secondary
          onClick={() =>
            import('./dynamic').then(dynamic => {
              dynamic.assertImported()
            })
          }
        />
        <Button text="Hello World!" primary />
      </div>
    </div>
  )
}

/* Replaced ButtonDemo to test that the state store works */
function counterDemo() {
  return (
    <div>
      <h1>Count = {store.getState().count}</h1>
      <Button text="Add" primary onClick={() => store.dispatch(increment())} />
      <Button
        text="Subtract"
        secondary
        onClick={() => store.dispatch(decrement())}
      />
    </div>
  )
}

const layoutRoot: LayoutRoot = {
  appName: 'demo',
  layout: {
    type: 'custom',
    customComponent: 'buttonDemo',
    props: {},
  },
  customComponents: {
    buttonDemo: counterDemo,
  },
}

/* I don't know if there's another way to subscribe, so I just made this a function */
const renderCount = function() {
  render(
    <div className={joinNames(root, justifyCenter, alignCenter)}>
      <div style={{ padding: '24px 12px 24px', backgroundColor: '#ffffff' }}>
        <DisplayRenderer {...layoutRoot} />
      </div>
    </div>,
    document.getElementById('anchor')!,
  )
}

renderCount()
store.subscribe(renderCount)
