import about from './assets/about-us.jpg'
import education from './assets/education.jpg'
import education3 from './assets/education3.jpg'


const tabPanelData = [
    {
        key: 'about',
        heading: 'ABOUT',
        sub_heading: 'US',
        tab_heading: 'Company Profile',
        tabContext: 'We are unequivocally dedicated to give quality products and operations to our customers before conferred time span. Our workforce and experienced group are exclusively in charge of development and achievement of association.',
        img: about
    },
    {
        key: 'mission',
        heading: 'OUR',
        sub_heading: 'MISSION',
        tab_heading: 'Mission',
        tabContext: ' To focus on continuous improvements in our internal and external systems. To offer products at the most competitive price without compromising on quality. ',
        img: education3
    },
    {
        key: 'vision',
        heading: 'OUR',
        sub_heading: 'VISION',
        tab_heading: 'Vision',
        tabContext: ' To develop capabilities to become end to end solutions provider. To grow into an organization that will be ethical in its dealings keeping in mind all stake holders. ',
        img: education
    }
]

export default tabPanelData;