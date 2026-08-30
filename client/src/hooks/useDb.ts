export const useDb = () => {
    const host = import.meta.env.VITE_BACKEND_HOST;

    const fetchGames = async () => {
        try {
            const response = await fetch (`${host}/games`);
            const data = await response.json();

            if (response.ok) {
                return data;
            } else {
                console.error("Erro ao carregar jogos.", data.error);
                return data;
            }

        } catch (error) {
            console.error("Erro ao carregar jogos.", error);
        }
    }

    const fetchCollections = async () => {
        try {
            const response = await fetch (`${host}/collections/with-games`);
            const data = await response.json();

            if (response.ok) {
                return data;
            } else {
                console.error("Erro ao carregar coleções.", data.error);
                return data;
            }

        } catch (error) {
            console.error("Erro ao carregar coleções.", error);
        }
    }

    return {fetchGames, fetchCollections}
}