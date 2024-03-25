import './App.css';
import NavbarApp from './components/NavbarApp';
import IntroSection from './components/IntroSection';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import Projects from './pages/ProjectsPage';

function App() {
    return (
        <div className='body-background'>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomePage />} path='/' />
                    <Route element={<AboutMePage />} path='/aboutme' />
                    <Route element={<Projects />} path='/projects' />
                    <Route element={<ContactMe />} path='/contact' />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
