import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';


export let Form = ()=>{
    let styles = {textAlign:"center", color:'green', margin: '5%',display:'flex', gap:'2em'};
    let [inpuValue, setInputValue] = useState({firstName: '', lastName: '',rollNumber:''})
    
    let submitData = (e) =>{
        e.preventDefault();
        console.log(inpuValue)
    }
    return(
        <>
            <form style={styles}>
                <label>Name:</label>
                <input 
                    type='text' 
                    value={inpuValue.firstName} 
                    onChange={(e)=>setInputValue({...inpuValue, firstName: e.target.value})} 
                />
                <label>Last Name:</label>
                <input 
                    type='text' 
                    value={inpuValue.lastName} 
                    onChange={(e)=>setInputValue({...inpuValue, lastName: e.target.value})} 
                />
                <label>Roll Number:</label>
                <input 
                    type='number'
                    value={inpuValue.rollNumber}
                    onChange={(e)=>setInputValue({...inpuValue, rollNumber: e.target.value})}
                />
                <button style={{width:'4em'}} onClick={submitData}>Add</button>
            </form>
            <div style={{height:'50vh', backgroundColor:'#B8FBD7', width:'30%', margin:'0 15% 0 40%', padding:'2em'}}>
                <div style={{borderBottom: '3px solid black'}}>
                    <PersonIcon />
                    <input placeholder='Name' style={{outline: 'none', border: 'none', padding:'10px 0 5px 10px', backgroundColor:'transparent', fontSize:'1em'}}/>
                </div>

            </div>
        
        </>
    )
}
