import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

const Body = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2">
        <Sidebar />
        <MainContainer />
    </div>
  )
}

export default Body;