import React from 'react'
import idp from '../idp.jpeg'

export default function Footer() {
  return (
    <div>
      <div className="footer-wrap">
        <div><p>Designed by: <a href="http://iconicdigitalpalette.com">Iconic Digital Palette</a></p></div>
        <div><img class="idp-mini" src={idp} alt="logo"/></div>
      </div>
    </div>
  )
}
