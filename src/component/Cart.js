// Компонент страницы корзина
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';

const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }

    const emptyCart = () => {
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Ваша корзина пуста</h3>
                    </div>
                </div>
            </div>
        )
    }
    const cartItems = (product, index) => {
        return(
            
                <div key={index} className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {product.qty} X ${product.price} = ${product.qty * product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={()=>handleDel(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark" onClick={()=> handleAdd(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        )

    }
    const buttons = () => {
        return(
            <>
                <div className="container">
                    <div className="row">
                        <Link to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
                            Перейти к оформлению
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
             {/* если корзина пуста выводим сообщение */}
            {state.length === 0 && emptyCart()}
            
            {/* если корзина не пуста отображаем товары и кнопку */}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && buttons()}
        </div>
    );
}

export default Cart;