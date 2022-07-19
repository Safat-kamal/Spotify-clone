import React from 'react';
import './PlaylistItem.css';

const PlaylistItem = ({song}) => {
  return (
    <div className='song'>
      <img src={song?.track?.album?.images?.[0]?.url} alt="" />
      <div className="song__info">
        <p className="song__name">{song?.track?.name}</p>
        <p className="song__artists">{song?.track?.artists?.map((artist)=> artist.name).join(", ").length > 100 ? song?.track?.artists?.map((artist)=> artist.name).join(", ").substring(1):song?.track?.artists?.map((artist)=> artist.name).join(", ")}</p>
      </div>
    </div>
  )
}

export default PlaylistItem
