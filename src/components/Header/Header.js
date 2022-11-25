import React from 'react'
import HeaderTop from './HeaderTop'
import "./Header.css"
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'

function Header() {
  return (
    <div>
      <HeaderTop/>
      <HeaderMiddle/>
      <HeaderBottom/>
    </div>
  )
}

export default Header