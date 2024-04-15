import {useEffect, useState} from 'react'
import './App.css'
import {BaseEditor} from '../../dist/main.js'

function App() {

  useEffect(() => {
    console.log(BaseEditor)
  }, []);

  return (
    <>
      <span>测试页面</span>
    </>
  )
}

export default App
