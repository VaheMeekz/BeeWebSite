export const CHANGE_MODE = 'CHANGE_MODE';


export const modeAC = (mode) => {
    return {
        type: CHANGE_MODE,
        payload: mode
    }
}