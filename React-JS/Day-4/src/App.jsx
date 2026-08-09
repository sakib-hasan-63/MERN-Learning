import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './component/card'


const App = () => {
  return (
    <div className='card-container'>
      <Card user='Sakib Hasan' img='https://images.unsplash.com/photo-1776053432969-23b552975f6d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' h='hello i am Sakib Hasan and i pursuing to bca '/>
      <Card user='kaif khan' img='https://plus.unsplash.com/premium_photo-1769203538123-a88e7a74ebc5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' h='hello i am kaif khan and i pursuing to bca '/>
      <Card user='Anas khan' img='https://plus.unsplash.com/premium_photo-1768802016906-47f9ddb42f4e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' h='hello i am a anas khan and i pursuing to bca' />
      <Card user='Arif khan' img='https://plus.unsplash.com/premium_photo-1693641525366-dde19623bb62?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' h='hello i am a Arif khan and i pursuing to bca' />
      <Card user='Asif khan' img='https://plus.unsplash.com/premium_photo-1768656171195-4480c77f5c64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' h='hello i am a Asif khan and i pursuing to bca' />
      <Card user='zaid khan' img='https://plus.unsplash.com/premium_photo-1723725894063-531a9bd8251d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' h='hello i am a Zaid khan and i pursuing to bca' /> 

      </div>
  )
} 

export default App
