export const Buy = () => (
    {
        type:"BUY_ITEMS"
    }
)
export const setItems = (items) => (
    {
        type: "SET_ITEMS",
        payload: items
    }
)
export const Add = (id) => (
    {
        type:"ADD",
        id
    }
)
export const Minus = (id) => (
    {
        type:"MINUS",
        id
    }
)