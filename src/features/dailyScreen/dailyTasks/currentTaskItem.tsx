import React from 'react'
import { tagType, todayTaskType } from '../dailyScreenSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { secondsToHourMinutesFormatter } from '../../../utils/secondsToHourMinutesFormatter'

type currentTaskItemProps = {
  task: todayTaskType,
  key: Number
}

const CurrentTaskItem: React.FC<currentTaskItemProps> = ({task, key}) => {

  const totalTimeSpent = useSelector((state: RootState) => state.dailyScreen.timer.timerSequence.reduce((total,seq) => seq.taskId ===task.id ? total + seq.durationBySec : total , 0) )
  const pomodoroTimerBySec = useSelector((state: RootState) => state.dailyScreen.settings.timer.pomodoroTimerBySec)
  const tags = useSelector((state: RootState) => state.dailyScreen.tags.list)

  const findItemById = (listOftags: tagType[], tagId: number) => listOftags.findIndex((tag: tagType) => tag.id === tagId )

  console.log(findItemById(tags, task.tag))
  console.log((task.estimatedPomodoros * pomodoroTimerBySec) - totalTimeSpent)

  console.log(`total spent time in the current task ${totalTimeSpent}`)

  return (
    <div className="relative w-full pb-3 mb-3 flex border-2 rounded border-accent-pink-500 bg-gradient-to-b from-primary-400 to-primary-500 pl-3 pt-3">
        <div className="mr-4 my-auto flex-grow items-center cursor-pointer">
            <div className="inline text-white font-medium">{task.task}</div>
            <div className="inline rounded text-[12px] px-1 py-[0px] ml-1 text-accent-pink-500 border-[1px] border-accent-pink-500" style={{borderColor: tags[findItemById(tags, task.tag)].color.toString(), color: tags[findItemById(tags, task.tag)].color.toString() }}>{tags[findItemById(tags, task.tag)].tag}</div>
        </div>
        <div className="mr-4 flex flex-col items-center justify-center">
            <h4 className=" text-[12px]">{`${totalTimeSpent/pomodoroTimerBySec === 0? (totalTimeSpent/pomodoroTimerBySec).toFixed(0) : (totalTimeSpent/pomodoroTimerBySec).toFixed(1)}/${task.estimatedPomodoros}`}</h4>
            <span className=" text-[12px]">{secondsToHourMinutesFormatter((task.estimatedPomodoros * pomodoroTimerBySec) - totalTimeSpent)}</span>
        </div>
        <div className="absolute bg-accent-pink-500 text-white font-bold text-[10px] left-2 -top-2 px-1 rounded ">Current task</div>
    </div>
  )
}

export default CurrentTaskItem