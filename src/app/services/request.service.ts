import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AxiosRequestService {
    async request(
        methodUrl: string,
        requestMethod: string,
        body: {} = {},
        headers: {} = {},
        responseType: AxiosRequestConfig['responseType'] = "json"
    ): Promise<any> {
        try {
            const config: AxiosRequestConfig = {
                method: requestMethod as AxiosRequestConfig['method'],
                url: methodUrl,
                headers: headers,
                data: body,
                responseType: responseType,
            };
            
            console.log(`Request: ${requestMethod} ${methodUrl}`, { body, headers });
            
            const axiosRes: AxiosResponse = await axios(config);
            return axiosRes.data;
        } catch (error: any) {
            console.error("Error during the request", {
                message: error.message,
                code: error.response?.status,
                details: error.response?.data,
            });
            throw new Error(`Request failed with status ${error.response?.status || "unknown"}`);
        }
    }
}
