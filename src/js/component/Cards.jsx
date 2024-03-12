import React from "react";

  const Card = (props) => {
    return (
      
  
        <div className="col-3"> 
          <div className="card" style={{width: "18rem;", height:"100%"}}>
          <img src={props.img} className="img tamano-imagen"  alt=""></img>
            <div className="card-body">
              <h5 className="card-title">{props.titulo}</h5>
              <p className="card-text">{props.texto}</p>
              <a href="#" className="btn btn-primary">{props.boton}</a>
            </div>
          </div>
        </div>
     
     

      
  );
  };
  
export default Card;