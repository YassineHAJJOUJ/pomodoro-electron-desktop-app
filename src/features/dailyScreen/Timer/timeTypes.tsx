import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { timerType, timerEnums, switchTimer } from '../dailyScreenSlice'

const TimeTypes = () => {

  const dispatch = useDispatch()
  const timer: timerType = useSelector((state: RootState) => state.dailyScreen.timer )

  const onPomodoroButtonClickHandler = () => {
    dispatch(switchTimer(timerEnums.POMODORO))
  }

  const onShortBreakButtonClickHandler = () => {
    dispatch(switchTimer(timerEnums.SHORT_BREAK))
  }

  const onLongBreakButtonClickHandler = () => {
    dispatch(switchTimer(timerEnums.LONG_BREAK))
  }

  return (
    <div className="flex flex-row w-auto space-x-6">
        <button className={ timer.timerType === timerEnums.POMODORO? "bg-accent-pink-700  hover:bg-accent-pink-500 pt-1 pb-1 flex-1 text-[13px] rounded-[4px]" : "bg-accent-pink-700/5  hover:bg-accent-pink-500 pt-1 pb-1 flex-1 text-[13px] rounded-[4px] text-accent-pink-500" }
        onClick={onPomodoroButtonClickHandler}>
        Pomodoro
        </button>
        <button 
          className={ timer.timerType === timerEnums.SHORT_BREAK? "bg-accent-blue-500 text-white hover:bg-accent-blue-500 hover:text-white pt-1 pb-1 flex-1 text-[13px] rounded-[4px]" : "bg-accent-blue-50 text-accent-blue-500 hover:bg-accent-blue-500 hover:text-white pt-1 pb-1 flex-1 text-[13px] rounded-[4px]" } onClick={onShortBreakButtonClickHandler}>
            Short Break
        </button>
        <button 
          className={ timer.timerType === timerEnums.LONG_BREAK?  "bg-accent-purple-500 text-white hover:bg-accent-purple-500 hover:text-white pt-1 pb-1 flex-1 text-[13px] rounded-[4px]" : "bg-accent-purple-50 text-accent-purple-500 hover:bg-accent-purple-500 hover:text-white pt-1 pb-1 flex-1 text-[13px] rounded-[4px]"} onClick={onLongBreakButtonClickHandler}>
            Long Break
        </button>
    </div>
  )
}

export default TimeTypes