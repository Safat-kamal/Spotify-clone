import React from 'react';
import './Sidebar.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../../extenalModule/DataLayer';

const Sidebar = () => {
  const [{playlists}] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img className='logo' src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-500x152.jpg" alt="" />
      <p className='sidbar__options'><HomeOutlinedIcon className='sidebar_optionsIconn'/> Home</p>
      <p className='sidbar__options'><SearchIcon className='sidebar_optionsIconn'/> Search</p>
      <p className='sidbar__options'><LibraryMusicIcon className='sidebar_optionsIconn'/> Your Library</p>
      <br/>
      <strong className="sidebar__playlistTitle">PLAYLISTS</strong>
      <hr/>
      {playlists?.items?.map((playlist,index)=>{
        return (<p className='sidbar__options' key={index}><LibraryMusicIcon className='sidebar_optionsIconn'/> {playlist.name}</p>)
      })}
    </div>
  )
}

export default Sidebar
