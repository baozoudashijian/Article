export const SET_TOKEN = 'SET_TOKEN';
export const SET_INFO = 'SET_INFO';

/*
* 修改token值
* */
export function setToken(data: any, getState: any) {
    return {
        type: SET_TOKEN,
        data,
    };
}

export function setInfo(data: any, getState: any) {
    return {
        type: SET_INFO,
        data,
    };
}