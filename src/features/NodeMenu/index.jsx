

import { Col, Row } from 'antd';

export const NodeMenu=(props)=>{
    const {
        obj
    }=props
    // debugger;
    return(
        <>
        <Row>
            <Col>
                <span>{obj.label}</span>
            </Col>
        </Row>
        </>
    )
}