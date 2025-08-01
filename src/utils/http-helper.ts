    interface HttpResponse {
        statuCode: number;
        body:any;
    }

    export const ok = async (data: any): Promise<HttpResponse> => {
        return{
            statuCode: 200,
            body:data,
        };

    };

    export const  noContent = async (): Promise<HttpResponse> =>{
        return{
            statuCode: 204,
            body: null,
        };
    };