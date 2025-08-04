import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";


const database: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Inter Miami",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Driblling: 95,
            Defending: 38,
            Physical: 65,

        },
    },

     {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Al Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 96,
            Pace: 90,
            Shooting: 98,
            Passing: 91,
            Driblling: 97,
            Defending: 70,
            Physical: 92,

        },
    },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
};

export const insertPlayer = async(player: PlayerModel) => {
    database.push(player);
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex((p) => p.id ===id);

    if(index !== -1){
        database.splice(index, 1)
    }
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const playerIndex = database.findIndex( player => player.id === id)

    if(playerIndex !== -1){
        database[playerIndex].statistics = statistics;
    }
    return database[playerIndex];
}
