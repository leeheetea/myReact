import React from 'react'
import { ThemeConsumer } from '../contexts/ThemeContext'

const Content = () => {
  return (
    <ThemeConsumer>
      {
      (state, action) =>
        // console.log('state : ', state)
        <div className='content'>
          <div style={{ background: state.isDark ? 'black' : 'lightgray',
            color: state.isDark ? 'white' : 'black' }}>
            홍길동님, 좋은 하루되세요.{state}</div>
            <button className='button' onClick={() => action.setIsDark(!state.isDark)}>
              Dark Mode
            </button>
        </div>
      }
    </ThemeConsumer>
  )
}

export default Content