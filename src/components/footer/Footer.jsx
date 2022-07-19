import React from 'react';
import './Footer.css';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Grid } from '@mui/material';
import VolumeDown from '@mui/icons-material/VolumeDown';
import Slider from '@mui/material/Slider';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__left">
        <img className='footer__songCoverImage' src="https://mosaic.scdn.co/640/ab67616d0000b27325e1aaadd7c17a1ec0cb07e0ab67616d0000b2733d0b1e13f43b03d43d1cb082ab67616d0000b273e125bce803627d192c8f6697ab67616d0000b273e4c77dc1b6c85c754f7f136c" alt="" />
        <div className="footer__songInfo">
          <h4>De Taali (From "Bhool Bhulaiyaa 2")</h4>
          <p>Pritam, Yo Yo Honey Singh, Armaan Malik, Shashwa...</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className='footer__icon'/>
        <SkipPreviousIcon className='footer__icon'/>
        <PlayCircleOutlineIcon fontSize='large' className='footer__icon'/>
        <SkipNextIcon className='footer__icon'/>
        <RepeatIcon className='footer__icon'/>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}> 
          <Grid item>
            <PlaylistPlayIcon className='footer__Icon'/>
          </Grid>
          <Grid item>
            <VolumeDown className='footer__Icon'/>
          </Grid>
          <Grid item xs>
            <Slider className='footer__Icon footer__IconGreen'/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


export default Footer