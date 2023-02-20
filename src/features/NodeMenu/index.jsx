import {SheetMenu} from '../../entities/SheetMenu'
import { DownOutlined,UpOutlined,CaretDownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Col, Row, } from 'antd';
import { motion,AnimatePresence } from "framer-motion";
export const NodeMenu=(props)=>{
    const {
        offset=0,
        label,
        children
    }=props;

    const [openState,setOpenState] = useState(false)
    // debugger;
    
    return(
        <>
        {children.map(elem=>{
                        if(elem.children){
                            return(
                                <>
                                <AnimatePresence>
                                    <motion.div>
                                <Row 
                                    align="middle"
                                    style={{
                                        height:'40px',
                                        
                                        paddingLeft:'7%',
                                        paddingRight:'7%'
                                    }}    
                                >
                                    <Col 

                                        span={2}
                                        offset={offset}    
                                    >
                                    {elem.icon}
                                    </Col>
                                    <Col
                                        span={21-offset}

                                    >
                                        <span>{elem.label}</span>
                                    </Col>
                                    <Col 
                                        span={1} 
                                    >
                                    {openState?<UpOutlined />:<CaretDownOutlined />}
                                    </Col>
                                </Row>
                                </motion.div>
                                </AnimatePresence>
                                <AnimatePresence>
                                <NodeMenu
                                    key={elem.label}
                                    offset={2}
                                    label={elem.label}
                                    children={elem.children}
                                />
                                </AnimatePresence>
                                </>
                            )
                        }
                        return(
                            <SheetMenu
                            key={elem.label}
                            label={elem.label}
                            />
                        )
                        
                    })
      
            }
            </>

    )
}