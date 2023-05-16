import React from 'react'
import DailyStats from './dailyStats'
import DailyTasks from './dailyTasks'
import Timer from './Timer'

const DailyScreen = () => {
  return (
    <>
        <Timer />
        <DailyStats />
        <DailyTasks />
    </>
  )
}

export default DailyScreen