import './App.css';
import NavbarApp from './components/navbar';
import Intro from './components/intro';
import Projects from './components/projects';
import Skills from './components/skills';
import Journey from './components/journey';
import Timeline from './components/timeline';
import Banner from './components/homepage';
import Contact from './components/contact';
import HomePage from './components/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
