import img1 from '../../images/Screenshot_1.png';
import img2 from '../../images/Screenshot_7.png';
import img3 from '../../images/athena.png';
import img4 from '../../images/ferma.png';
import img5 from '../../images/movies.png';
import img6 from '../../images/powerful.png';

import Masonry from 'react-masonry-css'

import './works.scss';

function Works() {

    function toggleRubberBand(bouncy){
        bouncy.classList.add("bouncing");
        bouncy.addEventListener("animationend", ()=>{
            bouncy.classList.remove("bouncing");
        });
    }

    const portfolioData = [
        {photo: img2, link: 'http://naduhaysia.com.ua/', title: 'naduhaysia'},
        {photo: img1, link: 'https://fox-lingerie.com/', title: 'fox'},
        {photo: img3, link: 'https://athenadressrental.ca/', title: 'athena'},
        {photo: img4, link: 'https://ferma24.in.ua/', title: 'ferma'},
        {photo: img5, link: 'https://movies-db-alpha.vercel.app/', title: 'movies'},
        {photo: img6, link: 'https://www.powerful-progress.com/', title: 'powerful'},
    ]

    const portfolioView = portfolioData.map(({link, title, photo}) => {
        return  <div className='works_portfolio-item' key={title}>
                    <a href={link} target="_blank">
                        <img src={photo} alt={title} />
                    </a>
                </div>
    })

    return (
        <section className="works pseudo_tags">
            <div className="works_inner">
                <div className="text_zone">
                    <h2 className='pseudo_tags'>
                        <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>M</span>
                        <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>y</span>
                        <span className='bouncy space letter' onMouseOver={e => toggleRubberBand(e.target)}>P</span>
                        <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>o</span>
                        <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>r</span>
                        <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>t</span>
                        <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>f</span>
                        <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>o</span>
                        <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>l</span>
                        <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>i</span>
                        <span className='bouncy' onMouseOver={e => toggleRubberBand(e.target)}>o</span>
                    </h2>
                    <div className='text pseudo_tags'>
                        <p>A small gallery of recent projects chosen by me. It's only a drop in the ocean compared to the entire list.</p>
                        <a href="#" class="main_button">
                            <span class="button-text">See More</span>
                            <div class="fill-container"></div>
                        </a>
                    </div>
                </div>

                <div className="works_portfolio">
                    <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {portfolioView}
                    </Masonry>
                </div>
            </div>
        </section>
    )
}

export default Works;