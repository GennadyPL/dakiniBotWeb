import { Col, Row } from 'antd';


export const SheetMenu=(props)=>{

    const {
        label
    }=props

    return(
        <>
        <Row>
            <Col>
                <span>{label}</span>
            </Col>
        </Row>
        </>
    )
}