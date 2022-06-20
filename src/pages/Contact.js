// компонент страницы "Конакты"
import React, { useState } from 'react'
import { observer } from "mobx-react-lite";
import LoginStore from "../store/LoginStore"
//подключаем emailjs для отправкии сообщений 
import emailjs from '@emailjs/browser';

const Contact = observer(() => {

    const [theme, setTheme] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState(LoginStore.userData.email);
    const [text, setText] = useState("");
    const [phone, setPhone] = useState("");

    const [message, setMessage] = useState({ color: "", text: "" });

    const submitHandler = (e) => {
        e.preventDefault();

        let templateParams = {
            theme: theme,
            receiver_name: name,
            text: text,
            phone: phone,
            receiver_email: email,
            to_admin_email: "jandil@mail.ru",
        };
        emailjs.init("Hgxyc_rTRigA4CI4F");
        emailjs.send('service_45kzbvl', 'template_yjtg9ef', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                setMessage({ color: "green", text: "сообщение успешно отправлено!" });
                setText("");
                setName("");
                setPhone("");
                setTheme("");
            }, function (error) {
                setMessage({ color: "red", text: "api error" });

                console.log('FAILED...', error);
            });

    }

    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>У Вас возникли вопросы?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/contact.png" alt="Contact Us" height="400px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={(e) => { submitHandler(e) }}>
                            <div className="mb-3">
                                <label htmlFor="exampleForm" className="form-label">Тема</label>
                                <input onChange={(e) => setTheme(e.target.value)} type="text" className="form-control" id="exampleForm" 
                                placeholder="Тема" pattern=".{5,15}" title="от 5 до 15 символов" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleForm1" className="form-label">Полное имя</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleForm1" 
                                placeholder="Омаров Бауржан" pattern=".{5,15}" title="от 5 до 15 символов" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" 
                                placeholder="you@example.com" id="exampleFormControlInput1" value={email} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput3" className="form-label">Телефон</label>
                                <input onChange={(e) => setPhone(e.target.value)} type="tel" pattern="\+\d-\d{3}-\d{3}-\d{4}" className="form-control" 
                                placeholder="+7-234-567-8901" id="exampleFormControlInput3" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Текст сообщения</label>
                                <textarea onChange={(e) => setText(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="5" required/>
                            </div>
                            <p style={{ color: message.color }}>{message.text}</p>
                            <button type="submit" className="btn btn-outline-dark">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
)
export default Contact