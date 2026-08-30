import React, { useState } from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import GameCard from '../../components/GameCard/GameCard';
import { getGameCover } from '../../utils/getGameCover';
import gamesMock from '../../mocks/gamesMock';

const completedGames = gamesMock.filter(game => game.status === "completed");

const Completed: React.FC = () => {
    const [steamApiConnected, setSteamApiConnected] = useState(false);
    const [currentPage] = useState('completed');

    return (
        <>
            <Header steamApiConnected={steamApiConnected} />
            <div className="main-container">
                <SideMenu currentPage={currentPage} />
                
                <div className="completed-main-content">
                    <div className="page-header">
                        <h1 className="title">Zerados</h1>
                    </div>

                    <div className="completed-games-container">
                        {completedGames.map(game => (
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

export default Completed;