import './asideCart.css'
import React from 'react'
import { Button } from '../button/button'

export const AsideCart = (params) => {
    return (
        <div className="_aside_cart" ref={params._ref}>
            <div className="_close_cart" onClick={params._click}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                    <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" />
                </svg>
            </div>
            <div className="_title_cart_container">
                <h2 className="_title_cart">Sacola de compras</h2>
            </div>
            <div className="_aside_cart_container">

                <h1>Sua sacola está vazia!</h1>
                <h1>(:DX)</h1>
                <h1>Testando nova branch</h1>

            </div>
            <div className="_button_container_cart">
                <Button _class="_button_default _button_cart" _innerHTML="Pagar" />
            </div>
        </div>
    )
}