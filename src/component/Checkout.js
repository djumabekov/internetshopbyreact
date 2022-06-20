//Компонент страница оплаты товаров
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import LoginStore from "../store/LoginStore"
import PaypalCheckoutButton from './buttons/PaypalCheckoutButton'

const Checkout = () => {
    const state = useSelector((state) => state.handleCart)
    const [checkout, setCheckout] = useState(false);
    const [sum, setSum] = useState(0);
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState(LoginStore.userData.email);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    let total = 0; //итоговая общая цена
    let descr = ""; // описание товаров
    const itemList = (item, index) => {
        total = total + item.price * item.qty;
        descr = descr + item.title + " x " + item.qty + ", ";
        return (
            <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title} x {item.qty}</h6>
                </div>
                <span className="text-muted">${item.price * item.qty}</span>
            </li>
        );
    }

    //объект с данными для передачи в пропс Paypal
    const product = {
        description: description,
        price: sum,
        email: LoginStore.userData.email,
        name: name,
        phone: phone,
        address: address,
    }

    //кнопка подтверждения
    const submitHandler = (e) => {
        e.preventDefault();
        setSum(total.toFixed(2));
        setDescription(descr);
        setCheckout(true);
    }

    return (
        <>
            <div className="container my-5">
                {/* если заказ еще подтвержден отображаем форму иначе выводим кнопку paypal */}
                {!checkout ?
                    <div className="row g-5">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-dark">Ваша корзина</span>
                                <span className="badge bg-dark rounded-pill">{state.length}</span>
                            </h4>
                            <ul className="list-group mb-3">
                                {state.map(itemList)}

                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Итоговая стоимость (USD)</span>
                                    <strong>${total.toFixed(2)}</strong>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-7 col-lg-8">
                            <h4 className="mb-3">Реквизиты заказа</h4>
                            <form onSubmit={(e) => { submitHandler(e) }} className="needs-validation">
                                <div className="row g-3">
                                    <div className="mb-3">
                                        <label htmlFor="exampleForm" className="form-label">Полное имя</label>
                                        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleForm"
                                            placeholder="Омаров Бауржан" pattern=".{5,25}" title="от 5 до 25 символов" value={name} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="you@example.com" id="exampleFormControlInput1" value={email} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Телефон</label>
                                        <input onChange={(e) => setPhone(e.target.value)} type="tel" pattern="\+\d-\d{3}-\d{3}-\d{4}" className="form-control"
                                            placeholder="+7-234-567-8901" id="exampleFormControlInput3" value={phone} required />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">Адрес</label>
                                        <input onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="address" placeholder="г.Астана, ул.Сыганак, д. 18, кв. 7"
                                           pattern=".{5,40}" title="от 5 до 40 символов" required />
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <button className="w-100 btn btn-dark btn-lg" type="submit">Перейти к оплате</button>
                            </form>
                        </div>
                    </div>
                    : 
                    <div style={{ margin: "20%" }}><PaypalCheckoutButton product={product} /></div>}
            </div>

        </>
    )
}

export default Checkout