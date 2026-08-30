import React, { useState } from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import CollectionFolder from '../../components/CollectionFolder/CollectionFolder';
import collectionsMock from '../../mocks/collectionsMock';

const Collections: React.FC = () => {
    const [steamApiConnected, setSteamApiConnected] = useState(false);
    const [currentPage, setCurrentPage] = useState('collections');

    return (
        <>
            <Header steamApiConnected={steamApiConnected} />
            <div className="main-container">
                <SideMenu currentPage={currentPage} />
                
                <div className="collections-main-content">
                    <div className="page-header">
                        <h1 className="title">Coleções</h1>
                        <div className="create-collection-btn-container">
                            <div className="create-collection-btn">Criar Coleção</div>
                        </div>
                    </div>

                    <div className="collection-folders-container">
                        {collectionsMock.map(collection => (
                            <CollectionFolder
                                collection={collection}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Collections;