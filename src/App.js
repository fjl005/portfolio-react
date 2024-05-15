import './App.css';
import NavbarApp from './components/navbar';
import IntroSection from './components/IntroSection';
import ContactMe from './components/ContactMe';
import Projects from './components/projects';
import Skills from './components/skills';
import Journey from './components/journey';
import Timeline from './components/timeline';

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
