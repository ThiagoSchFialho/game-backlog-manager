import React, { useState } from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import { getGameCover } from '../../utils/getGameCover';
import collectionsMock from '../../mocks/collectionsMock';

const Collections: React.FC = () => {
    const [steamApiConnected, setSteamApiConnected] = useState(false);
    const [currentPage, setCurrentPage] = useState('collections');

    return (
        <>
            <Header steamApiConnected={steamApiConnected} />
            <div className="main-container">
                <SideMenu currentPage={currentPage} />
                
                <div className="collections-main-content">
                    <div className="page-header">
                        <h1 className="title">Coleções</h1>
                    </div>

                    <div className="collection-folders-container">
                        {collectionsMock.map(collection => (
                            <div className="collection-folder-container">
                                <div className="collection-folder-container">
                                    <div className="collection-folder">
                                        {collection.games.slice(0, 4).map(game => (
                                            <div className="game">
                                                <img
                                                    className="collection-game-img"
                                                    src={getGameCover(game.title)}
                                                />
                                            </div> 
                                        ))}
                                    </div>
                                    <p>{collection.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Collections;