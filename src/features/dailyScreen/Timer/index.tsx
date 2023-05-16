import React from 'react'
import TimeTypes from './timeTypes'
import ProgressCircle from './progressCircle'

const Timer = () => {
  return (
    <div className="w-auto m-6 mt-14 mb-0">
        <TimeTypes />
        <ProgressCircle />
    </div>
  )
}

export default Timer