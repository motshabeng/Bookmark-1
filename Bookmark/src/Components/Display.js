import React ,{useState,useEffect} from "react"

function DisplayItems(props){
  const handleDelete = (item) => {
    props.Delete(item)
  }
    
  const header ="my shopping list" 
  return(
    <div>
    
     {props.data.map((item)=>{
         return (

          <div className="card">
          <h3 className="track">TrackName:{item.trackName}</h3>
          <h3 className="album">AlbumName:{item.album}</h3>
          <h3 className="artist">ArtistName:{item.artistName}</h3>
          <h3 className="source">Source:{item.source}</h3>
          <button className="button2" onClick={() => handleDelete(item)}>Delete</button>
           </div>
        
         )
     })}

     
    </div>
  )
}


export default DisplayItems;