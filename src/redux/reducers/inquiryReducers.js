const init = {
    list: [],
}

const inquiryList = (state = init, action) => {
    switch (action.type) {
        case 'INQUIRYLIST_FULFILLED': {
            const data = action.payload.data.data
            return {
                ...state,
                list: data
            }
        }
        default:
            return state
    }
}

export default inquiryList