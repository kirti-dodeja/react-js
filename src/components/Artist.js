import React, {Component} from 'react';

const Artist=({artist})=>{
    //below line checks if artist object is not defined return null
    if(!artist) return null;
const{images,name, followers,genres}=artist;
return(
    <div>
        <h3>{name}</h3>
        <h4>{followers.total} followers</h4>
        <p>{genres.join(',')}</p>
        {/* below line checks if image[0] is defined */}
        <img 
        src={images[0] && images[0].url} 
        alt='artist-profile'
        style={{width:200, height:200,borderRadius:100}}/>
    </div>
)
}
export default Artist;