import React, { useEffect } from 'react'

export const useCountUpdateHook = (num) => {
    useEffect(()=>{
        if(num>0){
          document.title = `Chats ${num}`;
        }
        else{
          document.title = `Chat`;
        }
    },[num])
}
