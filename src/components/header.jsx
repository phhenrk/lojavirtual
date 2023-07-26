import react from 'react'
import { Link } from 'react-router-dom'
import { Styled } from 'styled-components'

const HeaderArea = styled.header`

display: fle;
align-itens: center;
justify-content: center;
gap: 50px;
background-color:crimson;
<padding:20px;
margin-botton: 70px;

a {
    text-decoration: none;
    color: white;
}
&: hover {
    text-decoration: underline;
}

`;


export const header = () => {
    return (
        <HeaderArea>
            <link to= "/">Store</link>
            <link to= "/cart">Cart</link>

        </HeaderArea>
    )
}