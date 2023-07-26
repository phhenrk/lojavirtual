import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Store } from "./pages/store";
import {Cart} from "./pages/Cart";

export const content = () => {
return (
<switch>
<Route exact path='/cart' component={ Cart } />
<Route exact path='/' component={ Store } />

</switch>


)
}