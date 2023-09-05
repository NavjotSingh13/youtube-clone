import React from 'react'
import Button from './Button';

const ButtonList = () => {
  return (
    <div className="flex">
        <Button name="All" />
        <Button name="Tech" />
        <Button name="Comedy"/>
        <Button name="Investing" />
    </div>
  )
}

export default ButtonList;