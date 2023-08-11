import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

/* 
Provider 사용 전

const Page = ({isDark, setIsDark}) => {

  console.log(isDark);
  return (
    <div className='page'>
      <Header isDark={isDark}></Header>
      <Content isDark={isDark} setIsDark={setIsDark}></Content>
      <Footer isDark={isDark}></Footer>
    </div>
  )
} 
*/

// Provider 사용 
const Page = () => {

  return (
    <div className='page'>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default Page