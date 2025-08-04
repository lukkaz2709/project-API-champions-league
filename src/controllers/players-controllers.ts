import {Request, Response} from "express"
import * as services from "../services/players-service"
import { StatisticsModel } from "../models/statistics-model";


export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await services.getPlayerService();
    
    res.status(httpResponse.statuCode).json(httpResponse.body)
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await services.getPlayerByIdService(id);
    res.status(httpResponse.statuCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) =>{
    const bodyValue = req.body
    const httpResponse = await services.createPlayerService(bodyValue)
    
    if(httpResponse){
        res.status(httpResponse.statuCode).json(httpResponse.body);
    }
};

export const  deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await services.deletePlayerService(id);
    res.status(httpResponse.statuCode).json(httpResponse.body);
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: StatisticsModel = req.body;
    const httpResponse = await services.updatePlayerService(id, bodyValue);
    res.status(httpResponse.statuCode).json(httpResponse.body);
}

