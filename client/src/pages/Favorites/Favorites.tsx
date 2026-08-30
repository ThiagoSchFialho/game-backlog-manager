import React, { useState } from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import GameCard from '../../components/GameCard/GameCard';
import { getGameCover } from '../../utils/getGameCover';
import gamesMock from '../../mocks/gamesMock';

const favoriteGames = gamesMock.filter(game => game.favorite === true);

const Favorites: React.FC = () => {
    const [steamApiConnected, setSteamApiConnected] = useState(false);
    const [currentPage] = useState('favorites');

    return (
        <>
            <Header steamApiConnected={steamApiConnected} />
            <div className="main-container">
                <SideMenu currentPage={currentPage} />
                
                <div className="favorites-main-content">
                    <div className="page-header">
                        <h1 className="title">Favoritos</h1>
                    </div>

                    <div className="favorites-games-container">
                        {favoriteGames.map(game => (
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

export default Favorites;