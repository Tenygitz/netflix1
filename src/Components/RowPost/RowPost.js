import React from 'react';
import "./Rowpost.css";
import { useEffect, useState } from "react";
import axios from"../../axios";
import {  API_KEY, imageUrl } from"../../constants/constants";

import YouTube from 'react-youtube';


function RowPost(props) {
  const [movie, setMovie] = useState([])
  const [urlId, seturlId] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovie(response.data.results)
    }).catch(err=>{
      // alert("network")
    })
 }, [])
 const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
const handleMovie=(id)=>{
  console.log(id)
  axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
   if(response.data.results.length!==0){
     seturlId(response.data.results[0])
   }else{
     console.log("trailer not avialable")
   }
  })

}
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='poster'>
          {movie.map((obj)=>
                     <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?"smallPoster":'poster'} src={`${imageUrl+obj.backdrop_path}`}alt="posters"></img>
          )}
            
            
        </div>
         { urlId &&   <YouTube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost