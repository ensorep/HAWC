import React from 'react';
import {Component} from 'react';
import Header from '../components/Header'
import { setConfig } from 'react-hot-loader'

setConfig({
    showReactDomPatchNotification: false
})
class Index extends Component {
  render() {
    return (
      <div id="app">
        <Header/>
        <div className="content">
          <h2 className="content-tagline">Be A Hero</h2>
          <button className="content_button-main">Get Involved</button>
        </div>
      </div>
    )
  }
}

export default Index;