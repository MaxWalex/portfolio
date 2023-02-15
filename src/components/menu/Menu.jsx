import Links from './Links'
import CheckboxTheme from '../checkboxTheme/CheckboxTheme';
import MenuItem from './MenuItem';

import './menu.scss'

function Menu() {

  const data = [
    {
        title: 'Introduce',
        to: 'introduce'
    },
    {
        title: 'About',
        to: 'about'
    },
    {
        title: 'Works',
        to: 'works'
    }
  ]

  const menuView = data.map(({title, to}) => {
    return <MenuItem key={title} title={title} to={to} />
  })

  return (
    <nav>
        <CheckboxTheme />

        <ul className='menu_items'>
          {menuView}
        </ul>

        <Links />
    </nav>
  )
}

export default Menu