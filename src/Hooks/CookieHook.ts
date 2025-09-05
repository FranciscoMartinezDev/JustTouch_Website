import Cookies from 'js-cookie';


export function useCookie() {

    const Set = <T>(value: T, key: string, expires: number | Date | undefined) => {
        const stringify = JSON.stringify(value);
        Cookies.set(key, stringify,{ expires: expires })
    }

    const Get = <T>(key: string): T => {
        const data = Cookies.get(key);
        var result = JSON.parse(data!);
        return result as T;
    }

    const Remove = (key: string) => {
        Cookies.remove(key);
    }

    return {
        Set,
        Get,
        Remove
    }
}