import React, { useContext } from 'react'
import { ThemeContext, ThemeConsumer } from '../contexts/ThemeContext'
//import { UserContext, ThemeConsumer } from '../contexts/UserContext'

const Header = () => {
  //const { isDark } = useContext(ThemeContext);
  //const user = useContext(UserContext);

  return (
    <ThemeConsumer>
      {(state) =>
        <div className='header'
          style={{
            background: state.isDark ? 'black' : 'lightgray',
            color: state.isDark ? 'white' : 'black'
          }}>
          {/* <p>{user}님, 좋은 하루되세요</p> */}
        </div>
      }</ThemeConsumer>
  )
}

export default Header