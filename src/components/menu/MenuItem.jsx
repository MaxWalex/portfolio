// import { useState } from "react";

// import { Link } from "react-scroll";

function MenuItem({title, to}) {

    // const [active, setActive] = useState(false)

  return (
    <li key={title}>
        <a href={`#${to}`}>
            {title}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </a>
    </li>
  )
}

export default MenuItem;