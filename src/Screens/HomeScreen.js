import React from 'react';
import Navbar from "../Components/NavBar/NavBar";
import Banner from "../Components/Banner/Banner";
import RowPost from "../Components/RowPost/RowPost";
import{action,originals,comedy,animations,adventure,crime,horror,romance,music,thriller,science_fiction} from"../url";

function HomeScreen() {
  return (
    <div>
        <Navbar/>
      <Banner/>
      <RowPost url={action} title="Action" isSmall/>
      
      
      <RowPost url={animations} title="Animtion" isSmall/>
      <RowPost url={adventure} title="Adventure" isSmall/>
      <RowPost url={comedy} title="Comedy" isSmall/>
      <RowPost url={crime} title="Crime" isSmall/>
      <RowPost url={horror} title="Horror" isSmall/>
      <RowPost url={romance} title="Romance" isSmall/>
      <RowPost url={music} title="Music" isSmall/>
      <RowPost url={thriller} title="Thrilller" isSmall/>
      <RowPost url={science_fiction} title="Science Fiction" isSmall/>
      
      <RowPost url={originals} title="Netflix Original"/>
      
    </div>
  )
}

export default HomeScreen