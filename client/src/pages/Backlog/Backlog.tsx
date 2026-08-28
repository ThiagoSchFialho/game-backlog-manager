import React, { useState } from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import GameCard from '../../components/GameCard/GameCard';
import { getGameCover } from '../../utils/getGameCover';
import gamesMock from '../../mocks/gamesMock';

const Backlog: React.FC = () => {
    const [steamApiConnected, setSteamApiConnected] = useState(false);
    const [currentPage, setCurrentPage] = useState('backlog');

    return (
        <>
            <Header steamApiConnected={steamApiConnected} />
            <div className="main-container">
                <SideMenu currentPage={currentPage} />
                
                <div className="backlog-main-content">
                    <div className="page-header">
                        <h1 className="title">Backlog</h1>
                    </div>

                    <div className="backlog-games-container">
                        {gamesMock.map(game => (
                            <GameCard
                                key={game.id}
                                img={getGameCover(game.title)}
                                name={game.title}
                                status={game.status}
                                playtime={game.playtime}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Backlog;