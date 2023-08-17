import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

const Body = () => {
  return (
    <div className="grid grid-flow-col grid-cols-2">
        <Sidebar className={"p-12"} />
        <MainContainer />
    </div>
  )
}

export default Body;