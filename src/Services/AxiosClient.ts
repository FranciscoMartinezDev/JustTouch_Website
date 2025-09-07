import { LocalToast } from "@/components/local/Toast";
import { Storage } from "@/Store/Storage";
import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
import Cookie from 'js-cookie';
const store = Storage.getInstance();
const toast = LocalToast.getInstance();

export class AxiosClient {
    private instance: AxiosInstance;
    private baseUrl: string = import.meta.env.VITE_SERVER_SECURE_BASE_URL;
    private static classInstance: AxiosClient;

    constructor() {
        this.instance = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // interceptor de request
        this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            const cookie = Cookie.get('JT_Token');
            if (cookie) {
                const token = cookie?.replace(/^"|"$/g, "") ?? "";
                config.headers.Authorization = `Bearer ${token}`;
                config.withCredentials = true;
            }
            return config;
        }, (error: AxiosError) => {
            Cookie.remove('JT_Token');
            store.Dispose();
            store.Set('SessionExpired', error.message);
            return Promise.reject(error);
        })

        // interceptor de response
        this.instance.interceptors.response.use((response: AxiosResponse) => response,
            (error: AxiosError) => {
                if (error.response) {
                    if (error.response.status === 401) {
                        Cookie.remove('JT_Token');
                        store.Dispose();
                    }
                } else if (error.request) {
                    toast.Error('Error: ' + error.message);
                } else {
                    toast.Error(error.message);
                }
                return Promise.reject(error);
            })
    }

    public static getInstance(): AxiosClient {
        if (!AxiosClient.classInstance) {
            AxiosClient.classInstance = new AxiosClient();
        }
        return AxiosClient.classInstance;
    }

    public async Get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get<T>(url, config).then(x => x.data);
    }

    public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.post<T>(url, data, config).then(res => res.data);
    }
}
