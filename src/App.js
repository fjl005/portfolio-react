import './App.css';
import NavbarApp from './components/NavbarApp';
import IntroSection from './components/IntroSection';
import ContactMe from './components/ContactMe';
import Projects from './projects';
import About from './about';
import Skills from './skills';
import Journey from './journey';
import Timeline from './timeline';

function App() {
    return (
        <div className='body-background'>
            <NavbarApp />
            <IntroSection />
            <Skills />
            <Journey />
            <Timeline />
            <Projects />
            <ContactMe />
        </div>
    );
}

export default App;
