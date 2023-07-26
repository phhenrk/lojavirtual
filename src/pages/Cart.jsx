import React, { useState } from 'react'
import { getItem, setItem} from '../services/localStorageFuncs'
import {BsFillCartDashFill} from 'react-icon/bs'
import {productsArea} from '../CSS/styles'
import { header } from '../components/header'

export const Cart = () => {
   const [data, setData] = useState(getItem('carrinhoYt') || [])

   const removeItem = (obj) => {
    const arrfilter = data.filter((e) => e.id !== obj.id)
    setData(arrfilter)
   setItem('carrinhoYt', arrfilter)
   }
const subTotal = data.reduce ((acc,cur) => acc + cur.price ,0 )
return (

    <div>
        <header />
        <h3> {'subTotal:RS ${sbTotal}'}</h3>
        <productsArea>
            {
                data.map((e) =>(
                  <div key={e.id}>
                   <h4>{ 'RS ${e.title}'}</h4>
                   <img src={e.thumbnail} alt={e.title}/>
                   <h4>{e.price}</h4>
                   <button
                   onClick={() => removeItem(e)}
                   >
                    <BsFillCartDashFill/>
                   </button>
                  </div>  
                ))
            }
        </productsArea>
            
        
    </div>
)


}