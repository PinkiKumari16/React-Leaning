import React from 'react';
import { useState } from 'react';
import { Iteams } from './Iteams';
export let ToDo = () => {
    let styles = {textAlign:"center", marginTop:'10%'};
    let [text, setText] = useState('');
    let [iteams, setIteams] = useState([]);
    
    let handleSubmit = (e)=>{
        e.preventDefault();
        setIteams([...iteams, text])
        console.log(iteams);
        setText('')
    }
    return(
        <>
            <form style={styles} onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    />
                <button type='submit'>Add</button>
            </form>
            {iteams.map((element)=><Iteams list={element} />
            )}
        
        </>
    )
}