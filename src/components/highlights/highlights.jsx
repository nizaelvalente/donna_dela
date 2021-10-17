import './highlights.css'
import React from 'react'
import { Carousel } from '../carousel/carousel'

export const Highlights = (params) => {

    return (
        <div className="_highlights">
            <div className="_highlights_title_body">
                <h2 className="_highlights_title">DESTAQUES</h2>
            </div>
            <div className="_highlights_body">
                <Carousel />
            </div>
        </div>
    )
}