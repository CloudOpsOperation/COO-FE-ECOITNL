import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const request = async (
    methodUrl: string,
    requestMethod: string,
    body: {},
    headers?: {},
    responseType?: string
): Promise<any> => {
    let response: any;
    try {
        let config = {
            method: requestMethod,
            url: methodUrl,
            headers: headers,
            data: body,
            responseType: responseType as AxiosRequestConfig['responseType'] || "json",
        };
        console.log("Request Method: " + requestMethod + " " + methodUrl + " Body: " + JSON.stringify(body));
        const axiosRes: AxiosResponse = await axios(config);
        response = axiosRes.data;
    } catch (error ) {
        console.error("There was an error. Please check the logs" );
        throw new Error('Status Code Error' );
    }
    return response;
};
