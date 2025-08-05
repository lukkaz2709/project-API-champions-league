import * as httpResponse from "../utils/http-helper";
import * as repo from "../repositories/clubs-repository"

export const getClubsServices = async () => {
    const data = await repo.findAllClubs();

    const response = httpResponse.ok(data);

    return response;
};