import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { getGameCover } from '../../utils/getGameCover';
import { useDb } from '../../hooks/useDb';

export type GameStatus = 'completed' | 'not-played' | 'played' | 'playing';

export interface Game {
    id: string;
    title: string;
    steam_id: string;
    cover_square: string;
    cover_hero: string;
    cover_grid: string;
    developer: string;
    release_date: string;
    favorite: boolean;
    personal_rating: number;
    playtime: number;
    status: GameStatus;
}

export interface Collection {
    id: string;
    title: string;
    games: Game[];
}

interface ColelctionFolderProps {
    collection: Collection;
}

const CollectionFolder: React.FC<ColelctionFolderProps> = ({collection}) => {
    const {  } = useDb();
    const navigation = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [menuPos, setMenuPos] = useState<{ x: number; y: number } | null>(null);
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    
    const cancelClose = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    };

    const scheduleClose = () => {
        cancelClose();
        closeTimeoutRef.current = setTimeout(() => {
            setIsMenuOpen(false);
        }, 150);
    };

    const handleDeleteCollection = (id: string, name: string) => {
        const confirmation = confirm(`Quer mesmo excluir a coleção '${name}'?`)
        if (confirmation) {
            alert('excluindo coleção');
        }
    }

    const handleRenameCollection = (id: string) => {

    }

    return (
        <>            
            <div className="collection-folder-container">
                {menuPos && isMenuOpen && (
                    <div
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleClose}
                        style={{ position: 'fixed', top: (menuPos.y - 10), left: (menuPos.x - 10) }}
                        className="custom-menu"
                    >
                        <ul>
                            <li onClick={() => handleRenameCollection(collection.id)}>Renomear Coleção</li>
                            <li
                                onClick={() => handleDeleteCollection(collection.id, collection.title)}
                                style={{color: '#D43A2D'}}
                            >
                                Excluir Coleção
                            </li>

                        </ul>
                    </div>
                )}
                <div
                    onContextMenu={(e) => {
                        e.preventDefault();
                        setMenuPos({ x: e.clientX, y: e.clientY });
                        setIsMenuOpen(true);
                    }}
                    onClick={() => navigation(`/collection/${collection.id}`)}
                    className="collection-folder"
                >
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
        </>
    )
}

export default CollectionFolder;