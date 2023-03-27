export const SET_THEME = "SET_THEME"

export const setTheme = (isBlack) => {
    return ({
        type: SET_THEME,
        data: isBlack
    })
}