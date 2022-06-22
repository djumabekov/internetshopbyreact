//компонент для отображения информации по всем товарам
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Skeleton from "react-loading-skeleton"

function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [componentMounted, setComponentMounted] = useState(true);
    const [selectId, setSelectId] = useState(1);
    

    const sortItems = [{title: "Сортировать...", id: 0}, {title: "По убыванию цены", id: 1}, {title: "По возрастанию цены", id: 2}];
    //при монтировании компоненты асинхронно подгружаем данные с продуктами
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                setComponentMounted(false);
            }
        }
        getProducts();
    }, []);

    //до завершения работы загрузки товаров отображаем анимацию skeleton 
    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    //фильтрует продуты по категориям
    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat);
        setFilter(updateList);
    }

    //ищет продукты по названию
    const searchProduct = (value) => {
        const updateList = filter.filter((x) => x.title.toLowerCase().trim().includes(value.toLowerCase().trim()));
        setFilter(updateList);
    }

    //сортирует продукты по цене
    const sortProduct = (value) => {
        // console.log(filter);
        if(+value === 0) return
        setSelectId(+value);
        let updateList;
        switch(selectId){
            case 1: 
            updateList = filter.sort((x, y) => +x.price - +y.price);
            setFilter(updateList);  
            break;
            case 2: 
            updateList = filter.sort((x, y) => +y.price - +x.price);
            setFilter(updateList);  
            break;
            default: 
            return;
        }
    }
    const ShowProducts = () => {
        return (
            <>

                {/* список доступных категорий */}
                <div className='buttons d-flex justify-content-center mb-3 pb-3'>
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>Показать все</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Мужская одежда</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Женская одежда</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Ювелирные украшения</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Электроника</button>
                </div>

                {/* выводим продукты */}
                {filter.map((product, index) => {
                    return (

                        <div className="col-md-3 mb-4" key={index}>
                            <div className="card h-100 text-center p-4" key={product.id}>
                                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Купить</Link>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </>
        )

    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-border text-center'>Топ продуктов</h1>
                        <hr />
                    </div>
                </div>

                <div className='row justify-content-center'>
                    {loading ? <Loading /> :
                        <>
                            <div className='d-flex justify-content-center mb-3 pb-3'>
                                <input onChange={(e) => setSearchValue(e.target.value)} type="search" className="form-control me-2 ms-1" placeholder="Найти" value={searchValue} />
                                <button className='btn btn-outline-dark me-2' onClick={(e) => searchProduct(searchValue)}>Найти</button>
                            </div>
                            <div className="input-group justify-content-center mb-3 pb-3" style={{ marginTop: "30px", width: "50%" }}>
                                <select onChange={e => sortProduct(e.target.value)} className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" >
                                    {sortItems.map((item, key) => (
                                        <option key={key} value={item.id} label={item.title} />
                                    ))}
                                </select>
                            </div>
                            <ShowProducts />
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
