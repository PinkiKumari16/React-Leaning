import React from 'react'
import {useSelector} from 'react-redux'

export const Count = () => {
    const countNum = useSelector(state => state);
    return (
        <>
            <h1>{countNum}</h1>
        </>
    )
}