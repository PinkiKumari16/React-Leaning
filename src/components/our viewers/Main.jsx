import React, { useState } from 'react'
import OureViewers from './OureViewers'
// import { data } from './data.json'


export const Main = () => {
    let [index, setIndex] = useState(0);
    const data = [
        {
            "image" : "./pinki.jpeg" ,
            "name" : "Pinki",
            "professtion" : "FRONT END DEVELOPER",
            "content" : "I'am baby meggings health goth +1, Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humlebrag pickled coloring book salvia hoodle, cold-pressed four doliar toast everyday carry."
        },
        {
            "image" : "./rinki.jpeg" ,
            "name" : "Rinki",
            "professtion" : "FULL STACK DEVELOPER",
            "content" : "I'am baby meggings health goth +1, Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humlebrag pickled coloring book salvia hoodle, cold-pressed four doliar toast everyday carry."
        },
        {
            "image" : "./family.jpeg" ,
            "name" : "Kiran",
            "professtion" : "MEARN DEVELOPER",
            "content" : "I'am baby meggings health goth +1, Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humlebrag pickled coloring book salvia hoodle, cold-pressed four doliar toast everyday carry."
        }
    ] 
  return (
    <>
        <OureViewers name = {data[index].name} index={index} setIndex={setIndex} professtion={data[index].professtion} content={data[index].content} image={data[index].image} />
    </>
  )
}
