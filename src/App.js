import './App.css';
import NavbarApp from './components/NavbarApp';
import IntroSection from './components/IntroSection';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Projects from './projects';

function App() {
    return (
        <div className='body-background'>
            <NavbarApp />
            <IntroSection />
            <AboutMe />
            <Projects />
            <ContactMe />
        </div>
    );
}

export default App;
