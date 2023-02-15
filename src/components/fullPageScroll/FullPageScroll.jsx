// import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import {SectionsContainer as Sections, Section} from 'react-fullpage';

import Menu from '../menu/Menu';
import Sound from '../Sound/Sound';
import Introduce from '../introduce/Introduce';
import CustomCursor from '../customCursor/CustomCursor';
import About from '../about/About';
import Works from '../works/Works';

function FullPageScroll() {

    let options = {
        activeClass:          'active', // the class that is appended to the sections links
        anchors:              ['introduce', 'about', 'works'], // the anchors for each sections
        arrowNavigation:      true, // use arrow keys
        className:            'SectionContainer', // the class name for the section container
        delay:                1000, // the scroll animation speed
        navigation:           true, // use dots navigatio
        scrollBar:            false, // use the browser default scrollbar
        sectionClassName:     'Section', // the section class name
        sectionPaddingTop:    '0', // the section top padding
        sectionPaddingBottom: '0', // the section bottom padding
        verticalAlign:        true // align the content of each section vertical
      };

    return (
        <div className="App">
            <Menu />
            <CustomCursor />
            
            <div className='app_content'>
                <Sound />

                <Sections {...options}>
                    <Section><Introduce /></Section>
                    <Section><About /></Section>
                    <Section><Works /></Section>
                </Sections>
                
            </div>
        </div>
    )
}

export default FullPageScroll;
