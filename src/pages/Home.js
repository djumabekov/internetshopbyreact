// компонент страницы "Главная"
import React from 'react'
import Products from './Products'

function Home() {
    return (
        <div>
            {/* выводим карусель */}
            <div id="carouselExampleDark" className="carousel carousel-dark slide " data-bs-ride="carousel" style={{ margin: "auto"}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2017/03/22/new-ipad-march_1200x500.jpg" className="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.acquiremag.com/.image/t_share/MTY5NTQ0NTEzOTU2NjE5NzM5/collection-pay-shadow-transparent-press-release.jpg" className="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2016/12/01/PS4-PRo_1200x500.jpg" className="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* выводим компонент Товары */}
            <Products />
        </div>
    )
}

export default Home
