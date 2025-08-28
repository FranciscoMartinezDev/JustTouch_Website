import Cookies from 'js-cookie';


export function useCookie() {

    const Set = <T>(value: T, key: string, expires: number | Date | undefined) => {
        const stringify = JSON.stringify(value);
        Cookies.set(stringify, key, { expires: expires })
    }

    const Get = <T>(key: string): T => {
        const data = Cookies.get(key);
        return data as T;
    }

    return {
        Set,
        Get
    }
}