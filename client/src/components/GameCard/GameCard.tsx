import React, { useRef, useState } from 'react';
import './styles.css';
import playing from '../../assets/icons/playing.svg';
import played from '../../assets/icons/played.svg';
import notPlayed from '../../assets/icons/not-played.svg';
import completed from '../../assets/icons/completed.svg';
import clock from '../../assets/icons/clock.svg';
import menuArrow from '../../assets/icons/menu-arrow.svg';

interface GameCardsProps {
    id: string;
    img: string;
    name: string;
    status: 'completed' | 'not-played' | 'played' | 'playing';
    playtime: number;
}

const statusConfig = {
    playing: { icon: playing, label: 'Jogando' },
    played: { icon: played, label: 'Jogado' },
    'not-played': { icon: notPlayed, label: 'Não jogado' },
    completed: { icon: completed, label: 'Zerado' },
};

const GameCard: React.FC<GameCardsProps> = ({ id, img, name, status, playtime }) => {
    const currentStatus = statusConfig[status];
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isChangeStatusMenuOpen, setIsChangeStatusMenuOpen] = useState<boolean>(false);
    const [isAddToCollectionMenuOpen, setIsAddToCollectionMenuOpen] = useState<boolean>(false);
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
            setIsChangeStatusMenuOpen(false);
            setIsAddToCollectionMenuOpen(false);
        }, 150);
    };

    const handleAddToFavorites = (name: string) => {
        setIsMenuOpen(false);
        setIsChangeStatusMenuOpen(false);
        setIsAddToCollectionMenuOpen(false);
        console.log(name);
    }    

    const handleStatusChange = (name: string, status: string) => {
        setIsMenuOpen(false);
        setIsChangeStatusMenuOpen(false);
        console.log(`${name} ${status}`);
    }

    const handleAddToCollection = (name: string) => {
        setIsMenuOpen(false);
        setIsAddToCollectionMenuOpen(false);
        console.log(name);
    }

    const handleHideGame = (name: string) => {
        setIsMenuOpen(false);
        setIsChangeStatusMenuOpen(false);
        setIsAddToCollectionMenuOpen(false);
        console.log(name);
    }

    const handleStartGame = (id: string) => {
        window.location.href = `steam://rungameid/${id}`;
    }

    return (
        <div className="game-card">
            {menuPos && isMenuOpen && (
                <div
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                    style={{ position: 'fixed', top: (menuPos.y - 10), left: (menuPos.x - 10) }}
                    className="custom-menu"
                >
                    <ul>
                        <li onMouseOver={() => {
                            setIsChangeStatusMenuOpen(true);
                            setIsAddToCollectionMenuOpen(false);
                        }}>
                            Alterar status
                            <img src={menuArrow} />
                        </li>
                        <li onClick={() => handleAddToFavorites(name)}>Favoritar</li>
                        <li onMouseOver={() => {
                            setIsChangeStatusMenuOpen(false);
                            setIsAddToCollectionMenuOpen(true);
                        }}>
                            Adicionar a coleção
                            <img src={menuArrow} />
                        </li>
                        <li onClick={() => handleHideGame(name)}>Ocultar</li>
                    </ul>
                </div>
            )}
            {menuPos && isChangeStatusMenuOpen && (
                <div
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                    style={{ position: 'fixed', top: (menuPos.y - 5), left: (menuPos.x + 240) }}
                    className="custom-menu"
                >
                    <ul>
                        <li onClick={() => handleStatusChange(name, 'completed')}>Zerado</li>
                        <li onClick={() => handleStatusChange(name, 'playing')}>Jogando</li>
                        <li onClick={() => handleStatusChange(name, 'played')}>Jogado</li>
                        <li onClick={() => handleStatusChange(name, 'not-played')}>Não jogado</li>
                    </ul>
                </div>
            )}
            {menuPos && isAddToCollectionMenuOpen && (
                <div
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                    style={{ position: 'fixed', top: (menuPos.y + 60), left: (menuPos.x + 240) }}
                    className="custom-menu"
                >
                    <ul>
                        <li onClick={() => handleAddToCollection(name)}>Assassin's Creed</li>
                        <li onClick={() => handleAddToCollection(name)}>Mundo Aberto</li>
                        <li onClick={() => handleAddToCollection(name)}>Doom</li>
                        <li onClick={() => handleAddToCollection(name)}>Valve</li>
                    </ul>
                </div>
            )}
            <img
                onClick={() => handleStartGame(id)}
                onContextMenu={(e) => {
                    e.preventDefault();
                    setMenuPos({ x: e.clientX, y: e.clientY });
                    setIsMenuOpen(true);
                }}
                className="game-img"
                src={img}
                alt={name}
            />
            <div className="game-card-info">
                <h1>{name}</h1>
                <div className="game-footer-info-container">
                    <div className="game-status-container">
                        <img className="game-status" src={currentStatus.icon} alt={currentStatus.label} />
                        <p className={status}>{currentStatus.label}</p>
                    </div>
                    <div className="playtime-container">
                        <img className="playtime-icon" src={clock} alt="relógio" />
                        <p className="aditional-text">
                        {playtime < 60
                            ? `${playtime}m`
                            : `${Math.floor(playtime / 60)}h${playtime % 60 > 0 ? ` ${playtime % 60}m` : ''}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCard;