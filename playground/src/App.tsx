import {useEffect} from 'react'
import './App.css'
// @ts-ignore
import {BaseEditor} from "../../dist/main.js";

function App() {

  useEffect(() => {
    console.log(new BaseEditor("editor_box"))
  }, []);

  return (
    <div id="editor_box">
    </div>
  )
}

export default App
