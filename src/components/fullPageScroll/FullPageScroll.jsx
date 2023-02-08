import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import Menu from '../menu/Menu';
import Sound from '../Sound/Sound';
import Introduce from '../introduce/Introduce';
import CustomCursor from '../customCursor/CustomCursor';
import MouseContextProvider from '../../context/MouseContext';
import About from '../about/About';
import Works from '../works/Works';

function FullPageScroll() {
    const fullPageStyle = {
        position: 'fixed',
        right: 0,
        top: 0,
        width: '90%',
        height: '100%'
    }

    return (
        <Fullpage style={fullPageStyle}>
            <div className='fullpage_nav'>
                <FullpageNavigation />
            </div>
            <MouseContextProvider>
                <div className="App">
                    <Menu />
                    <CustomCursor />
                    
                    <div className='app_content'>
                        <Sound />
                        
                        <FullPageSections>

                            <FullpageSection style={{height: '100vh'}}>
                                <Introduce />
                            </FullpageSection>

                            <FullpageSection style={{height: '100vh'}}>
                                <About />
                            </FullpageSection>

                            <FullpageSection style={{height: '100vh'}}>
                                <Works />
                            </FullpageSection>
                                        
                        </FullPageSections>
                        
                    </div>
                </div>
            </MouseContextProvider>
        </Fullpage>
    )
}

export default FullPageScroll;
