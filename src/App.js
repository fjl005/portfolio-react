import './App.css';
import NavbarApp from './components/NavbarApp';
import IntroSection from './components/IntroSection';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className='body-background'>
            <BrowserRouter>
                <Routes>
                    <Route
                        element={<HomePage />}
                        path='/'
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
