import React from "react";
import nature1 from './images/nature1.jpg';
import nature2 from './images/nature2.jpg';
import nature3 from './images/nature3.jpg';

export const Carousel = () =>{
    return(
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={nature1} className="d-block w-100 size " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={nature2} className="d-block w-100 size " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={nature3} className="d-block w-100 size " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}