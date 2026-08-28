import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AllGames from '../pages/AllGames/AllGames';
import Favorites from '../pages/Favorites/Favorites';
import Completed from '../pages/Completed/Completed';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/allGames' element={<AllGames />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/completed' element={<Completed />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;