export interface Game {
    date: Date,
    dist1: number,
    dist2: number,
    dist3: number,
    score: number
}

const saveGame = (game: Game) => {
    const games: Game[] = JSON.parse(localStorage.getItem("game_history") ?? "[]");
    games.push(game);
    localStorage.setItem("game_history", JSON.stringify(games));
}

const getGames = (): Game[] => {
    const games: Game[] = JSON.parse(localStorage.getItem("game_history") ?? "[]");
    return games
}

const clearHistory = () => {
    localStorage.removeItem("game_history");
}

export {
    saveGame,
    getGames,
    clearHistory,
}