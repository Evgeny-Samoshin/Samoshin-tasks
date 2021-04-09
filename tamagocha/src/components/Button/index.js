import React from 'react'
import './style.scss'
import classNames from 'classnames'

function Button({ className, handleClick, action }) {
  let classes = classNames(
    'btn',
    className
  )
// console.log(action);
  return (
    <>
      <button className={classes} onClick={() => { handleClick(action) }} >{action}</button>
    </>
  )
}

export default Button;