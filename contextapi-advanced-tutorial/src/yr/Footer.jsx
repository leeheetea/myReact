import React, { useContext } from 'react'
import { ThemeContext , ThemeConsumer} from '../contexts/ThemeContext'
import { ColorContext } from '../contexts/ColorContext'

const Footer = () => {
  //const {isDark, setIsDark} = useContext(ThemeContext);
  const {background, color} = useContext(ColorContext);

  return (
    <ThemeConsumer>
      {(state) =>
        <div className='footer'
          style={{background: state.isDark ? 'black' : 'lightGray', 
            color: state.isDark ? 'white' : 'black'
          }}>
          Footer
        </div>
       }
    </ThemeConsumer>
  ) 
}

export default Footer