import React from 'react'
import addIcon from '../../../assets/icons/add-icon.svg'
import TaskItem from './taskItem'
import CurrentTaskItem from './currentTaskItem'

const DailyTasks = () => {
  return (
    <div className="mx-6 mb-12">
        <h1 className="font-medium text-[24px] mb-4">Tasks</h1>
        <div>
            <TaskItem />
            <TaskItem />
            <CurrentTaskItem />
            <TaskItem />
            <TaskItem />
            
            <div>
                <button className="border-2 border-dashed border-primary-400 text-accent-grey w-full h-20 flex justify-center items-center rounded hover:bg-primary-400 hover:border-accent-grey">
                    <img src={addIcon} alt="" className="mr-2 w-5 text-white " />
                    Add new task
                </button>
            </div>
        </div>
    </div>
  )
}

export default DailyTasks