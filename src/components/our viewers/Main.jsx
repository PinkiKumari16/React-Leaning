import React, { useState } from 'react'
import OureViewers from './OureViewers'
import dataJson  from './data.json'


export const Main = () => {
    let [index, setIndex] = useState(0);
    console.log(dataJson)
  return (
    <>
        <OureViewers name = {dataJson[index].name} index={index} setIndex={setIndex} professtion={dataJson[index].professtion} content={dataJson[index].content} image={dataJson[index].image} />
    </>
  )
}
