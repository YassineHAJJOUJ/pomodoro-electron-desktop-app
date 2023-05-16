import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openSettings, closeSettings } from '../../features/settings/settingsSlice'
import { openStatistics, closeStatistics } from '../../features/statistics/statisticsSlice'
import { RootState } from '../../store'

const NavBar = () => {

  const dispatch = useDispatch()
  const isSettingsOpen = useSelector((state: RootState) => state.settings.isOpen)
  const isStatisticsOpen = useSelector((state: RootState) => state.statistics.isOpen)
  
  console.log(isSettingsOpen)

  const onStatsIconClickHandler = () => {
    console.log("onStatsIconClickHandler")

    isStatisticsOpen? dispatch(closeStatistics()) : dispatch(openStatistics())
    
  }

  const onSettingsIconClickHandler = () => {
    console.log("onSettingsIconClickHandler")

    console.log(`settings modal is ${isSettingsOpen}`)
    isSettingsOpen? dispatch(closeSettings()) : dispatch(openSettings())
  }

  return (
    <>
      <div className="flex flex-row w-screen p-6">
        <div className="w-6 h-6 mr-4"><img src="../assets/icons/logo.svg" alt="Logo ePomodoro" className="w-6 h-6" /></div>
        <div className="h-6 text-white font-poppinsMedium">ePomodoro</div>
        <div className="h-6 flex flex-row flex-grow justify-end">
          <button className="mr-6 cursor-pointer" onClick={onStatsIconClickHandler}>
            <img src="../assets/icons/stats_icon.svg" alt="Statistics" className="w-6 h-6" />
          </button>
          <button className="cursor-pointer" onClick={onSettingsIconClickHandler}>
            <img src="../assets/icons/settings_icon.svg" alt="Settings" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  )
}

export default NavBar