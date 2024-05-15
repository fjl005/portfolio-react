import './App.css';
import NavbarApp from './components/navbar';
import Intro from './components/intro';
import Projects from './components/projects';
import Skills from './components/skills';
import Journey from './components/journey';
import Timeline from './components/timeline';
import Banner from './components/homepage';
import Contact from './components/contact';

function App() {
    return (
        <div className='body-background'>
            <NavbarApp />
            <Banner />
            <Intro />
            <Skills />
            <Journey />
            <Timeline />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
