import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Folder from './component/Folder'
import explorer from "./component/FolderData";

function App() {

  return (
    <div className="App">
      <Folder explorer={explorer}></Folder>
    </div>
  )
}

export default App
