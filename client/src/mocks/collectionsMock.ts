export type GameStatus = 'completed' | 'not-played' | 'played' | 'playing';

export interface Game {
    id: string;
    title: string;
    steam_id: string;
    cover_square: string;
    cover_hero: string;
    cover_grid: string;
    developer: string;
    release_date: string;
    favorite: boolean;
    personal_rating: number;
    playtime: number;
    status: GameStatus;
}

export interface Collection {
    id: string;
    title: string;
    games: Game[];
}

const collectionsMock: Collection[] = [
    {
        "id": "2",
        "title": "Valve",
        "games": [
            {
                "id": "26",
                "title": "forza horizon 5",
                "steam_id": "1551360",
                "cover_square": "",
                "cover_hero": "",
                "cover_grid": "",
                "developer": "playground games",
                "release_date": "2021-11-09T03:00:00.000Z",
                "personal_rating": 5,
                "playtime": 1680,
                "status": "playing",
                "favorite": true
            },
            {
                "id": "27",
                "title": "assassin's creed III",
                "steam_id": "276810",
                "cover_square": "",
                "cover_hero": "",
                "cover_grid": "",
                "developer": "ubisoft",
                "release_date": "2012-10-31T03:00:00.000Z",
                "personal_rating": 3,
                "playtime": 720,
                "status": "playing",
                "favorite": true
            },
            {
                "id": "28",
                "title": "minecraft",
                "steam_id": "0",
                "cover_square": "",
                "cover_hero": "",
                "cover_grid": "",
                "developer": "mojang studios",
                "release_date": "2011-11-18T03:00:00.000Z",
                "personal_rating": 5,
                "playtime": 5760,
                "status": "playing",
                "favorite": true
            },
            {
                "id": "29",
                "title": "doom the dark ages",
                "steam_id": "2870750",
                "cover_square": "",
                "cover_hero": "",
                "cover_grid": "",
                "developer": "id software",
                "release_date": "2025-05-15T03:00:00.000Z",
                "personal_rating": 4,
                "playtime": 840,
                "status": "playing",
                "favorite": true
            }
        ]
    },
    {
        "id": "3",
        "title": "Doom",
        "games": [
            {
                "id": "29",
                "title": "doom + doom II",
                "steam_id": "2870750",
                "cover_square": "",
                "cover_hero": "",
                "cover_grid": "",
                "developer": "id software",
                "release_date": "2025-05-15T03:00:00.000Z",
                "personal_rating": 4,
                "playtime": 840,
                "status": "playing",
                "favorite": true
            },
            {
                "id": "30",
                "title": "doom 64",
                "steam_id": "2870750",
                "cover_square": "",
                "cover_hero": "",
                "cover_grid": "",
                "developer": "id software",
                "release_date": "2025-05-15T03:00:00.000Z",
                "personal_rating": 4,
                "playtime": 840,
                "status": "playing",
                "favorite": true
            },
            {
                "id": "31",
                "title": "doom eternal",
                "steam_id": "2870750",
                "cover_square": "",
                "cover_hero": "",
                "cover_grid": "",
                "developer": "id software",
                "release_date": "2025-05-15T03:00:00.000Z",
                "personal_rating": 4,
                "playtime": 840,
                "status": "playing",
                "favorite": true
            },
            {
                "id": "32",
                "title": "doom the dark ages",
                "steam_id": "2870750",
                "cover_square": "",
                "cover_hero": "",
                "cover_grid": "",
                "developer": "id software",
                "release_date": "2025-05-15T03:00:00.000Z",
                "personal_rating": 4,
                "playtime": 840,
                "status": "playing",
                "favorite": true
            }
        ]
    }
]

export default collectionsMock;