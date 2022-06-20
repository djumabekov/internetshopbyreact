//компонент Футер
import { Link } from "react-router-dom"
import React from 'react';

export const Footer = () => {
    return (
      <footer>
        <div className='text-center p-3 bg-dark' style={{color: "white", marginTop: "30px"}}>
        {new Date().getFullYear()} Все права защищены  &copy; <Link to='/about' className='text-white'>
        "Е-Магазин"
        </Link>
      </div>
      </footer>
      )
}