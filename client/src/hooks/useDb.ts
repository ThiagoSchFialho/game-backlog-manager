export const useDb = () => {
    const host = import.meta.env.VITE_BACKEND_HOST;

    const fetchGames = async () => {
        try {
            const response = await fetch (`${host}/games`);
            const data = await response.json();

            if (!response.ok) {
                console.error("Erro ao carregar jogos.", data.error);
                return null;
            }

            return data;

        } catch (error) {
            console.error("Erro ao carregar jogos.", error);
        }
    }

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

    const getGameById = async (id: string) => {
        try {
            const response = await fetch (`${host}/games/${id}`);
            const data = await response.json();

            if (!response.ok) {
                console.error("Erro ao carregar jogos.", data.error);
                return null;
            }

            return data;

        } catch (error) {
            console.error("Erro ao carregar jogos.", error);
        }
    }

    const updateStatus = async (id: string, status: string) => {
        const game = await getGameById(id);
        if (!game) {
            console.error("Jogo não encontrado:", id);
            return null;
        }

        const dataISO = game.rtime_last_played;

        const timestampMs = new Date(dataISO).getTime();
        const timestampSegundos = Math.floor(timestampMs / 1000);
        
        const updatedGame = { ...game, status, rtime_last_played: timestampSegundos };

        try {
            const response = await fetch (`${host}/games/${updatedGame.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedGame)
            });
            const data = await response.json();

            if (!response.ok) {
                console.error("Erro ao atualizar status.", data.error);
                return null;
            }

            return data;
        } catch (error) {
            console.error("Erro ao atualizar status.", error);
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

    const syncSteam = async () => {
        try {
            const response = await fetch (`${host}/steam-api/sync-and-update-games-from-steam`);
            const data = await response.json();

            if (!response.ok) {
                console.error("Erro ao sincronizar jogos.", data.error);
                return null;
            }

            return data;

        } catch (error) {
            console.error("Erro ao sincronizar jogos.", error);
        }
    }

    return {fetchGames, fetchCollections, updateStatus, addToCollection, createCollection, deleteFromCollection, syncSteam}
}