export const useCollection = () => {
    const host = import.meta.env.VITE_BACKEND_HOST;

    const fetchCollections = async () => {
        try {
            const response = await fetch (`${host}/collections/with-games`);
            const data = await response.json();

            if (!response.ok) {
                console.error("Erro ao carregar coleções.", data.error);
                return null;
            }

            return data;

        } catch (error) {
            console.error("Erro ao carregar coleções.", error);
        }
    }

    const deleteFromCollection = async (gameId: number, collectionId: number) => {
        try {
            const checkCollection = await fetch (`${host}/collection-games/game/${gameId}`);
            const collectionData = await checkCollection.json();
            
            if (Number(collectionData.collection_id) !== collectionId) {
                return {error: "Esse jogo não está nessa coleção."};
            }

            const response = await fetch (`${host}/collection-games/relation`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "collection_id": collectionId, "game_id": gameId })
            });
            const data = await response.json();

            if (!response.ok) {
                console.error("Erro ao excluir jogo da coleção.", data.error);
                return null;
            }

            return data;
        } catch (error) {
            console.error("Erro ao excluir jogo a coleção.", error);
        }
    }

    const addToCollection = async (gameId: number, collectionId: number) => {
        try {
            const checkCollection = await fetch (`${host}/collection-games/game/${gameId}`);
            const collectionData = await checkCollection.json();
            
            if (Number(collectionData.collection_id) === collectionId) {
                return {error: "Esse jogo já está nessa coleção."};
            }

            const response = await fetch (`${host}/collection-games`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "collection_id": collectionId, "game_id": gameId })
            });
            const data = await response.json();

            if (!response.ok) {
                console.error("Erro ao adicionar jogo a coleção.", data.error);
                return null;
            }

            return data;
        } catch (error) {
            console.error("Erro ao adicionar jogo a coleção.", error);
        }
    }

    const createCollection = async (title: string) => {
        try {
            const response = await fetch(`${host}/collections`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: title })
            });
            const data = await response.json();

            if (!response.ok) {
                console.error("Erro ao criar coleção.", data.error);
                return null;
            }

            return data;
        } catch (error) {
            console.error("Erro ao criar coleção.", error);
        }
    }

    return { fetchCollections, addToCollection, createCollection, deleteFromCollection };
}