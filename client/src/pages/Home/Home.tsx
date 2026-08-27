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

const gamesMock = [
  {
    "id": "1",
    "title": "half-life 2",
    "steam_id": "220",
    "cover_square": "https://cdn2.steamgriddb.com/grid/6701cf102bd595cf94d4d16d0069b248.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/75be9348dd965cf45ff296efb2db4a1c.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/c0717208d0df3459c5d1901dd1a733ec.png",
    "developer": "valve",
    "release_date": "2004-11-16T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 840,
    "status": "completed"
  },
  {
    "id": "2",
    "title": "portal",
    "steam_id": "400",
    "cover_square": "https://cdn2.steamgriddb.com/grid/55872e105ea14e442b56df9467ac0537.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/253167a76698b272b9287063e0628adb.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/7f7f1eef5e11c98c24c8d23278851ee5.png",
    "developer": "valve",
    "release_date": "2007-10-10T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 231,
    "status": "completed"
  },
  {
    "id": "3",
    "title": "portal 2",
    "steam_id": "620",
    "cover_square": "https://cdn2.steamgriddb.com/grid/a3e5c9a174dfca55b341f22e720cb587.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/49e8a0ca25e59b21a8a3a780fa2a9fa5.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/848cf647eeabdb86bc1dbf3d9cecfd88.png",
    "developer": "valve",
    "release_date": "2011-04-18T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 510,
    "status": "completed"
  },
  {
    "id": "4",
    "title": "hollow knight",
    "steam_id": "367520",
    "cover_square": "https://cdn2.steamgriddb.com/grid/1cb0b40e704172f3d9d3752e3e5bc8f5.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/bc017366b9beab2c070c73295b9d37d1.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/e6a57c50a97c48ef72bf29a6e1cb8d99.png",
    "developer": "team cherry",
    "release_date": "2017-02-24T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 0,
    "status": "not-played"
  },
  {
    "id": "5",
    "title": "the witcher 3: wild hunt",
    "steam_id": "292030",
    "cover_square": "https://cdn2.steamgriddb.com/grid/a3014a60f64eeef2c3fcfc141d6b0485.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/2ebaa5b1112bcf81001a1d9eb6957388.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/832f91361cfa7509d3b246a480415a78.png",
    "developer": "cd projekt red",
    "release_date": "2015-05-18T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 7400,
    "status": "completed"
  },
  {
    "id": "6",
    "title": "cyberpunk 2077",
    "steam_id": "1091500",
    "cover_square": "https://cdn2.steamgriddb.com/grid/086c2e3612d14bcfae19b8df7908b173.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/6360c7e2d93e5069b2d8616198f1a1d9.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/5f1bca7f91a504ef5ca81541c8f13b1d.png",
    "developer": "cd projekt red",
    "release_date": "2020-12-10T03:00:00.000Z",
    "personal_rating": 4,
    "playtime": 4120,
    "status": "played"
  },
  {
    "id": "7",
    "title": "celeste",
    "steam_id": "504230",
    "cover_square": "https://cdn2.steamgriddb.com/grid/9dfcb35767b077a288647dc6efdb67ff.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/758c0c80b54e3d5bb008a28fb68a7350.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/67ed3a11bd459aa8b90b8f2b3e55bd9c.png",
    "developer": "maddy makes games",
    "release_date": "2018-01-25T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 0,
    "status": "not-played"
  },
  {
    "id": "8",
    "title": "elden ring",
    "steam_id": "1245620",
    "cover_square": "https://cdn2.steamgriddb.com/grid/d69e4f24c3e851a7b8e1a17935cf1be7.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/3f009d73dcb36bc00115e5a2db3d1c4a.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/78ef06546ee57a840e6912b5b3769c27.png",
    "developer": "fromsoftware",
    "release_date": "2022-02-25T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 6800,
    "status": "played"
  },
  {
    "id": "9",
    "title": "stardew valley",
    "steam_id": "413150",
    "cover_square": "https://cdn2.steamgriddb.com/grid/3f595b119bd4df4a7eb8e30bca2d8a43.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/ef036b0c2a5dcda0e2aa59bb29c0b115.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/8adcfc717fb0451e5cfb3837faebcdd7.png",
    "developer": "concernedape",
    "release_date": "2016-02-26T03:00:00.000Z",
    "personal_rating": 4,
    "playtime": 0,
    "status": "not-played"
  },
  {
    "id": "10",
    "title": "hades",
    "steam_id": "1145360",
    "cover_square": "https://cdn2.steamgriddb.com/grid/04a3e8bc86134bdfbc6faefecad3b4cb.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/4b5bbf8935c17d7b3e0c0d1bb39bf993.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/833cdcfbdfbb7c3bbfbaaa4bd9d3b762.png",
    "developer": "supergiant games",
    "release_date": "2020-09-17T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 2890,
    "status": "completed"
  },
  {
    "id": "11",
    "title": "god of war",
    "steam_id": "1593500",
    "cover_square": "https://cdn2.steamgriddb.com/grid/9c3a2f4f6c3d4e5f8a9b0c1d2e3f4a5b.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e.png",
    "developer": "santa monica studio",
    "release_date": "2022-01-14T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 3600,
    "status": "completed"
  },
  {
    "id": "12",
    "title": "resident evil 4",
    "steam_id": "2050650",
    "cover_square": "https://cdn2.steamgriddb.com/grid/3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b.png",
    "developer": "capcom",
    "release_date": "2023-03-24T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 1450,
    "status": "completed"
  },
  {
    "id": "13",
    "title": "outer wilds",
    "steam_id": "753640",
    "cover_square": "https://cdn2.steamgriddb.com/grid/6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e.png",
    "developer": "mobius digital",
    "release_date": "2019-05-28T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 980,
    "status": "completed"
  },
  {
    "id": "14",
    "title": "disco elysium",
    "steam_id": "632470",
    "cover_square": "https://cdn2.steamgriddb.com/grid/9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b.png",
    "developer": "za/um",
    "release_date": "2019-10-15T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 1620,
    "status": "completed"
  },
  {
    "id": "15",
    "title": "hi-fi rush",
    "steam_id": "1817070",
    "cover_square": "https://cdn2.steamgriddb.com/grid/2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e.png",
    "developer": "tango gameworks",
    "release_date": "2023-01-25T03:00:00.000Z",
    "personal_rating": 4,
    "playtime": 720,
    "status": "completed"
  },
  {
    "id": "16",
    "title": "baldur's gate 3",
    "steam_id": "1086940",
    "cover_square": "https://cdn2.steamgriddb.com/grid/5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b.png",
    "developer": "larian studios",
    "release_date": "2023-08-03T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 5200,
    "status": "played"
  },
  {
    "id": "17",
    "title": "red dead redemption 2",
    "steam_id": "1174180",
    "cover_square": "https://cdn2.steamgriddb.com/grid/8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e.png",
    "developer": "rockstar games",
    "release_date": "2019-12-05T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 3100,
    "status": "played"
  },
  {
    "id": "18",
    "title": "monster hunter world",
    "steam_id": "582010",
    "cover_square": "https://cdn2.steamgriddb.com/grid/1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b.png",
    "developer": "capcom",
    "release_date": "2018-08-09T03:00:00.000Z",
    "personal_rating": 4,
    "playtime": 8900,
    "status": "playing"
  },
  {
    "id": "19",
    "title": "persona 5 royal",
    "steam_id": "1687950",
    "cover_square": "https://cdn2.steamgriddb.com/grid/4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e.png",
    "developer": "atlus",
    "release_date": "2022-10-21T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 2400,
    "status": "playing"
  },
  {
    "id": "20",
    "title": "factorio",
    "steam_id": "427520",
    "cover_square": "https://cdn2.steamgriddb.com/grid/7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b.png",
    "developer": "wube software",
    "release_date": "2020-08-14T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 6100,
    "status": "playing"
  },
  {
    "id": "21",
    "title": "control",
    "steam_id": "870780",
    "cover_square": "https://cdn2.steamgriddb.com/grid/0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e.png",
    "developer": "remedy entertainment",
    "release_date": "2019-08-27T03:00:00.000Z",
    "personal_rating": 4,
    "playtime": 0,
    "status": "not-played"
  },
  {
    "id": "22",
    "title": "death stranding",
    "steam_id": "1190460",
    "cover_square": "https://cdn2.steamgriddb.com/grid/3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b.png",
    "developer": "kojima productions",
    "release_date": "2020-07-14T03:00:00.000Z",
    "personal_rating": 4,
    "playtime": 0,
    "status": "not-played"
  },
  {
    "id": "23",
    "title": "sekiro: shadows die twice",
    "steam_id": "814380",
    "cover_square": "https://cdn2.steamgriddb.com/grid/6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e.png",
    "developer": "fromsoftware",
    "release_date": "2019-03-22T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 0,
    "status": "not-played"
  },
  {
    "id": "24",
    "title": "hitman world of assassination",
    "steam_id": "1659040",
    "cover_square": "https://cdn2.steamgriddb.com/grid/9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b.png",
    "developer": "io interactive",
    "release_date": "2016-03-11T03:00:00.000Z",
    "personal_rating": 4,
    "playtime": 0,
    "status": "not-played"
  },
  {
    "id": "25",
    "title": "return of the obra dinn",
    "steam_id": "653530",
    "cover_square": "https://cdn2.steamgriddb.com/grid/2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c.png",
    "cover_hero": "https://cdn2.steamgriddb.com/hero/3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d.png",
    "cover_grid": "https://cdn2.steamgriddb.com/grid/4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e.png",
    "developer": "lucas pope",
    "release_date": "2018-10-18T03:00:00.000Z",
    "personal_rating": 5,
    "playtime": 0,
    "status": "not-played"
  }
]

const notPlayedGames = gamesMock.filter(game => game.status === 'not-played');
const playedGames = gamesMock.filter(game => game.status === 'played');
const completedGames = gamesMock.filter(game => game.status === 'completed');

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
                                    <h1 className="not-played">Não jogados <span>({notPlayedGames.length})</span></h1>
                                    <p>Ver todos</p>
                                </div>
                                <div className="overview">
                                    <ul>
                                        {notPlayedGames.slice(0, 4).map(game => (
                                            <li key={game.id}>
                                                <div className="game-icon"></div>
                                                <div>
                                                    <h1 className="game-title">{game.title}</h1>
                                                    <p className="aditional-text">{game.developer}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="overview-list">
                                <div className="overview-header">
                                    <h1 className="playing">Jogados <span>({playedGames.length})</span></h1>
                                    <p>Ver todos</p>
                                </div>
                                <div className="overview">
                                    <ul>
                                        {playedGames.slice(0, 4).map(game => (
                                            <li key={game.id}>
                                                <div className="game-icon"></div>
                                                <div>
                                                    <h1 className="game-title">{game.title}</h1>
                                                    <p className="aditional-text">{Math.round(game.playtime / 60)}h</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="overview-list">
                                <div className="overview-header">
                                    <h1 className="completed">Zerados <span>({completedGames.length})</span></h1>
                                    <p>Ver todos</p>
                                </div>
                                <div className="overview">
                                    <ul>
                                        {completedGames.slice(0, 4).map(game => (
                                            <li key={game.id}>
                                                <div className="game-icon"></div>
                                                <div>
                                                    <h1 className="game-title">{game.title}</h1>
                                                    <p className="aditional-text">{Math.round(game.playtime / 60)}h</p>
                                                </div>
                                            </li>
                                        ))}
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