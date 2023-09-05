import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early Return Pattern
  if (!isMenuOpen) return null;
  return (
    <div className="">
      <div className="py-5">
        <h1>Heading1</h1>
        <li>Sub1</li>
        <li>Sub2</li>
        <li>Sub3</li>
        <li>Sub4</li>
      </div>
      <div className="py-5">
        <h1>Heading1</h1>
        <li>Sub1</li>
        <li>Sub2</li>
        <li>Sub3</li>
        <li>Sub4</li>
      </div>
      <div className="py-5">
        <h1>Heading1</h1>
        <li>Sub1</li>
        <li>Sub2</li>
        <li>Sub3</li>
        <li>Sub4</li>
      </div>
    </div>
  )
}

export default Sidebar