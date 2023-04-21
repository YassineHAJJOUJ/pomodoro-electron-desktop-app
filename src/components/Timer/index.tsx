import React from 'react'
import TimeTypes from './timeTypes'
import ProgressCircle from './progressCircle'

const Timer = () => {
  return (
    <div className="w-auto m-6 bg-slate-800">
        <TimeTypes />
        <ProgressCircle />
    </div>
  )
}

export default Timer