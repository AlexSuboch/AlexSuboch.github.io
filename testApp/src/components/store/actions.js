export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const CLEAR_ACTIVE_TAB = 'CLEAR_ACTIVE_TAB';
export const SET_ACTIVE_MENU = 'SET_ACTIVE_MENU';
export const CLEAR_ACTIVE_MENU = 'CLEAR_ACTIVE_MENU';
export const TO_OPEN_MENU = 'TO_OPEN_MENU';
export const TO_OPEN_SECOND_MENU = 'TO_OPEN_SECOND_MENU';

export function setActiveTab(payload){
    return{
        type: SET_ACTIVE_TAB,
        payload: payload
    }
}

export function clearActiveTab(payload){
    return{
        type: CLEAR_ACTIVE_TAB,
        payload: payload
    }
}

export function setActiveMenu(payload){
    return{
        type: SET_ACTIVE_MENU,
        payload: payload
    }
}

export function clearActiveMenu(payload){
    return{
        type: CLEAR_ACTIVE_MENU,
        payload: payload
    }
}

export function toOpenMenu(payload){
    return{
        type: TO_OPEN_MENU,
        payload: payload
    }
}

export function toOpenSecondMenu(payload){
    return{
        type: TO_OPEN_SECOND_MENU,
        payload: payload
    }
}