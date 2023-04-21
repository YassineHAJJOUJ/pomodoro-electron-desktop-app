import React from 'react'

const TimeTypes = () => {
  return (
    <div className="flex flex-row w-auto space-x-6">
        <button className=" bg-gradient-to-b from-accent-pink-500 to-accent-pink-700 hover:from-accent-pink-700 hover:to-accent-pink-500 pt-1 pb-1 flex-1 text-[13px] rounded-[4px]">Pomodoro</button>
        <button className="bg-accent-blue-50 text-accent-blue-500 pt-1 pb-1 flex-1 text-[13px] rounded-[4px]">Short Break</button>
        <button className="bg-accent-purple-50 text-accent-purple-500 pt-1 pb-1 flex-1 text-[13px] rounded-[4px]">Long Break</button>
    </div>
  )
}

export default TimeTypes