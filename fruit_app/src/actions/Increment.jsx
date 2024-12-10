export const Increment = (itemPrice) => {
    return{
        type: 'ADD',
        payload: itemPrice

    }
}

export const Decrement = (itemPrice) => {
    return{
        type: 'REMOVE',
        payload: itemPrice
    }
}