import React, { useState } from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import GameCard from '../../components/GameCard/GameCard';
import sync from '../../assets/icons/sync.svg';
import { getGameCover } from '../../utils/getGameCover';
import gamesMock from '../../mocks/gamesMock';

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

                        <div className="filters-container">
                            <div className="filter-header">
                                <h1>Filtros</h1>
                                <p>Limpar filtros</p>
                            </div>
                            <form className="filter-form">

                                <label>Status</label>
                                <select>
                                    <option value="all">Todos</option>
                                    <option value="not-played">Não jogado</option>
                                    <option value="played">Jogado</option>
                                    <option value="playing">Jogando</option>                                    
                                    <option value="completed">Zerado</option>
                                </select>

                                <label>Data de lançamento</label>
                                <select>
                                    <option value="all">Todos</option>
                                    {Array.from({ length: new Date().getFullYear() - 1990 + 1 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>

                                <hr/>

                                <label>Ordenar por:</label>
                                <select>
                                    <option value="nome">Nome</option>
                                    <option value="status">Status</option>
                                    <option value="playtime">Tempo de jogo</option>                                    
                                    <option value="genre">Gênero</option>
                                    <option value="developer">Desenvolvedora</option>
                                    <option value="release_date">Data de lançamento</option>
                                </select>

                                <button type="submit">Aplicar Filtros</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllGames;