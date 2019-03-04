// Dummy react component for testing with router
import React, { Component, Fragment } from 'react'
import { Button, justifyEnd } from '@bizzell/tempest'
import FroalaEditor from 'react-froala-wysiwyg'

import styles from '../index.css'
import { Navigation } from './Navigation'
const { editorContainer } = styles

export class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <div className={editorContainer}>
          <FroalaEditor tag="textarea" />
        </div>
        <div className={justifyEnd}>
          <Button
            text="Hello World!"
            secondary
            onClick={() =>
              import('../dynamic').then(dynamic => {
                dynamic.assertImported()
              })
            }
          />
          <Button text="Hello World!" primary />
        </div>
      </Fragment>
    )
  }
}
