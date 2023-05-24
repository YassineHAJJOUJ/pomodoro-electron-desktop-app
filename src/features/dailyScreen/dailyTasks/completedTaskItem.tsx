import React from 'react'
import playIcon from '../../../assets/icons/play-icon.svg'
import { tagType, todayTaskType } from '../dailyScreenSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

type completedTaskItemProps = {
    task: todayTaskType,
    key: Number
}

const CompletedTaskItem: React.FC<completedTaskItemProps> = ({key, task}) => {

    const totalTimeSpent = useSelector((state: RootState) => state.dailyScreen.timer.timerSequence.reduce((total,seq) => seq.taskId ===task.id ? total + seq.durationBySec : total , 0) )
    const pomodoroTimerBySec = useSelector((state: RootState) => state.dailyScreen.settings.timer.pomodoroTimerBySec)
    const tags = useSelector((state: RootState) => state.dailyScreen.tags.list)

    const findItemById = (listOftags: tagType[], tagId: number) => listOftags.findIndex((tag: tagType) => tag.id === tagId )

    console.log(findItemById(tags, task.tag))

    console.log('total time spent', totalTimeSpent)
    return (
        <div className="relative w-full pb-3 mb-3 flex border-2 rounded border-green-500 bg-gradient-to-b from-primary-400 to-primary-500 pl-3 pt-3 pr-2">
            <div className="mr-4 my-auto flex-grow items-center cursor-pointer">
                <div className="inline text-green-200 line-through">{task.task}</div>
                <div className="inline rounded text-[12px] px-1 py-[0px] ml-1 text-green-500 border-[1px] border-green-500">{tags[findItemById(tags, task.tag)].tag}</div>
            </div>
            <div className="mr-4 flex flex-col items-center justify-center">
                <h4 className=" text-[12px] text-green-500">{`${(totalTimeSpent/pomodoroTimerBySec).toFixed(0)}/${task.estimatedPomodoros}`}</h4>
            </div>
            <div className="flex items-center">
                <button className=" w-12 h-12 bg-gradient-to-b from-green-500 to-green-700 hover:from-accent-prink-700 hover:to-green-500 shadow-xl text-white flex items-center justify-center rounded-full">
                    <img src={playIcon} alt="" />
                </button>
            </div>
            <div className="absolute bg-green-500 text-white font-bold text-[10px] left-2 -top-3 px-1 rounded ">Completed</div>
        </div>
    )
}

export default CompletedTaskItem