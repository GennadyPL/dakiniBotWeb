// import { Route, Switch, Redirect } from "react-router-dom";
import './index.scss';

import {Routing} from '../pages'

import { BrowserRouter } from 'react-router-dom';

const app =()=>{
    return(
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    )
}
export default app