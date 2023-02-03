import React from 'react'

import './introduce.scss';
import 'animate.css';

function Introduce() {

  function toggleRubberBand(bouncy){
    bouncy.classList.add("bouncing");
    bouncy.addEventListener("animationend", ()=>{
      bouncy.classList.remove("bouncing");
    });
  }

  return (
    <section className='introduce pseudo_tags'>
      <div className="introduce_inner">
        <div className="text_zone">
          <h1 className='pseudo_tags'>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>H</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>i</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>,</span>
            <br></br>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>I</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>'</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>m</span>
            <span className='space bouncy' onMouseOver={e => toggleRubberBand(e.target)}>M</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>a</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>x</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>,</span>
            <br></br>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>w</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>e</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>b</span>
            <span className='space bouncy' onMouseOver={e => toggleRubberBand(e.target)}>d</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>e</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>v</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>e</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>l</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>o</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>p</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>e</span>
            <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>r</span>
          </h1>
        </div>

        <div className="introduce_under-text pseudo_tags">Front End Developer / HTML Layout</div>

        <div className='introduce_buttons'>
          <button class="main_button">
            <span class="button-text">Download CV</span>
            <div class="fill-container"></div>
          </button>
          <button class="main_button">
            <span class="button-text">Hire Me!</span>
            <div class="fill-container"></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Introduce