const initialState = {
    items: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case  "SET_ITEMS":
            return {
                ...state,
                items: action.payload
            };
        case "ADD":
            return {
                ...state,
                items: state.items.map(value => {
                    if (value.id === action.id) {
                        value.count++;
                    }
                    return (value)
                })
            }
        case "MINUS":
            return {
                ...state,
                items: [...state.items.map(value => {
                    if (value.id === action.id && value.count > 0) {
                        value.count--;
                    }
                    return (value)
                })

                ]
            }
        default:
            return state;
    }
}
export default reducer;
