import React, {useState, useEffect} from 'react'

const Square = (props) => {

    const { value, handleClick } = props

    useEffect(() => {

    })

    return (
        <button
            className="square"
            onClick={() => handleClick()}>
            {value}
        </button>
    )
}

export default Square