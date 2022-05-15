import { Fragment, useState } from 'react'
import './App.css'
import Names from './components/Names'
import Toggle from './components/Toggle'

function App() {

  const defaultGreenState = {toggleState:true,boxState: 'green-toggle-box',box1State: 'green-toggle-box1',box2State:'green-toggle-box2'}
  const defaultRedState = {toggleState:true,boxState: 'red-toggle-box',box1State: 'red-toggle-box1',box2State:'red-toggle-box2'}
  const defaultBlueState = {toggleState:true,boxState: 'blue-toggle-box',box1State: 'blue-toggle-box1',box2State:'blue-toggle-box2'}
  const offState = {toggleState:false,boxState:'outer-box',box1State:'box1',box2State:'box2'}

  const [state,setState] = useState({blueState:defaultBlueState,greenState:defaultGreenState,redState:offState,pos:["yes","yes","no"]})

  const toggle = (color)=>{
    if(state.pos[2]=='no' && state.redState.toggleState==false && color=='red') 
    {
      setState({blueState:offState,greenState:defaultGreenState,redState:defaultRedState,pos:["yes","no","yes"]})
    }
      else if(state.pos[1]=='no' && state.blueState.toggleState==false && color=='blue')
    {   
     setState( (prev)=> {return {...prev,blueState:defaultBlueState,greenState:offState,pos:["no","yes","yes"]}})
    }
    else if(state.pos[0]=='no' && state.greenState.toggleState==false && color=='green')
    {
     setState( (prev)=> {return {...prev,redState:offState,greenState:defaultGreenState,pos:["yes","yes","no"]}})
    }
  }
    
  return (
    <Fragment>
     <div className="container">
       <div>
          <Toggle state={state.greenState} toggle={toggle} colour="green"></Toggle>
          <Toggle state={state.blueState} toggle={toggle} colour="blue"></Toggle>
          <Toggle state={state.redState} toggle={toggle} colour="red"></Toggle>
       </div>
       <div>
          <Names name="Fulfilling career"></Names>
          <Names name="High salary"></Names>
          <Names name="Work/life balance"></Names>
       </div>
     </div>
    </Fragment>
  )
}

export default App
