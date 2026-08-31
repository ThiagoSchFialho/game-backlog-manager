import React, { useEffect, useState } from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import GameCard from '../../components/GameCard/GameCard';
import { getGameCover } from '../../utils/getGameCover';
import type { Game } from '../../types/gamesType';
import { useDb } from '../../hooks/useDb';

function sortByRecentlyPlayed(games: Game[]): Game[] {
    return [...games].sort((a, b) =>
        Number(b.rtime_last_played ?? 0) - Number(a.rtime_last_played ?? 0)
    );
}

function sortByTitle(games: Game[]): Game[] {
    return [...games].sort((a, b) =>
        a.title.localeCompare(b.title, 'pt-BR', { sensitivity: 'base' })
    );
}

const Backlog: React.FC = () => {
    const { fetchGames } = useDb();
    const [steamApiConnected, setSteamApiConnected] = useState(false);
    const [currentPage] = useState('backlog');
    const [gamesList, setGamesList] = useState<Game[]>([]);
    
    useEffect(() => {
        const getGames = async () => {
            const games = await fetchGames();
            if (games) {
                setGamesList(games);
                setSteamApiConnected(true);
            }
        }
        
        getGames();
    }, []);
        
    const playingGames = sortByRecentlyPlayed(gamesList.filter(game => game.status === 'playing'));
    const playedGames = sortByTitle(gamesList.filter(game => game.status === 'played'));
    const notPlayedGames = sortByTitle(gamesList.filter(game => game.status === 'not-played'));

    return (
        <>
            <Header steamApiConnected={steamApiConnected} />
            <div className="main-container">
                <SideMenu currentPage={currentPage} />
                
                <div className="backlog-main-content">
                    <div className="page-header">
                        <h1 className="title">Backlog</h1>
                    </div>

                    <div className="backlog-games-container backlog-playing-games">
                        <h1 className="backlog-games-container-title">Jogando</h1>
                        <div className="game-container">
                            {playingGames.slice(0, 5).map(game => (
                                <GameCard
                                    key={game.id}
                                    id={game.steam_id}
                                    img={getGameCover(game.title)}
                                    name={game.title}
                                    status={game.status}
                                    playtime={game.playtime}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="backlog-games-container backlog-played-games">
                        <h1 className="backlog-games-container-title">Jogado</h1>
                        <div className="game-container">
                            {playedGames.map(game => (
                                <GameCard
                                    key={game.id}
                                    id={game.steam_id}
                                    img={getGameCover(game.title)}
                                    name={game.title}
                                    status={game.status}
                                    playtime={game.playtime}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="backlog-games-container backlog-not-played-games">
                        <h1 className="backlog-games-container-title">Não jogado</h1>
                        <div className="game-container">
                            {notPlayedGames.map(game => (
                                <GameCard
                                    key={game.id}
                                    id={game.steam_id}
                                    img={getGameCover(game.title)}
                                    name={game.title}
                                    status={game.status}
                                    playtime={game.playtime}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Backlog;