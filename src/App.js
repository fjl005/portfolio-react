import './App.css';
import Projects from './components/projectspage';
import HomePage from './components/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/projects' element={<Projects />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
