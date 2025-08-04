import { HttpResponse } from "../models/http-response.model";

    export const ok = async (data: any): Promise<HttpResponse> => {
        return{
            statuCode: 200,
            body:data,
        };
    };

    export const created = async (): Promise<HttpResponse> => {
        return{
            statuCode: 201,
            body: {
                message: "successful"
            }
        };
    };

    export const  noContent = async (): Promise<HttpResponse> => {
        return{
            statuCode: 204,
            body: null,
        };
    };

    export const badRequest = async(): Promise<HttpResponse> => {
        return {
            statuCode: 400,
            body: null
        };
    };