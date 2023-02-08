import Links from './Links'
import CheckboxTheme from '../checkboxTheme/CheckboxTheme';
import './menu.scss'

function Menu() {

  return (
    <nav>
        <CheckboxTheme />

        <ul className='menu_items'>
          <li><a href="#">About
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </a>
          </li>
          <li><a href="#">Works
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </a>
          </li>
          <li><a href="#">Contacts
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </a>
          </li>
        </ul>
        <Links />
    </nav>
  )
}

export default Menu