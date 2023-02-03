import React from 'react'

import Links from './Links'
import CheckboxTheme from '../checkboxTheme/CheckboxTheme'
import './menu.scss'

function Menu() {
  return (
    <nav>
        <CheckboxTheme />
        <ul className='menu_items'>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
        <Links />
    </nav>
  )
}

export default Menu