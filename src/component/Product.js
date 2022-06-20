//компонент для отображения информации по конкретному товару
import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import {useParams} from 'react-router'
import {Link} from "react-router-dom"
import Skeleton from 'react-loading-skeleton';

function Product() {
    const {id} = useParams(); // ловим ID c адресной строки
    const [product, setProduct] = useState([]); // массив продуктов
    const [loading, setLoading] = useState(false); // флаг отображения Skeleton
    const dispatch = useDispatch();
    const addProduct = (product) => { // передаем добавлеяемый в корзину продукт в redux 
        dispatch(addCart(product)); 
    }

    //при монтировании компоненты асинхронно подгружаем данные с продуктами
    useEffect(()=>{
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`); //фейковый апи товаров
            setProduct(await response.json());
            setLoading(false); 
        }
        getProduct();

    }, [id])
 
    //до завершения работы загрузки товаров отображаем анимацию skeleton 
    const Loading = () => {
        return (
            <>
            <div className='col-md-6'>
                <Skeleton height={400}/>
            </div>
            <div className='col-md-6' style={{lineHeight:2}}>
                <Skeleton height={50} width={300}/>
                <Skeleton height={75}/>
                <Skeleton height={25} width={150}/>
                <Skeleton height={50}/>
                <Skeleton height={150}/>
                <Skeleton height={50} width={100}/>
                <Skeleton height={50} width={100} style={{marginLeft:6}}/>
            </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
            <div className='col-md-6'>
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
            </div>
            <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>Рейтинг {product.rating && product.rating.rate}
                <i className='fa fa-star'></i></p>
                <h3 className='display-6 fw-bold my-4'>$ {product.price}</h3>
                <p className='lead'> {product.description} </p>
                <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addProduct(product)}>Добавить в корзину</button>
                <Link to="/cart" className='btn btn-dark ms-2 px-3 py-2'>Перейти в корзину</Link>
            </div>
            </>
        )
    }
  return (
    <div>
        <div className="container py-5">
            <div className='row py-4'>
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
  )
}

export default Product

