//функция добавления в корзину
export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

//функция удаления с корзины
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}