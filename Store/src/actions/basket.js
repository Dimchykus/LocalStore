export const AddToCard = (items) => (
    {
        type: "ADD_TO_CARD",
        payload: items
    }
)

export const removeFromCart = id => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
});