import React from 'react'
import { statsItemType } from './statsItem.type'

const statsColors = ["accent-pink-500","accent-blue-500","accent-purple-500"]

const StatsItem = ({statsItem, index}: {statsItem : statsItemType, index: number}) => {
  return (
    <div 
        className="flex flex-col bg-primary-400 rounded-lg px-4 py-3 flex-1 shadow-sm ">
        <h1 className=" text-accent-grey text-xs">{statsItem.title}</h1>
        <div className="flex items-end">
            <h3 className={`text-lg font-bold mr-1 text-${statsColors[index]}`}>{statsItem.result}</h3>
        { statsItem.description && <p className="text-[#7876A0] text-[10px]">{statsItem.description}</p> }
        </div>
    </div>
  )
}

export default StatsItem