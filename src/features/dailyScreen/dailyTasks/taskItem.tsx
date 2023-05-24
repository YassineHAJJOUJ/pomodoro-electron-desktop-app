import React from 'react'
import playIcon from '../../../assets/icons/play-icon.svg'
import { todayTaskType, tagType, openEditTaskModal } from '../dailyScreenSlice'
import { secondsToHourMinutesFormatter } from '../../../utils/secondsToHourMinutesFormatter'
import { RootState } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'

type taskItemProps = {
    task: todayTaskType,
    key: Number
}

const TaskItem: React.FC<taskItemProps> = ({key, task}) => {


    const totalTimeSpent = useSelector((state: RootState) => state.dailyScreen.timer.timerSequence.reduce((total,seq) => seq.taskId ===task.id ? total + seq.durationBySec : total , 0) )
    const pomodoroTimerBySec = useSelector((state: RootState) => state.dailyScreen.settings.timer.pomodoroTimerBySec)
    const tags = useSelector((state: RootState) => state.dailyScreen.tags.list)

    const findItemById = (listOftags: tagType[], tagId: number) => listOftags.findIndex((tag: tagType) => tag.id === tagId )

    console.log(findItemById(tags, task.tag))
    console.log((task.estimatedPomodoros * pomodoroTimerBySec) - totalTimeSpent)

    const dispatch = useDispatch()

    const onTaskClickedHandler = () => {

        const content = {
            task: task.task,
            tag: task.tag? task.tag : null,
            estimatedPomodoros: task.estimatedPomodoros
        }

        dispatch(openEditTaskModal(content))
    }

    return (
        <div className="w-full py-3 mb-3 flex border-b-2 rounded border-primary-400 flex hover:bg-gradient-to-r hover:from-primary-500 hover:via-primary-400 hover:to-primary-500 pr-2">
            <div className="mr-4 my-auto flex-grow items-center cursor-pointer" onClick={onTaskClickedHandler}>
                <div className="inline">{task.task}</div>
                <div 
                    className="inline rounded text-[12px] px-1 py-[0px] ml-1 text-accent-pink-500 border-[1px]
                     border-accent-pink-500" 
                    style={{
                        borderColor: tags[findItemById(tags, task.tag)].color.toString(), 
                        color: tags[findItemById(tags, task.tag)].color.toString() 
                    }}>
                        {tags[findItemById(tags, task.tag)].tag}
                    </div>
            </div>
            <div className="mr-4 flex flex-col items-center justify-center">
                <h4 className=" text-[12px]">{`${totalTimeSpent/pomodoroTimerBySec === 0? (totalTimeSpent/pomodoroTimerBySec).toFixed(0) : (totalTimeSpent/pomodoroTimerBySec).toFixed(1)}/${task.estimatedPomodoros}`}</h4>
                <span className=" text-[12px]">{secondsToHourMinutesFormatter((task.estimatedPomodoros * pomodoroTimerBySec) - totalTimeSpent)}</span>
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