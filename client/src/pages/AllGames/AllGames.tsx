import React, { useState } from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import GameCard from '../../components/GameCard/GameCard';
import sync from '../../assets/icons/sync.svg';

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';

const AllGames: React.FC = () => {
    const [steamApiConnected, setSteamApiConnected] = useState(false);
    const [currentPage, setCurrentPage] = useState('allGames');

    return (
        <>
            <Header steamApiConnected={steamApiConnected} />
            <div className="main-container">
                <SideMenu currentPage={currentPage} />
                
                <div className="all-games-main-content">
                    <div className="page-header">
                        <h1 className="title">Todos os jogos</h1>
                        <div className="div-center">
                            <div className="sync-steam-btn-container">
                                <img src={sync} alt="sincronizar" />
                                <div className="sync-steam-btn">Sincronizar Steam</div>
                            </div>
                        </div>
                    </div>

                    <div className="game-filter-container">
                        <div className="list-game-container">
                            <GameCard
                                img={img1}
                                name="Forza Horizon 5"
                                status="playing"
                                playtime={1680}
                            />
                            <GameCard
                                img={img2}
                                name="Assassin's Creed III"
                                status="playing"
                                playtime={720}
                            />
                            <GameCard
                                img={img3}
                                name="Minecraft"
                                status="playing"
                                playtime={5760}
                            />
                            <GameCard
                                img={img4}
                                name="DOOM The Dark Ages Defintive Edition"
                                status="playing"
                                playtime={840}
                            />
                            <GameCard
                                img={img1}
                                name="Forza Horizon 5"
                                status="playing"
                                playtime={1680}
                            />
                            <GameCard
                                img={img2}
                                name="Assassin's Creed III"
                                status="playing"
                                playtime={720}
                            />
                            <GameCard
                                img={img3}
                                name="Minecraft"
                                status="playing"
                                playtime={5760}
                            />
                            <GameCard
                                img={img4}
                                name="DOOM The Dark Ages Defintive Edition"
                                status="playing"
                                playtime={840}
                            />
                            <GameCard
                                img={img1}
                                name="Forza Horizon 5"
                                status="playing"
                                playtime={1680}
                            />
                            <GameCard
                                img={img2}
                                name="Assassin's Creed III"
                                status="playing"
                                playtime={720}
                            />
                            <GameCard
                                img={img3}
                                name="Minecraft"
                                status="playing"
                                playtime={5760}
                            />
                            <GameCard
                                img={img4}
                                name="DOOM The Dark Ages Defintive Edition"
                                status="playing"
                                playtime={840}
                            />
                        </div>

                        <div className="filters-container">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllGames;