import React from 'react'
import classNames from 'classnames'
import './style.scss'

function StateItem(props) {

  let classes = classNames(
    'progress',
    props.className
  )

  return (
    <div className="stat-item">
      <div className="title">{props.title}:</div>
      <div className="progress-bar">
        <div className={classes} style={{width: props.progress + '%'}}></div>
      </div>
    </div>
  )
}

export default StateItem;