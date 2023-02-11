import React from 'react'

import { TagCloud } from 'react-tagcloud'

import './about.scss';

function About() {

  function toggleRubberBand(bouncy){
    bouncy.classList.add("bouncing");
    bouncy.addEventListener("animationend", ()=>{
      bouncy.classList.remove("bouncing");
    });
  }

  const data = [
    { value: 'JavaScript', count: 38 },
    { value: 'React Js', count: 30 },
    { value: 'HTML5', count: 33 },
    { value: 'CSS3', count: 20 },
    { value: 'PHP', count: 18 },
    { value: 'Redux', count: 26 },
    { value: 'Sass', count: 5 },
    { value: 'Gulp', count: 29 },
    { value: 'Git', count: 12 },
    { value: 'Webpack', count: 34 },
    { value: 'WordPress', count: 43 },
    { value: 'OpenCart', count: 11 },
    { value: 'npm', count: 26 },
  ]

  return (
    <section className='about pseudo_tags'>
        <div className="about_inner">
            <div className="text_zone">
                <h2 className='pseudo_tags'>
                  <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>M</span>
                  <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>y</span>
                  <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>,</span>
                  <span className='bouncy space' onMouseOver={e => toggleRubberBand(e.target)}>M</span>
                  <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>y</span>
                  <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>s</span>
                  <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>e</span>
                  <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>l</span>
                  <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>f</span>
                  <span className='bouncy space letter' onMouseOver={e => toggleRubberBand(e.target)}>&</span>
                  <span className='bouncy space' onMouseOver={e => toggleRubberBand(e.target)}>I</span>
                </h2>
                <div className='text pseudo_tags'>
                  <p>I'm web developer with 2 years experience web development. My tasks included layout varying degrees of complexity from landing page to large online shops. Worked with B2B and tuned facebook pixel. Also I have own projects with used to React and Redux.</p>
                  <p>Well-organised person, problem solver, independent employee with high attention to detail. Fan of outdoor activities, TV series.</p>
                  <p>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
                </div>
            </div>
        </div>

        <TagCloud
          minSize={12} 
          maxSize={35} 
          tags={data} 
          randomSeed={42}
          colorOptions={{
            luminosity: 'light',
            hue: '#00ff0a',
          }}
        />
    </section>
  )
}

export default About