import React from 'react';
import './Header.css';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from '../../../extenalModule/DataLayer';

const Header = () => {
    const [{user}] = useDataLayerValue();
  return (
    <div className='body__header'>
        <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
        <p>{user?.display_name}</p>
    </div>
  );
}

export default Header
