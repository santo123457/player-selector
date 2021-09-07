import React from 'react';

const Card = (props) => {
    const {name,email,image,salary} = props.data;
    return (
        <div >
             <div className="card d-block" style={{width: "18rem",margin:"30px auto"}}>
        <img src={image} className="card-img-top" alt="...">
          </img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{email}</p>
          <p className="card-text">${salary}</p>
          <a href="#" className="btn btn-primary" onClick={()=>{props.handlePlayerCount(props.data)}}>Add Player</a>
        </div>
        </div>
        </div>
    );
};

export default Card;