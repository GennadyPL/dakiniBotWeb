
import { Col, Row } from 'antd';
import {NodeMenu} from '../../features/NodeMenu'
export const Menu=(props)=>{

    const {
        onClick,
        style,
        items
      }=props;


    return(
        <>
            {items.map(item=>{
                return(
                    <NodeMenu
                        obj={item}
                    />
                )
            })}
        </>
    )
}