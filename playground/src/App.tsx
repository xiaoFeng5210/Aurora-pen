import {useEffect, useState} from 'react'
import './App.css'
// @ts-ignore
import {add} from '../../dist/main.js'

function App() {

  useEffect(() => {
    add()
  }, []);

  return (
    <>
      <span>测试页面</span>
    </>
  )
}

export default App
