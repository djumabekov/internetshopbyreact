// компонент страницы "404"
import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <div>
            <div className="container py-5 my-5 d-flex justify-content-center mb-3 pb-3">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-dark fw-bold mb-4">Ой!</h1>
                        <p className="lead mb-4">
                            Страница не найдена (404)
                        </p>
                        <Link to="/" className="btn btn-outline-dark px-3">Вернуться на главную страницу</Link>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="https://pro-chislo.ru/data/moduleImages/Numbers/404/fe159cccbe293ab22b9f404d4f0b23dc.png" alt="About Us" height="200px" width="300px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page404