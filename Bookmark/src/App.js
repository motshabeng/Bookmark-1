import React, {useState} from "react";
import "./App.css"
import ShoppingForm from "./Components/ShoppingForm"
import DisplayItems from "./Components/Display"

function App() {
  const[list,setList]=useState([]);
  
  
  const submit = (artistName,trackName,album,source)=>{
    let obj =  {
      artistName:artistName,
      trackName:trackName,
      album:album,
      source:source

    }
    setList([...list,obj]);
  }
  const Delete = data =>{
    const List = list.filter(item=>item.data !== data.data)
    setList(List)
  }
 
  
  return (
    <div>
      <ShoppingForm add={submit}/>
      <DisplayItems data={list} Delete={Delete}/>
      
    </div>
  );
}

export default App;
