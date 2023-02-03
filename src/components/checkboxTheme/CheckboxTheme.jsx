import { useState } from 'react'

import './checkboxTheme.scss';

function CheckboxTheme() {
    const [isChecked, setChecked] = useState(true)

    const handleChecked = () => {
        setChecked(!isChecked)

        if(isChecked) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }

  return (
    <div className="toggle">
        <input type="checkbox" id="toggle" onClick={() => handleChecked()} />   
        <label htmlFor="toggle"></label>
    </div>
  )
}

export default CheckboxTheme