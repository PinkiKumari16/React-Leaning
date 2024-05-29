import './Body.css';
import React, { useEffect } from 'react'
import {useState} from 'react'
 
export const Body = () => {
  let [backgroundcolor, setBackgroundColor] = useState('#ffff')
  const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

  let randomInd = ()=>{
    return Math.floor(Math.random()*colors.length);
  }

  useEffect(()=>{
    document.body.style.backgroundColor = backgroundcolor;
  })

  let coloreGenetate = () =>{
    let color = '#';
    for(let i =0;i<6; i++){
      color+=colors[randomInd()];
    }
    return color;

  }

  let getRandomColor = ()=>{
    setBackgroundColor(coloreGenetate());
  }

  return (
    <>
      <main>
        <div className="dashboard">
          <div className="background">
            <h1>Background: <span>{backgroundcolor}</span></h1>
          </div>
          <button className='btn' onClick={getRandomColor}>Change Color</button>
        </div>
      </main>
    </>
)}

export default Body
