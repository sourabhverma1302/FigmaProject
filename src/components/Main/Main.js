import React from 'react';
import Experience from '../Experience/Experience';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import RDownload from '../ResumeDownload/RDownload';
import SideBar from '../SideBar/SideBar'
import './Main.css';

const Main = () => {
    const show=useSelector(state=>state.ShowOrNot.mainbar);
  return (
    <div className='container'>
    <div className='main'>
    <SideBar/>
    {show === 'experience'?<Experience/>:null}
    {show === 'download'?<RDownload/>:null}
    </div>
    </div>
  )
}

export default Main