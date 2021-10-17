import './card.css'
import React from 'react'

export const Card = (params) => {

    return (
        <div className="_card">
            <img src="https://img.ltwebstatic.com/images3_pi/2021/07/27/16273538037eced0df3f7a805ebd0bbd402f6a65b7_thumbnail_600x.webp" alt="" />
            <div className="_card_body">
                <h5 className="_card_title">Card de Produto</h5>
                <p className="_card_text">
                    Um exemplo de texto rápido para construir o
                    título do card e fazer preencher o conteúdo do card.
                </p>
                <h5 className="_card_price">R$ 109,90</h5>
            </div>
        </div>
    )
}