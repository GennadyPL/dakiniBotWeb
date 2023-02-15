import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';

const Collabsible =(props)=>{
    const {
        title = 'click my',
        children
    } = props;

    const [isVisible, setVisible] = useState(true);

    const handliVisible = () => setVisible(!isVisible);
    

    return(
        <>
            <div
                onClick={handliVisible}
                style={{
                    background: '#000',
                    width:300,
                    // padding:'0.8rem 1.2rem',
                    
                }}
            >
                {title}
                <AnimatePresence
                    initial={false}
                >
                    {isVisible && (
                        <motion.div
                            initial={{
                                height:0
                            }}
                            animate={{
                                height:"auto"
                                
                            }}
                            exit={{
                                height:0
                                
                            }}
                            transition={{
                                duration:2
                            }}
                            style={{
                                overflow:"hidden",
                                border: '1px solid #FFF'

                            }}
                        >
                            <div
                                style={{
                                    width:300,
                                }}
                            >
                                {children}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </>
    )
}
export default Collabsible;