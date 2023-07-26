import React, { useEffect, useState } from "react";
import { BsFillCartCartCheckFill, BsFillCartCartPlusFill } from 'react-icon/bs'
import { getItem, setItem } from "../services/localStorageFuncs";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { header } from "../components/header";
import {productsArea} from '../CSS/styles'

export const Store = () => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState( getItem('carrinhoYt') || []);

    useEffect(() => {
        const fetchApi = () = {
            const  url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular'
            const response = await fetch(url);
            const objJson = await response.Json()
            setData(objJson.results)
}
fetchApi();
    }, { })

const handleclick = (obj) => {
    const Element = cart.find((e) => e.id == obj.id)
    if (element) {
        const arrfilter = cart.filter((e) => e.id !== obj.id)
        setCart(arrfilter)
        setCart('carrinhoYt',arrfilter)

    } else {
        setCart([...cart, obj])
        setItem('carrinhoYt',[... cart,obj])
    }

}
return (

    <div>
        <link to= '/cart'> Carrinho</link>
        <header />
        <productsArea>
            {

                data.map((e) => (
                    <div key={e.id}>
                       <h4>{ 'RS ${e.title}'}</h4>
                        <img src={e.thumbnail} alt={e.title} />
                        <h4> {e.price}</h4>
                        <button
                            onClick={() => handleclick(e)}
                        >
                            {
                                cart.some((itemCart) => itemCart.id == e.id) ? (
                                    <BsFillCartCartCheckFill />
                                ) : (
                                    <BsFillCartCartPlusFill />
                                )
                            }
                        </button>

                    </div>
                ))

            }
        </ProductsArea>
    </div>

)
}