// Компоненты кнопка корзины в NavBar
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
    const state = useSelector((state) => state.handleCart)
    return (
        <>
            <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>
                Корзина ({state.length})
            </Link>
        </>
    )
}

export default CartBtn