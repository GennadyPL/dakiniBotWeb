import { Link } from "react-router-dom";

import { Button } from "../../entities/Button"
export const Menu=()=>{
    return(
        <>
        <Link to="/bar">
            <Button title="Бар" style={{width:200}}/>
        </Link>
        <Link to="/kitchen">
            <Button title="Кухня" style={{width:200}}/>
        </Link>
        </>
    )
}