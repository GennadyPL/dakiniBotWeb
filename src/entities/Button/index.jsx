import { Button as ButtonAntd, Row ,Col} from 'antd';

export const Button=(props)=>{
    const {
        title,
        type,
        style
    } = props;

    return(
        <Row justify="center"> 
            <Col>
                <ButtonAntd
                    style={style}
                    type={type}
                    
                >
                    {title}
                </ButtonAntd>
            </Col>
        </Row>
    )
}