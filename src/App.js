import './App.scss';
import ProjectsPage from './components/projects-page';
import HomePage from './components/home-page';
import SingleProjectPage from './components/single-project-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/projects/:projectName' element={<SingleProjectPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
