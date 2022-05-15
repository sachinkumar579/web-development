import { useState } from "react";

const Folder = ({explorer}) => {

  const [disp, setDisp] = useState(false);

  if(explorer.type==='folder'){
    return <div>
           <div style={{paddingLeft:'10px'}} onClick={()=>setDisp(!disp)}>{explorer.name} </div>   
           { disp && explorer.items.map((data,index)=><div key={index} style={{paddingLeft:'10px'}}>{<Folder explorer={data}></Folder>}</div>)}
           </div> 
  }
  else{
    return <div style={{paddingLeft:'10px'}}>{explorer.name}</div>
  }
  };

export default Folder;
