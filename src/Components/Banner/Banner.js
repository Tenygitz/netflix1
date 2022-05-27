import React, { useEffect, useState } from 'react';
import "./Banner.css";

import{API_KEY,imageUrl} from"../../constants/constants";
import axios from"../../axios";


function Banner() {
  const [movie,setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
    
  
  }, []); 
  function truncate(string,n){
    return(
        string?.length>n?string.substr(0,n-1)+"...":string
    )
}
  
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:"" })`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title :""}</h1>
            <div className='banner_buttons'>
                <button className='button'>play

                </button>
                <button className='button'>My List</button>
            </div>
            <h1 style={{ backgroundColor: "rgba(0,0,0,0.60)",
}} className='discription'>{truncate(`${movie? movie.overview:""}`,170)} </h1>
            
            <div className='fade_bottom'></div>

        </div>

    </div>
    
  )
}

export default Banner;