import { useState } from 'react';
import './styles.css';
import Header from '../../components/Header/Header';

const Home = () => {
    const [steamApiConnected, setSteamApiConnected] = useState(false);

    return (
        <>
            <Header steamApiConnected={steamApiConnected} />
        </>
    )
}

export default Home;