import React from 'react'


const CurrentTaskItem = () => {
  return (
    <div className="relative w-full pb-3 mb-3 flex border-2 rounded border-accent-pink-500 bg-gradient-to-b from-primary-400 to-primary-500 pl-3 pt-3">
        <div className="mr-4 flex-grow items-center cursor-pointer">
            <div className="inline text-white font-medium">Creating the landing page of my new product </div>
            <div className="inline rounded text-[12px] px-1 py-[0px] ml-1 text-accent-pink-500 border-[1px] border-accent-pink-500">Work</div>
        </div>
        <div className="mr-4 flex flex-col items-center justify-center">
            <h4 className=" text-[12px]">2/4</h4>
            <span className=" text-[12px]">2h40</span>
        </div>
        <div className="absolute bg-accent-pink-500 text-white font-bold text-[10px] right-2 -top-2 px-1 rounded ">Current task</div>
    </div>
  )
}

export default CurrentTaskItem