import './header.css'
import React, { useRef } from 'react'
import { AsideSearch } from '../search/search'
import { AsideCart } from '../asideCart/asideCart';
import { AsideUser } from '../asideUser/asideUser';

export const Header = (params) => {

    const asideCart = useRef(null)
    const asideUser = useRef(null)
    const asideSearch = useRef(null)
    const naveMenu = useRef(null)
    const iconMoble = useRef(null)

    const handleClickCart = (e) => {
        asideCart.current.classList.toggle('_aside_cart_visible')
        asideSearch.current.classList.remove('_aside_search_visible')
        asideUser.current.classList.remove('_aside_user_visible')
        naveMenu.current.classList.remove('_nav_menu_visible')
    }


    const handleClickSearch = (e) => {
        asideSearch.current.classList.toggle('_aside_search_visible')
        asideCart.current.classList.remove('_aside_cart_visible')
        asideUser.current.classList.remove('_aside_user_visible')
        naveMenu.current.classList.remove('_nav_menu_visible')
    }
    const handleClickUser = (e) => {
        asideUser.current.classList.toggle('_aside_user_visible')
        asideCart.current.classList.remove('_aside_cart_visible')
        asideSearch.current.classList.remove('_aside_search_visible')
        naveMenu.current.classList.remove('_nav_menu_visible')
    }

    const handleClickMenuMoble = (e) => {
        naveMenu.current.classList.toggle('_nav_menu_visible')
        asideSearch.current.classList.remove('_aside_search_visible')
        asideCart.current.classList.remove('_aside_cart_visible')
        asideUser.current.classList.remove('_aside_user_visible')
    }

    return (
        <header className="_header">
            <div className="_logo_container">
                <h1 className="_logo">
                    <span>DONNA</span>
                    <span>DELA</span>
                </h1>

            </div>
            <nav className="_nav_menu" ref={naveMenu}>
                <ul>
                    <li className="_item_menu">Novidades</li>
                    <li className="_item_menu">Categorias
                        <ul className="_menu_item_category">
                            <li className="_item_category">Calças</li>
                            <li className="_item_category">Bermudas</li>
                            <li className="_item_category">Shorts</li>
                            <li className="_item_category">Camisas/Blusas</li>
                        </ul>
                    </li>
                    <li className="_item_menu">Promoções</li>
                </ul>
            </nav>
            <div className="_button_container">
                <AsideSearch _ref={asideSearch} />
                <svg onClick={handleClickSearch} className="_icon_svg" xmlns="http://www.w3.org/2000/svg" height="2.4rem" viewBox="1 1 24 24" width="2.4rem" fill="#6B6B6B">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
                <svg onClick={handleClickUser} className="_icon_svg" xmlns="http://www.w3.org/2000/svg" height="2.4rem" viewBox="1 1 24 24" width="2.4rem" fill="#6B6B6B">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <svg onClick={handleClickCart} className="_icon_svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="1 1 24 24" width="24px" fill="#6B6B6B">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z" />
                </svg>
                <svg onClick={handleClickMenuMoble} className="_icon_svg _menu_moble" ref={iconMoble} xmlns="http://www.w3.org/2000/svg" height="2.4rem" viewBox="0 0 24 24" width="2.4rem" fill="#6B6B6B">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
            </div>
            <AsideCart _ref={asideCart} _click={handleClickCart} _products ={params._products} />
            <AsideUser _ref={asideUser}  _click={handleClickUser}/>
        </header>
    )
}