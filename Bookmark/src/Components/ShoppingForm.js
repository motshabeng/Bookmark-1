import React,{useState} from "react"

function ShoppingForm(props){

  const [artist,setArtistName]=useState("");
  const [track,setTrackName]=useState("");
  const [album,setAlbumName]=useState("");
  const [source,setSourceName]=useState("");


  const handleSubmit = (e)=>{
  props.add (album, artist, track, source );
 }
 
 const  handleArtirst = (e)=>{
   console.log(e.target.value)
   setArtistName(e.target.value);

 }

 const handleTrack = (e)=>{
  console.log(e.target.value)
  setTrackName(e.target.value);

}
const handleAlbum = (e)=>{
  console.log(e.target.value)
  setAlbumName(e.target.value);

}
const handleSource = (e)=>{
  console.log(e.target.value)
  setSourceName(e.target.value);

}


 
  return(
    <div className="body">
     <h1 className="song">Song List</h1>
     
      <input type="text" placeholder ="ArtistName" onChange={ handleArtirst}/>
      <input type="text" placeholder ="Track"   onChange={ handleTrack}/>
      <input type="text" placeholder ="Album"   onChange={handleAlbum}/>
      <input type="text" placeholder ="Source"  onChange={handleSource}/>

      <div className="button"><button onClick={handleSubmit}>Add</button><br/></div>
    </div>  
  )

}








export default ShoppingForm;