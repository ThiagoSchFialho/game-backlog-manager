import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AllGames from '../pages/AllGames/AllGames';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/allGames' element={<AllGames />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;