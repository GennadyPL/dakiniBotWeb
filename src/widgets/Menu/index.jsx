
import { Col, Row } from 'antd';
import {NodeMenu} from '../../features/NodeMenu'
export const Menu=(props)=>{

    const {
        onClick,
        style,
        items
      }=props;

    //   debugger;
    return(
        <>


                    <NodeMenu
                        key='ads'
                        children={items}
                        // node={item}
                    />
                    


        </>
    )
}