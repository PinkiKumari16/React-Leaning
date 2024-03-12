import React from 'react'
import Child from './Child'

const Parent = () => {
const data = [
    {
        id: 1,
        name: "pinki",
        address: "Delhi",
        education: "gradgute",
        hobby: "coding"
    },
    {
        id: 2,
        name: "Rinki",
        address: "Ahmdabad",
        education: "12th Pass",
        hobby: "Front-end Developer"

    },
    {
        id: 3,
        name: "Kiran",
        address: "Bihar",
        education: "gradgute",
        hobby: "Traveling"

    },
    {
        id: 4,
        name: "Anita",
        address: "New Delhi",
        education: "12th pass",
        hobby: "eating"

    },
]

  return (
    <div style={{display:"flex",gap:"2rem",flexWrap:"wrap"}}>
        {data.map((userData)=>{
           return (
                <Child 
                    key={userData.id}
                    name={userData.name} 
                    address={userData.address} 
                    edu={userData.education} 
                    hobby={userData.hobby} 
                />
            );
        // ////{name,address,edu,hobby}
            // return (<Child name={name} address={address} education={edu} hobby={hobby} />);
           /////// return (<Child {...userData} />);
        })
    }
        
        
    </div>
  )
}

export default Parent