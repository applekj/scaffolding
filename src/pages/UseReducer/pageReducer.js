const initState = {
    username: '',
    password: '',
    btnLoading: false,
    msg: '',
    btnDisabled: false
}

const loginReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                btnLoading: true,
                msg: '',
            }
        case 'success':
            return {
                ...state,
                btnLoading: false,
                msg: action.payload.msg,
                btnDisabled: true
            }
        case 'error':
            return {
                ...state,
                msg: action.payload.msg,
                username: '',
                password: '',
                btnLoading: false,
                btnDisabled: false
            }
        default:
            return state
    }
}

export { initState,loginReducer}