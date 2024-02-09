import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">Welcome to chilltime</span>
 )
}
export default Header
