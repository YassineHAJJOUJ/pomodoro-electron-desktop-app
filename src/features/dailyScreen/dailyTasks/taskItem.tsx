import React from 'react'
import playIcon from '../../../assets/icons/play-icon.svg'

const TaskItem = () => {
  return (
    <div className="w-full py-3 mb-3 flex border-b-2 rounded border-primary-400 flex hover:bg-gradient-to-r hover:from-primary-500 hover:via-primary-400 hover:to-primary-500">
        <div className="mr-4 flex-grow items-center cursor-pointer">
            <div className="inline">Creating the landing page of my new product </div>
            <div className="inline rounded text-[12px] px-1 py-[0px] ml-1 text-accent-pink-500 border-[1px] border-accent-pink-500">Work</div>
        </div>
        <div className="mr-4 flex flex-col items-center justify-center">
            <h4 className=" text-[12px]">2/4</h4>
            <span className=" text-[12px]">2h40</span>
        </div>
        <div className="flex items-center">
            <button className=" w-12 h-12 bg-gradient-to-b from-accent-pink-500 to-accent-pink-700 hover:from-accent-prink-700 hover:to-accent-pink-500 shadow-xl text-white flex items-center justify-center rounded-full">
                <img src={playIcon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default TaskItem