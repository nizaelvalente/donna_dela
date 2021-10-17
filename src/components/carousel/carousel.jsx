import './carousel.css'
import React, { useRef} from 'react'
import { Card } from '../card/card'

export const Carousel = (params) => {

    const carouselBody = useRef(null)

    const handleClickLeft = (e) => {
        e.preventDefault()
        carouselBody.current.scrollLeft -= carouselBody.current.offsetWidth
    }

    const handleClickRight = (e) => {
        e.preventDefault()
        carouselBody.current.scrollLeft += carouselBody.current.offsetWidth
    }

    return (
        <div className="_carousel">
            <div className="_carousel_body" ref={carouselBody}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="_buttons_arrow">
                <svg onClick={handleClickLeft} xmlns="http://www.w3.org/2000/svg" height="3.4rem" viewBox="0 0 24 24" width="3.4rem" fill="#FFFFFF">
                    <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
                    <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
                </svg>

                <svg onClick={handleClickRight} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="3.4rem" viewBox="0 0 24 24" width="3.4rem" fill="#FFFFFF">
                    <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
                    <g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" /></g>
                </svg>
            </div>
        </div>
    )
}