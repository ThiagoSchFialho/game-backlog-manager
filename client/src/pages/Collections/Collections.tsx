import React, { useEffect, useState } from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import CollectionFolder from '../../components/CollectionFolder/CollectionFolder';
import type { ICollection } from '../../mocks/collectionsMock';
import { useDb } from '../../hooks/useDb';

const Collections: React.FC = () => {
    const { fetchCollections } = useDb();
    const [steamApiConnected, setSteamApiConnected] = useState(false);
    const [currentPage] = useState('collections');
    const [collectionsList, setCollectionsList] = useState<ICollection[]>([]);

    useEffect(() => {
        const getCollections = async () => {
            const collections = await fetchCollections();
            if (collections) {
                setCollectionsList(collections);
                setSteamApiConnected(true);
            }
        }
        
        getCollections();
    }, []);

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
                        {collectionsList.map(collection => (
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