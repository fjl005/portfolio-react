import './App.css';
import NavbarApp from './components/NavbarApp';
import IntroSection from './components/IntroSection';
import ContactMe from './components/ContactMe';
import Projects from './projects';
import About from './about';

function App() {
    return (
        <div className='body-background'>
            <NavbarApp />
            <IntroSection />
            <About />
            <Projects />
            <ContactMe />
        </div>
    );
}

export default App;
