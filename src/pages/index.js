import React from "react"

import { setConfig } from 'react-hot-loader'

setConfig({
    showReactDomPatchNotification: false
})
export default () => (
  <div id="app">
    <header className="header">
      <div className="header_branding">
        <h1>HAWC</h1>
        <p>Harnett Animal Welfare Coalition</p>
      </div>
      <nav className="header_nav">
        <li className="header_nav-item">About</li>
        <li className="header_nav-item">Get involved</li>
        <li className="header_nav-item">Programs</li>
        <li className="header_nav-item">Calendar</li>
        <li className="header_nav-item donate">Donate</li>
      </nav>
    </header>
    <div className="content">
      <h2 className="content-tagline">Be A Hero</h2>
      <button className="content_button-main">Get Involved</button>
    </div>
  </div>
)