import img1 from '../../images/Screenshot_1.png';
import img2 from '../../images/Screenshot_7.png';
import img3 from '../../images/athena.png';
import img4 from '../../images/ferma.png';
import img5 from '../../images/movies.png';
import img6 from '../../images/powerful.png';
import img7 from '../../images/dsn.png';
import img8 from '../../images/diamond.png';
import img9 from '../../images/krako.png';
import img10 from '../../images/mycom.png';
import img11 from '../../images/lipinskay.png';
import img12 from '../../images/rescanner.png';
import img13 from '../../images/chister.png';
import img14 from '../../images/julia.png';
import img15 from '../../images/blades.png';
import img16 from '../../images/bowa.png';
import img17 from '../../images/health.png';
import img18 from '../../images/svit.png';
import img19 from '../../images/rootz.png';
import img20 from '../../images/golden.png';
import img21 from '../../images/bloss.png';

import Masonry from 'react-masonry-css'

import './works.scss';

function Works({popupActive, setPopupActive}) {

    function toggleRubberBand(bouncy){
        bouncy.classList.add("bouncing");
        bouncy.addEventListener("animationend", ()=>{
            bouncy.classList.remove("bouncing");
        });
    }

    const previewPortfolioData = [
        {photo: img2, link: 'http://naduhaysia.com.ua/', title: 'naduhaysia'},
        {photo: img1, link: 'https://fox-lingerie.com/', title: 'fox'}
    ]

    const portfolioData = [
        {photo: img14, link: 'https://julianadentist.ua/', title: 'julia'},
        {photo: img4, link: 'https://ferma24.in.ua/', title: 'ferma'},
        {photo: img3, link: 'https://athenadressrental.ca/', title: 'athena'},
        {photo: img5, link: 'https://movies-db-alpha.vercel.app/', title: 'movies'},
        {photo: img6, link: 'https://www.powerful-progress.com/', title: 'powerful'},
        {photo: img7, link: 'https://dsn.group/', title: 'dsn'},
        {photo: img8, link: 'https://diamondlaser.com.ua/', title: 'diamond'},
        {photo: img9, link: 'https://krako.land/', title: 'krako'},
        {photo: img10, link: 'https://mycom.uz/', title: 'mycom'},
        {photo: img11, link: 'https://www.lipinskaya-brand.com/', title: 'lipinskay'},
        {photo: img12, link: 'https://rescanners.com/', title: 'rescanner'},
        {photo: img13, link: 'https://chister.in.ua/', title: 'chister'},
        {photo: img15, link: 'https://blades.dp.ua/', title: 'blades'},
        {photo: img16, link: 'https://bowa-medical.com.ua/', title: 'bowa'},
        {photo: img17, link: 'https://healthfit.com.ua/', title: 'health'},
        {photo: img18, link: 'https://svitson.com.ua/', title: 'svit'},
        {photo: img19, link: 'https://rootz-gkkyece26-maxwalex.vercel.app/', title: 'rootz'},
        {photo: img20, link: 'https://goldenflora.com.ua/', title: 'golden'},
        {photo: img21, link: 'https://www.blosssales.com/', title: 'bloss'},
    ]

    

    const previewPortfolioDataView = previewPortfolioData.map(({link, title, photo}) => {
        return  <div className='works_portfolio-item' key={title}>
                    <a href={link} target="_blank">
                        <img src={photo} alt={title} />
                        <div className="works_portfolio-item--hover">
                            <span>visit <br /> project</span>
                        </div>
                    </a>
                </div>
    })

    const portfolioDataView = portfolioData.map(({link, title, photo}) => {
        return  <div className='works_portfolio-item' key={title}>
                    <a href={link} target="_blank">
                        <img src={photo} alt={title} />
                        <div className="works_portfolio-item--hover">
                            <span>visit <br /> project</span>
                        </div>
                    </a>
                </div>
    })

    const togglePopup = e => {
        e.preventDefault()
        setPopupActive(popupActive => !popupActive)
    }

    return (
        <div className="works pseudo_tags">
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
                            <a href="#" class="main_button" onClick={e => togglePopup(e)}>
                                <span class="button-text">See More</span>
                                <div class="fill-container"></div>
                            </a>
                        </div>
                    </div>

                    <div className="works_portfolio">
                        <Masonry
                            breakpointCols={2}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {previewPortfolioDataView}
                        </Masonry>
                    </div>
                </div>

                {popupActive && <div className="works_popup">
                    <div className="works_popup-inner">
                        <Masonry
                            breakpointCols={5}
                            className="works_popup-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {portfolioDataView}
                        </Masonry>

                        <div className="works_popup-close" onClick={e => togglePopup(e)}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>}
            
        </div>
    )
}

export default Works;