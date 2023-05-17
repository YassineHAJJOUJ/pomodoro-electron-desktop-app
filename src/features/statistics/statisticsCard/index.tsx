import React from 'react'

type statisticsCardProps = {
    children: JSX.Element | JSX.Element[] | React.ReactElement[] | React.ReactElement 
}

const StatisticsCard: React.FC<statisticsCardProps> = ({children}) => {
  return (
    <div className="relative mb-12">
        {children}
    </div>
  )
}

export default StatisticsCard