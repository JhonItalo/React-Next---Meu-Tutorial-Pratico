import Cookies from 'js-cookie'

export interface CookieOptions {
    expires?: number | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
  }

export const setCookies = <T>(key: string, value: T, options: CookieOptions  ) => {
    const valueParse = JSON.stringify(value)
    Cookies.set(key, valueParse, { ...options }); 
    return 
};

export const getCookies = (key: string) => {
    const data = Cookies.get(key)
    if(data){
        return JSON.parse(data);
    }
    return null
}
export const removeCookies = (key: string) => {
    Cookies.remove(key);
    return
}