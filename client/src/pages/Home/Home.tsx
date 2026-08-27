import React, { useState } from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import GameCard from '../../components/GameCard/GameCard';

import gamepadInfo from '../../assets/icons/gamepad-info.svg';
import checkInfo from '../../assets/icons/check-info.svg';
import playInfo from '../../assets/icons/play-info.svg';
import clockInfo from '../../assets/icons/clock-info.svg';
import sync from '../../assets/icons/sync.svg';

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';

const Home: React.FC = () => {
    const [steamApiConnected, setSteamApiConnected] = useState(false);
    const [selected, setSelected] = useState('home');

    return (
        <>
            <Header steamApiConnected={steamApiConnected} />
            <div className="main-container">
                <SideMenu currentPage={selected} />
                <div className="main-content">

                    <div className="content-header">
                        <div className="content-header-text">
                            <h1>Bem vindo, Thiago!</h1>
                            <p>Aqui está um resumo dos jogos na sua biblioteca</p>
                        </div>
                        <div className="sync-steam-btn-container">
                            <img src={sync} alt="sincronizar" />
                            <div className="sync-steam-btn">Sincronizar Steam</div>
                        </div>
                    </div>

                    <div className="info-cards-container">
                        <div className="info-card background-blue">
                            <div className="info-icon-container blue">
                                <img src={gamepadInfo} alt="joystick" />
                            </div>
                            <div className="info-card-text-container blue-text">
                                <h1 className="info-card-title">127</h1>
                                <p className="info-card-text">Jogos Adiquiridos</p>
                            </div>
                        </div>
                        <div className="info-card background-green">
                            <div className="info-icon-container green">
                                <img src={checkInfo} alt="verificado" />
                            </div>
                            <div className="info-card-text-container green-text">
                                <h1 className="info-card-title">38</h1>
                                <p className="info-card-text">Jogos Zerados</p>
                            </div>
                        </div>
                        <div className="info-card background-purple">
                            <div className="info-icon-container purple">
                                <img src={playInfo} alt="play" />
                            </div>
                            <div className="info-card-text-container purple-text">
                                <h1 className="info-card-title">18</h1>
                                <p className="info-card-text">Jogando Agora</p>
                            </div>
                        </div>
                        <div className="info-card background-yellow">
                            <div className="info-icon-container yellow">
                                <img src={clockInfo} alt="relógio" />
                            </div>
                            <div className="info-card-text-container yellow-text">
                                <h1 className="info-card-title">421h</h1>
                                <p className="info-card-text">Horas Jogadas</p>
                            </div>
                        </div>
                    </div>

                    <div className="playing-now-container">
                        <div className="playing-now-header">
                            <h1>Jogando Agora</h1>
                            <p>Ver todos</p>
                        </div>
                        <div className="game-cards-container">
                            <GameCard
                                img={img1}
                                name="Forza Horizon 5"
                                status="playing"
                                playtime={28}
                            />
                            <GameCard
                                img={img2}
                                name="Assassin's Creed III"
                                status="playing"
                                playtime={12}
                            />
                            <GameCard
                                img={img3}
                                name="Minecraft"
                                status="playing"
                                playtime={96}
                            />
                            <GameCard
                                img={img4}
                                name="DOOM The Dark Ages Defintive Edition"
                                status="playing"
                                playtime={14}
                            />
                        </div>
                    </div>
                    
                    <div className="backlog-overview-container">
                        <h1 className="backlog-overview-title">Backlog</h1>
                        <div className="overview-lists-container">
                            <div className="overview-list">
                                <div className="overview-header">
                                    <h1 className="not-played">Não jogados <span>(10)</span></h1>
                                    <p>Ver todos</p>
                                </div>
                                <div className="overview">
                                   <ul>
                                        <li>
                                            <div className="game-icon"></div>
                                            <div>
                                                <h1 className="game-title">Elden Ring</h1>
                                                <p className="aditional-text">RPG - Action</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="game-icon"></div>
                                            <div>
                                                <h1 className="game-title">Elden Ring</h1>
                                                <p className="aditional-text">RPG - Action</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="game-icon"></div>
                                            <div>
                                                <h1 className="game-title">Elden Ring</h1>
                                                <p className="aditional-text">RPG - Action</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="game-icon"></div>
                                            <div>
                                                <h1 className="game-title">Elden Ring</h1>
                                                <p className="aditional-text">RPG - Action</p>
                                            </div>
                                        </li>
                                   </ul>
                                </div>
                            </div>
                            <div className="overview-list">
                                <div className="overview-header">
                                    <h1 className="playing">Jogados <span>(10)</span></h1>
                                    <p>Ver todos</p>
                                </div>
                                <div className="overview">
                                   <ul>
                                        <li>
                                            <div className="game-icon"></div>
                                            <div>
                                                <h1 className="game-title">Elden Ring</h1>
                                                <p className="aditional-text">RPG - Action</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="game-icon"></div>
                                            <div>
                                                <h1 className="game-title">Elden Ring</h1>
                                                <p className="aditional-text">RPG - Action</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="game-icon"></div>
                                            <div>
                                                <h1 className="game-title">Elden Ring</h1>
                                                <p className="aditional-text">RPG - Action</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="game-icon"></div>
                                            <div>
                                                <h1 className="game-title">Elden Ring</h1>
                                                <p className="aditional-text">RPG - Action</p>
                                            </div>
                                        </li>
                                   </ul>
                                </div>
                            </div>
                            <div className="overview-list">
                                <div className="overview-header">
                                    <h1 className="beated">Zerados <span>(10)</span></h1>
                                    <p>Ver todos</p>
                                </div>
                                <div className="overview">
                                   <ul>
                                        <li>
                                            <div className="game-icon"></div>
                                            <div>
                                                <h1 className="game-title">Elden Ring</h1>
                                                <p className="aditional-text">RPG - Action</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="game-icon"></div>
                                            <div>
                                                <h1 className="game-title">Elden Ring</h1>
                                                <p className="aditional-text">RPG - Action</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="game-icon"></div>
                                            <div>
                                                <h1 className="game-title">Elden Ring</h1>
                                                <p className="aditional-text">RPG - Action</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="game-icon"></div>
                                            <div>
                                                <h1 className="game-title">Elden Ring</h1>
                                                <p className="aditional-text">RPG - Action</p>
                                            </div>
                                        </li>
                                   </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;