import React from 'react';
import './styles.css';
import playing from '../../assets/icons/playing.svg';
import played from '../../assets/icons/played.svg';
import notPlayed from '../../assets/icons/not-played.svg';
import completed from '../../assets/icons/completed.svg';
import clock from '../../assets/icons/clock.svg';

interface GameCardsProps {
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

const GameCard: React.FC<GameCardsProps> = ({ img, name, status, playtime }) => {
    const currentStatus = statusConfig[status];

    return (
        <div className="game-card">
            <img className="game-img" src={img} alt={name} />
            <div className="game-card-info">
                <h1>{name}</h1>
                <div className="game-footer-info-container">
                    <div className="game-status-container">
                        <img className="game-status" src={currentStatus.icon} alt={currentStatus.label} />
                        <p className={status}>{currentStatus.label}</p>
                    </div>
                    <div className="playtime-container">
                        <img className="playtime-icon" src={clock} alt="relógio" />
                        <p>{Math.round(playtime / 60)}h</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCard;