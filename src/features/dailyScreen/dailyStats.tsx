import React from 'react'

const DailyStats = () => {
  return (
    <div className="mx-6 mb-9">
        <div className="flex justify-between mb-3">
            <div className="">
                <span>Start at</span>
                <h3>10.10 AM</h3>
            </div>
            <div className="text-right">
                <span>Finish at</span>
                <h3>19:30 PM</h3>
            </div>
        </div>
        <div className="relative h-12">
            <div className="h-1 w-full bg-primary-400 absolute left-0 top-1"></div>
            <div className="w-[2px] h-3 bg-primary-400 absolute right-0 top-0"></div>
            <div className=" text-accent-grey absolute bg-transparent right-0 top-5">7h30</div>
            <div className="w-[2px] h-3 bg-accent-pink-500 absolute left-0 top-0"></div>
            <div className=" w-[36px] h-1 bg-accent-pink-500 absolute left-0 top-1"></div>
            <div className="w-[2px] h-3 bg-accent-pink-500 absolute left-[36px] top-1"></div>

            <div className=" text-white bg-accent-pink-500 absolute flex top-5 left-[32px] rounded-[4px] shadow-lg px-1 items-center">
                <h4 className=" bg-transparent font-bold mr-1">2/12</h4>
                <span className=" bg-transparent text-[12px]">2h15</span>
            </div>
        </div>
    </div>
  )
}

export default DailyStats