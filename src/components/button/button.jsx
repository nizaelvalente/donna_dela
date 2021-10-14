import './button.css'
import React from 'react'

export const Button = (params) => {

    return (<button className={params._class}>{params._innerHTML}</button>)
}