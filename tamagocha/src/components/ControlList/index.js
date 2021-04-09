import React from 'react'
import Button from '../Button'
import './style.scss'

function ControlList(props) {

  let handleClick = props.handleClick;
  let state = props.state;

  return (
    <div className="controls">
      {state.map((item, index) => (
        <Button key={index} className={item.className} handleClick={handleClick} action={item.action} />
      ))}
    </div>
  )
}

export default ControlList;