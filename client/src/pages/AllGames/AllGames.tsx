import React, { useState } from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';

const AllGames: React.FC = () => {
    const [steamApiConnected, setSteamApiConnected] = useState(false);
    const [currentPage, setCurrentPage] = useState('allGames');

    return (
        <>
            <Header steamApiConnected={steamApiConnected} />
            <SideMenu currentPage={currentPage} />
        </>
    )
}

export default AllGames;