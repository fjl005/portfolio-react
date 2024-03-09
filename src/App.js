import './App.css';
import NavbarApp from './components/NavbarApp';
import IntroSection from './components/IntroSection';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import MyFacts from './components/MyFacts';

function App() {
    return (
        <div className='body-background'>
            <NavbarApp />
            <IntroSection />
            <AboutMe />
            <MyProjects />
            {/* <MyFacts /> */}
            <ContactMe />
        </div>
    );
}

export default App;
