import React from 'react'
import {Link} from 'react-router-dom'
import MenContainer from '../containers/MenContainer'

export default function Home() {
    
    return (
        <div>
            {/* <!-- Header--> */}
            <header className="bg-dark ">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators ">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="active bg-dark" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="active bg-dark" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://santosh214.github.io/imentus-task/assets/carousel/carousel1.jpg" className="d-block w-100 h-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                           <Link to="/men"> <img src="https://santosh214.github.io/imentus-task/assets/carousel/carousel2.jpg" className="d-block w-100 h-100" alt="..." /></Link>
                        </div>
                        <div className="carousel-item">
                                   <Link to="/kids"> <img src="https://santosh214.github.io/imentus-task/assets/carousel/carousel4.jpg" className="d-block w-100 h-100" alt="..." /></Link>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </header>
            {/* <!-- Section--> */}
            <hr />
            <MenContainer />
        </div>
    )
}
