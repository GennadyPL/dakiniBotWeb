import {motion} from 'framer-motion'

const Button =(props)=>{
    const{
        text,
        handleClick=Function.prototype
    }=props;

    return (
        <motion.button
            style={btnStyle}
            whileHover={{
                backgroundColor:'#000'
            }}
            whileTap={{
                backgroundColor:'#ccc'  
            }}
            onClick={handleClick}
        >

            {text}
        </motion.button>

    )
}

export default Button

const btnStyle = {
    border: 'none',
    outline: 'none',
    padding: '12px 16px',
    backgroundColor: '#fff',
    cursor: 'pointer'
  }