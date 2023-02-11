import { Link, animateScroll as scroll } from "react-scroll";

import Links from './Links'
import CheckboxTheme from '../checkboxTheme/CheckboxTheme';

import './menu.scss'

function Menu() {

  return (
    <nav>
        <CheckboxTheme />

        <ul className='menu_items'>
          <li><Link href="#">Introduce
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </Link>
          </li>
          <li><Link href="#">About
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </Link>
          </li>
          <li><Link href="#">Works
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </Link>
          </li>
        </ul>
        <Links />
    </nav>
  )
}

export default Menu