import { SET_THEME } from '../action/setTheme';
const initialState = {
    isBlack: true
}

const theme = (state = initialState, action) => {
    switch (action.type) {
        case `${SET_THEME}`:
            console.log("theme color dark",action.data)
            return {
                ...state,
                isBlack: action.data
            }
        default:
            return state
    }
}
export default theme;
