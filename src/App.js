import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import FakeData from './Components/FakeData/FakeData';
import SideBar from './Components/SideBar/SideBar';



function App() {
  
  const [player,setPlayer]=useState([]);

  const handlePlayerCount =(newPlayer )=>{
    const addPlayer =[...player,newPlayer]
    setPlayer(addPlayer)
  };
  
  useEffect(() => {
    document.title = "Player-Selector"
 }, []);
 const totalSalary = player.reduce((total,playerSalary)=> total+ parseFloat(playerSalary.salary),0)
  return (
    <div className="row">
    <div className="col-md-9">
    <div className="d-flex m-auto justify-content-center">
    <h2 > 
       Total Players : {FakeData.length}
     </h2>
     <h4 className="mx-5">player added:{player.length}</h4>
    </div>
     {

       FakeData.map(data => <Card data={data} handlePlayerCount={handlePlayerCount} key={data.id}></Card>
      
        )
      } 

    </div>
    <div className="col-md-3">
    <h3>Player List</h3>
    <h4> Total Salary :{totalSalary} </h4>
     
       {
         player.map (player => <SideBar player={player}></SideBar>)
       }
     
    </div>
    </div>
  );
}

export default App;
