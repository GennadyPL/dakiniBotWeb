
import { Route, Routes } from "react-router-dom";

import {MenuPages} from './MenuPages';


export const Routing = ()=>{

    return(
        <>
        
            <Routes>
                <Route path="/" element={<MenuPages/>} />
                {/* <Route path="/bar" element={<Bar/>} />
                <Route path="/kitchen" element={<Kitchen/>} /> */}
                
            </Routes>
        </>
    )
}
