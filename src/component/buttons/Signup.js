// Компоненты кнопка регистрации в NavBar
import React, { useState } from 'react'
import { observer } from "mobx-react-lite";
import LoginStore from "../../store/LoginStore"

const Signup = observer(() => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState({ color: "", text: "" });

    const submitHandler = (e) => {
        e.preventDefault();
        let _email = JSON.parse(localStorage.getItem("email"));
        if (_email === email) {
            setMessage({ color: "red", text: "пользователь с таким email уже зарегистрирован" });
            return;
        }
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('password', JSON.stringify(password));
        LoginStore.setUserData(email, password);
        LoginStore.setUserAuthorize(true);
        setMessage({ color: "green", text: "" });
    }

    return (
        <>
            {/* Кнопка */}
            {LoginStore.authorize ?

                null

                :
                <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                    <span className="fa fa-user-plus me-1"></span> Зарегистрироваться
                </button>


            }

            {/* Модальное окно */}
            {!LoginStore.authorize ?
                <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Регистрация</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={(e) => { submitHandler(e) }}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                                        <input onChange={(e) => setEmail(e.target.value.trim())} type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword" className="form-label">Пароль</label>
                                        <input onChange={(e) => setPassword(e.target.value.trim())} pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*" title="Минимум 8 символов, одна цифра, одна буква в верхнем регистре и одна в нижнем" 
                                        type="password" className="form-control" id="exampleInputPassword2" autoComplete="on" required />
                                    </div>
                                    <p style={{ color: message.color }}>{message.text}</p>
                                    <button type="submit" className="btn btn-outline-dark w-100 mt-5">Зарегистрироваться</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
                :
                //уведомление о регистрации
                <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel" style={{ color: "green", fontWeight: "bold" }}>Регистрация прошла успешно!</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body"></div></div></div></div>}
        </>
    )
}
)
export default Signup