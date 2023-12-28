// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { CartData } from './CartData';
import Button from 'react-bootstrap/Button';
import {StateLessComponent} from './StateLessComponent';

function App() {
  const data=[
    {
      name:"Apple",
      detail : "Fruit",
      clr : "whitesmoke"
    },
    {
      name:"Carrot",
      detail : "Vegetables",
      clr : "yellow"
    },
    {
      name:"Toshiba",
      detail : "Cars",
      clr : "blue"
    }
  ]
  
  return (
    <div className="App">
      {data.map ((item,idx)=>(
        <SampleCard
        key = {idx}
        name={item.name}
        detail={item.detail}
        clr={item.clr}
        />
      ))}
      <br></br>
       {data1.map ((item,idx)=>(
        <SampleCard1
        key = {idx}
        cardtype={item.cardtype}
        user={item.user}
        storage ={item.storage}
        clr={item.clr}
        />
      ))}
    <br></br>
      <CartData/>
      <StateLessComponent name="component"/>
    </div>
  );
}

export default App;
// resusability of components
//<sampleCard/>

//Functional Components 

function SampleCard(props) {
  const [show,setShow]=useState(false)
  const handleClick=()=>{
    setShow(!show);
  }
  // console.log(show)

  const desStyle = { display: show ? "block" : "none" }

  // const disProperty ={
  //   margin: "5px",
  //   padding: "5px",
  //   borderRadius: "5px",
  //   backgroundColor: show ? "red" : "green" 
  // }
  
  return(
    <div style={{backgroundColor:props.clr}} className='card-content'>
      <p>card Name : {props.name}</p>
      {/* conditional rendering */}
      {/* {show ? <p>Card details : {props.detail}</p> : ""} */}
      {/* conditional styling */}
      <p style={desStyle}>Card details : {props.detail}</p> 
      <button  style={{backgroundColor: show ? "red" : "green"}} onClick={handleClick}>{show ? "Hide" : "Show"}</button>
    </div>
  );
  }
  
  const data1=[
    {
      cardtype:"Free",
      user : "✔ Single User",
      storage : "✔ 5GB Storage",
      clr : "whitesmoke"
    },
    {
      cardtype:"Plus",
      user : "✔ 5 Users",
      storage : "✔ 5GB Storage",
      clr : "whitesmoke"
    },
    {
      cardtype:"Pro",
      user : "✔ Unlimited Users",
      storage : "✖ 5GB Storage",
      clr : "whitesmoke"
    }
  ]

  function SampleCard1(props) {
 
    return(
      <div style={{backgroundColor:props.clr}} className='card-content'>
        <h1>{props.cardtype}</h1>
        <p>{props.user}</p>
        <p> {props.storage}</p>
      </div>
    );
    }


    //===============================================================================

    export const prodData =[
      {
        prodName : "Fancy Product 1",
        price : "40-80"
      },
      {
        prodName : "Fancy Product 2",
        price : "40-80"
      },
      {
        prodName : "Fancy Product 3",
        price : "40-80"
      },
      {
        prodName : "Fancy Product 4",
        price :"40-80"
      },
    ]

