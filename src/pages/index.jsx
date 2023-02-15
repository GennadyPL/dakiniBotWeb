
import { Route, Routes } from "react-router-dom";
import {Bar} from './Bar';
import {Kitchen} from './Kitchen';
import {Сhoice} from './Сhoice';


export const Routing = ()=>{

    return(
        <>
        
            <Routes>
                <Route path="/" element={<Сhoice/>} />
                <Route path="/bar" element={<Bar/>} />
                <Route path="/kitchen" element={<Kitchen/>} />
                
            </Routes>
        </>
    )
}
