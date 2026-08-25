import { useEffect, useState } from 'react';
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

interface SideMenuProps {
    currentPage: string;
}

const SideMenu = ({currentPage}: SideMenuProps) => {
    const [selected, setSelected] = useState('');

    useEffect(() => {
        setSelected(currentPage);
    }, [])

    return (
        <>
            <div className="side-menu-container">
                <div className="pages-section">
                    <ul className="side-menu-list">
                        <li onClick={() => setSelected('home')} className={selected === 'home' ? 'selected' : ''}>
                            <img src={selected == 'home' ? homeSelected : home} alt="casa" />
                            <p>Inicio</p>
                        </li>
                        <li onClick={() => setSelected('gamepad')} className={selected === 'gamepad' ? 'selected' : ''}>
                            <img src={selected == 'gamepad' ? gamepadSelected : gamepad} alt="joystick" />
                            <p>Todos os Jogos</p>
                        </li>
                        <li onClick={() => setSelected('heart')} className={selected === 'heart' ? 'selected' : ''}>
                            <img src={selected == 'heart' ? heartSelected : heart} alt="coração" />
                            <p>Favoritos</p>
                        </li>
                        <li onClick={() => setSelected('check')} className={selected === 'check' ? 'selected' : ''}>
                            <img src={selected == 'check' ? checkSelected : check} alt="verificado" />
                            <p>Zerados</p>
                        </li>
                        <li onClick={() => setSelected('list')} className={selected === 'list' ? 'selected' : ''}>
                            <img src={selected == 'list' ? listSelected : list} alt="lista" />
                            <p>Backlog</p>
                        </li>
                    </ul>
                </div>

                <hr/>

                <div className="collection-section">
                    <h1>Coleções</h1>
                    <ul className="side-menu-list">
                        <li onClick={() => setSelected('folder')} className={selected === 'folder' ? 'selected' : ''}>
                            <img src={selected == 'folder' ? folderSelected : folder} alt="pasta" />
                            <p>Coleção</p>
                        </li>
                    </ul>
                </div>

                <hr/>

                <div className="footer-section">
                    <ul className="side-menu-list">
                        <li onClick={() => setSelected('settings')} className={selected === 'settings' ? 'selected' : ''}>
                            <img src={settings} alt="configurações" />
                            <p>Configurações</p>
                        </li>
                        <li onClick={() => setSelected('help')} className={selected === 'help' ? 'selected' : ''}>
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