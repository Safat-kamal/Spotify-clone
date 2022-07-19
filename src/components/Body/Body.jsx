import React from 'react';
import { useDataLayerValue } from '../../extenalModule/DataLayer';
import './Body.css';
import Header from './Header/Header';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlaylistItem from './PlaylistItem/PlaylistItem';

const Body = () => {
  const [{ relaxPlaylist }] = useDataLayerValue();
  return (
    <div className='Body'>
      <Header/>
      <div className="body__info">
        <img src={relaxPlaylist?.images?.[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{relaxPlaylist?.name}</h2>
          <p>{relaxPlaylist?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledWhiteIcon fontSize='large' className='body_Icon Icon_green'/>
          <FavoriteIcon className='body_Icon Icon_green'/>
          <MoreHorizIcon className='body_Icon'/>
        </div>
        {relaxPlaylist?.tracks?.items?.map((item,index)=>{
          return (<PlaylistItem song={item} key={index}/>)
        })}
      </div>

    </div>
  )
}

export default Body
