import React from 'react'
import StateItem from '../StatItem'
import './style.scss'

function StatList(props) {

  let state = props.state;

  return (
    <div className="stats">
      {state.map((item, index) => (
        <StateItem className={item.className} title={item.title} key={index} progress={item.value}/>
      ))}
    </div>
  )
}

export default StatList;