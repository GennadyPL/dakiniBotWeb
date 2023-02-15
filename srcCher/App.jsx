import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button, Space } from 'antd';
import './App.css'
import {motion, AnimatePresence} from 'framer-motion'
import Collabsible from './components/Collabsible';
import Filter from './components/Filter';
import {data} from './data.js'


function App() {
  // const [count, setCount] = useState(0)

  // const items=['item 1','item 2','item 3']
  // const varList={
  //   viseble:i=>({
  //     opacity:1,
  //     y:0,
  //     transition:{
  //       delay:i*0.5
  //     }

  //   }),
  //   hidden:{
  //     opacity:0,
  //     y:-100
  //   }
  // }
  return (
    <div className="App">
      <h1>header</h1>
      <Filter 
        data={data}
      />
      {/* <Collabsible
        title="Content"

      >
      <div style={{
        padding:0
      }}>
        Cooking Instructions
        Preheat the oven to 375 degrees.
        Lightly coat aluminum foil with oil.
        Place salmon on foil
        Cover with rosemary, sliced lemons, chopped garlic.
        Bake for 15-20 minutes until cooked through.
        Remove from oven.
        </div>
      </Collabsible> */}
      {/* <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space> */}

      {/* <div>
        <a href="https://vitejs.dev" >
          <motion.img 
            src="/vite.svg" 
            className="logo" 
            alt="Vite logo" 
            initial={{

            }}
            animate={{
              rotate:360
            }}
            transition={{
              // delay:1,
              duration:0.5,
              repeat:Infinity,
              repeatDelay:1,
              repeatType:'reverse',
              type:'keyframes',
              ease:'easeIn'
            }}
          />
        </a>
      </div>
      <motion.h1
        whileHover={{
          scale:1.3,
          color:'red'
        }}
      >Vite + React</motion.h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <motion.p
          initial={{
            x:-1000,
            opacity:0
          }}
          animate={{
            x:0,
            opacity:1
          }}
          transition={{
            delay:1
            // duration:200
          }}
        >
          Edit <code>src/App.jsx</code> and save to test HMR
        </motion.p>
      </div>
      <motion.p 
        animate={{ 
          scale: [null,2, 0.5]
        }}
        transition={{
          repeat:Infinity

        }}
        lassName="read-the-docs"
      >
        Click on the Vite and React logos to learn more
      </motion.p>
      {
        items.map((el,i)=>(
          <motion.li 
            key={el}
            variants={varList}  
            initial='hidden'
            animate='viseble'
            custom={i}
          >
            {el}
          </motion.li>
        ))
      } */}
    </div>
  )
}

export default App
