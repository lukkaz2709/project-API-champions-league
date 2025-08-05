import {Request, Response} from "express";
import * as service from "../services/clubs-services";

export const getClubs = async (req: Request, res: Response) => {
    const response = await service.getClubsServices();
    res.status(response.statuCode).json(response.body);
}