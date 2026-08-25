import { useState } from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';

const Home = () => {
    const [steamApiConnected, setSteamApiConnected] = useState(false);
    const [selected, setSelected] = useState('home');

    return (
        <>
            <Header steamApiConnected={steamApiConnected} />
            <SideMenu currentPage={selected} />
        </>
    )
}

export default Home;