import React from "react";
import nature1 from './images/nature1.jpg'
import nature2 from './images/nature2.jpg'
import nature3 from './images/nature3.jpg'
export const Card=()=>{
    return(
        <>
       <div className="row">
        <div className="col-4">
        <div className="card" width={"18rem"}>
  <img src={nature1} className="card-img-top style  " alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
        <div className="col-4">
        <div className="card" width={"18rem"}>
  <img src={nature2} className="card-img-top style" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
        <div className="col-4">
        <div className="card" width={"18rem"}>
  <img src={nature3} className="card-img-top style" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
       </div>
  </>
    )
}

