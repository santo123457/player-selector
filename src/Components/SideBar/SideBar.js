import React from 'react';

const SideBar = (props) => {
    const {name,salary,id}=props.player;
   
    return (
        <div >
             <div className="card d-block" style={{width: "18rem",margin:"30px auto"}}>
        <div className="card-body">
            <h4>Id No: {id}</h4>
          <h5 className="card-title">Name : {name}</h5>
          <h6 className="card-text">Salary : {salary}</h6>
          
        </div>
        </div>
        </div>
    );
};

export default SideBar;