import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BaseEditor} from '../../dist/main.js'

function App() {

  useEffect(() => {
    const editor = new BaseEditor()
  }, []);

  return (
    <>
      <span>测试页面</span>
    </>
  )
}

export default App
