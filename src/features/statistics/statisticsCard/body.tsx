import React from 'react'

type statisticsCardBody = {
    children: React.ReactElement | React.ReactElement[]
}

const StatisticsCardBody: React.FC<statisticsCardBody> = ({children}) => {
  return (
    <div className="mx-6">
        {children}
    </div>
  )
}

export default StatisticsCardBody