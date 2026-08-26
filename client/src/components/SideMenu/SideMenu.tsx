import React, { useEffect, useState } from 'react';
import './styles.css';
import home from '../../assets/icons/home.svg';
import gamepad from '../../assets/icons/gamepad.svg';
import heart from '../../assets/icons/heart.svg';
import check from '../../assets/icons/check.svg';
import list from '../../assets/icons/list.svg';
import folder from '../../assets/icons/folder.svg';
import settings from '../../assets/icons/settings.svg';
import help from '../../assets/icons/help.svg';
import homeSelected from '../../assets/icons/home-selected.svg';
import gamepadSelected from '../../assets/icons/gamepad-selected.svg';
import heartSelected from '../../assets/icons/heart-selected.svg';
import checkSelected from '../../assets/icons/check-selected.svg';
import listSelected from '../../assets/icons/list-selected.svg';
import folderSelected from '../../assets/icons/folder-selected.svg';
import { useNavigate } from 'react-router-dom';

interface SideMenuProps {
    currentPage: string;
}

const SideMenu: React.FC<SideMenuProps> = ({currentPage}) => {
    const navigation = useNavigate();
    const [selected, setSelected] = useState('');

    useEffect(() => {
        setSelected(currentPage);
    }, [])

    return (
        <>
            <div className="side-menu-container">
                <div className="pages-section">
                    <ul className="side-menu-list">
                        <li onClick={() => navigation('/')} className={selected === 'home' ? 'selected' : ''}>
                            <img src={selected == 'home' ? homeSelected : home} alt="casa" />
                            <p>Inicio</p>
                        </li>
                        <li onClick={() => navigation('/allGames')} className={selected === 'allGames' ? 'selected' : ''}>
                            <img src={selected == 'allGames' ? gamepadSelected : gamepad} alt="joystick" />
                            <p>Todos os Jogos</p>
                        </li>
                        <li onClick={() => navigation('/favorites')} className={selected === 'favorites' ? 'selected' : ''}>
                            <img src={selected == 'favorites' ? heartSelected : heart} alt="coração" />
                            <p>Favoritos</p>
                        </li>
                        <li onClick={() => navigation('/beated')} className={selected === 'beated' ? 'selected' : ''}>
                            <img src={selected == 'beated' ? checkSelected : check} alt="verificado" />
                            <p>Zerados</p>
                        </li>
                        <li onClick={() => navigation('/backlog')} className={selected === 'backlog' ? 'selected' : ''}>
                            <img src={selected == 'backlog' ? listSelected : list} alt="lista" />
                            <p>Backlog</p>
                        </li>
                    </ul>
                </div>

                <hr/>

                <div className="collection-section">
                    <h1>Coleções</h1>
                    <ul className="side-menu-list">
                        <li onClick={() => navigation('folder')} className={selected === 'folder' ? 'selected' : ''}>
                            <img src={selected == 'folder' ? folderSelected : folder} alt="pasta" />
                            <p>Coleção</p>
                        </li>
                    </ul>
                </div>

                <hr/>

                <div className="footer-section">
                    <ul className="side-menu-list">
                        <li onClick={() => navigation('settings')} className={selected === 'settings' ? 'selected' : ''}>
                            <img src={settings} alt="configurações" />
                            <p>Configurações</p>
                        </li>
                        <li onClick={() => navigation('help')} className={selected === 'help' ? 'selected' : ''}>
                            <img src={help} alt="ajuda" />
                            <p>Ajuda</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideMenu;