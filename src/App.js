import './App.scss';
import Projects from './components/projects-page';
import HomePage from './components/home-page';
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
