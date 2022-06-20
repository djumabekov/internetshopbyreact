// Компоненты кнопка авторизации в NavBar
import React, { useState } from 'react'
import { observer } from "mobx-react-lite";
import LoginStore from "../../store/LoginStore"

const Login = observer(() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState({ color: "", text: "" });

    const submitHandler = (e) => {
        e.preventDefault();
        let _email = JSON.parse(localStorage.getItem("email"));
        let _password = JSON.parse(localStorage.getItem("password"));
        setMessage({ color: "", text: "" });
        if (email === _email && password === _password) {
            LoginStore.setUserData(email, password);
            LoginStore.setUserAuthorize(true);        }
        else {
            setMessage({ color: "red", text: "email or password incorrect" });
        }
    }

    const clickHandler = (e) => {
        e.preventDefault();
        LoginStore.setUserData("", "");
        LoginStore.setUserAuthorize(false);
    }

    return (
        <>
            {/* Кнопка */}
            {LoginStore.authorize ?

                <button onClick={(e) => { clickHandler(e) }} type="button" className="btn btn-outline-dark ms-auto">
                    <span className="fa fa-sign-out me-1"></span>Выйти 
                </button>

                :

                <button type="button" className="btn btn-outline-dark ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
                    <span className="fa fa-sign-in me-1"></span>Авторизоваться 
                </button>
            }

            {/* Модальное окно */}
            {!LoginStore.authorize ?
                <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Авторизация</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <form onSubmit={(e) => { submitHandler(e) }}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail" className="form-label">Email </label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            onChange={(e) => setEmail(e.target.value.trim())} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword" className="form-label" >Пароль</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                            onChange={(e) => setPassword(e.target.value.trim())} autoComplete="on" required/>
                                    </div>
                                    <p style={{ color: message.color }}>{message.text}</p>

                                    <button type="submit" className="btn btn-outline-dark w-100 mt-5">Войти</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
                
                : 
                // Уведомление об авторизации
                <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel" style={{ color: "green", fontWeight: "bold" }} >Вы успешно авторизованы!</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body"></div></div></div></div>

            }
        </>
    )
})

export default Login