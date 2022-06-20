//компонент навигационного меню
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

function Navbar() {

  const [activeLinks, setActiveLinks] = useState({ home: true, products: false, about: false, contacts: false });

  const onClickHandler = (e) => {
    if (e.target.id === "logo")
      setActiveLinks({...!activeLinks, home: true});
    if (e.target.id === "home")
    setActiveLinks({...!activeLinks, home: true});
    if (e.target.id === "products")
    setActiveLinks({...!activeLinks, products: true});
    if (e.target.id === "about")
    setActiveLinks({...!activeLinks, about: true});
    if (e.target.id === "contacts")
    setActiveLinks({...!activeLinks, contacts: true});
  }
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
          <div className="container">
            <Link id="logo" onClick={(e) => { onClickHandler(e) }} className="navbar-brand fw-bold fs-4" to="/">
              Е-МАГАЗИН
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link id="home" onClick={(e) => { onClickHandler(e) }} className={activeLinks.home? "nav-link active": "nav-link"} aria-current="page" to="/">Домой</Link>
                </li>
                <li className="nav-item">
                  <Link  id="products"  onClick={(e) => { onClickHandler(e) }} className={activeLinks.products? "nav-link active": "nav-link"}  to="/products">Продукты</Link>
                </li>
                <li className="nav-item">
                  <Link  id="about"  onClick={(e) => { onClickHandler(e) }} className={activeLinks.about? "nav-link active": "nav-link"} to="/about">О нас</Link>
                </li>
                <li className="nav-item">
                  <Link  id="contacts"  onClick={(e) => { onClickHandler(e) }} className={activeLinks.contacts? "nav-link active": "nav-link"} to="/contact">Контакты</Link>
                </li>

              </ul>
              {/* подключаем кнопки авторизации, регистрации и корзины */}
              <Login />
              <Signup />
              <CartBtn />
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
