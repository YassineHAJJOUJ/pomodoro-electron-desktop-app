import React from 'react'
import addIcon from '../../../assets/icons/add-icon.svg'
import TaskItem from './taskItem'
import CurrentTaskItem from './currentTaskItem'
import CompletedTaskItem from './completedTaskItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { openAddTaskModal } from '../dailyScreenSlice'

const DailyTasks = () => {

  const dispatch = useDispatch()
  const todayTasks = useSelector((state: RootState) => state.dailyScreen.todayTasks.list)
  const timer = useSelector((state: RootState) => state.dailyScreen.timer)
  const timerSequence = useSelector((state: RootState) => state.dailyScreen.timer.timerSequence)
  const settings = useSelector((state: RootState) => state.dailyScreen.settings)
  
  

  console.log(todayTasks)

  return (
    <div className="mx-6 mb-12">
        <h1 className="font-medium text-[24px] mb-4">Tasks</h1>
        <div>
            {
              todayTasks.map((task: any) => 
                task.id === timer.currentTaskId? (
                  <CurrentTaskItem task={task} key={task.id} />
                )
                : (
                  (timerSequence.reduce((total, seq) => seq.taskId === task.id? total + seq.durationBySec : total, 0 )/settings.timer.pomodoroTimerBySec) >= task.estimatedPomodoros ? (
                    <CompletedTaskItem task={task} key={task.id} />
                  ) : (
                    <TaskItem key={task.id} task={task}  />
                  )
                )
              )
            }
            <div>
                <button 
                  className="border-2 border-dashed border-primary-400 text-accent-grey 
                  w-full h-20 flex justify-center items-center rounded hover:bg-primary-400 hover:border-accent-grey"
                  onClick={() => dispatch(openAddTaskModal())}
                  >
                    <img src={addIcon} alt="" className="mr-2 w-5 text-white " />
                    Add new task
                </button>
            </div>
        </div>
    </div>
  )
}

export default DailyTasks