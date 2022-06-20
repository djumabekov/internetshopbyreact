// компонент страницы "О нас"
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5 d-flex justify-content-center mb-3 pb-3">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-dark fw-bold mb-4">О нас</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae earum rem doloremque, nihil delectus ullam error consectetur? Dicta, non exercitationem in consectetur totam dolorum at voluptate laudantium aliquam, officiis perspiciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque. Nam eius rerum distinctio, a illo earum, optio molestias nostrum maxime quibusdam delectus, adipisci impedit? Nam corporis reiciendis minus quod eaque, laborum veritatis voluptatibus id maiores tempore accusantium recusandae perspiciatis, officia cum ad maxime fuga repellendus a magni consequatur. Unde adipisci hic provident est sint corporis, dolorem esse autem soluta molestiae optio quisquam eligendi obcaecati minima?
                        </p>
                        <Link to="/contact" className="btn btn-outline-dark px-3">Контакты</Link>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about.png" alt="About Us" height="400px" width="800px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About