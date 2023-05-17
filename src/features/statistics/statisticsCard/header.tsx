import React from 'react'

type statisticsCardHeader = {
    title: String,
    children?: JSX.Element | JSX.Element[] | React.ReactElement | React.ReactElement[]
}

const StatisticsCardHeader: React.FC<statisticsCardHeader> = ({title, children}) => {
  return (
    <div className="flex mx-6 mb-6 items-center w-auto ">
        <div className="flex justify-start items-center text-white text-xl ">{title}</div>
        <div className="flex-grow flex justify-end items-center ">
            {children}
        </div>
    </div>
  )
}

export default StatisticsCardHeader