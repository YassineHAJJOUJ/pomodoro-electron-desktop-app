import React from 'react'
import { statsItemType } from './statsItem.type'
import StatsItem from './item'

type statsProps = {
  statsItems: statsItemType[],
}


const Stats: React.FC<statsProps> = ({statsItems}) => {
  return (
    <div className="flex w-auto space-x-4">
      { statsItems? statsItems.map((item, index) => <StatsItem index={index} statsItem={item} key={index} /> ) : null}
    </div>
  )
}

export default Stats