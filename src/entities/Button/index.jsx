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
                    style={{
                        width:200,
                        color:Telegram.WebApp.themeParams.button_text_color,
                        // color:'#FFF111',
                        background:Telegram.WebApp.themeParams.button_color
                    }}
                    
                    
                >
                    {title}
                </ButtonAntd>
            </Col>
        </Row>
    )
}