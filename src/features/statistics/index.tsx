import React from 'react'
import PageModal from '../../components/PageModal'
import StatisticsCard from './statisticsCard'
import StatisticsCardHeader from './statisticsCard/header'
import StatisticsCardBody from './statisticsCard/body'
import SelectField from '../../components/ui/select/selectField'
import Stats from './stats'
import { Chart, Line } from 'react-chartjs-2';

const doneTasksList = [
  { title: "Meditation and going to the gym", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 4560, tag: "Personal", tagColor: "accent-purple-500" },
  { title: "Creating a landing page for my new website", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 4060, tag: "Work", tagColor: "accent-pink-500" },
  { title: "Answering emails of clients", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 5060, tag: "Work", tagColor: "accent-pink-500" },
  { title: "Learn the new features of next.js 3x", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 1560, tag: "Study", tagColor: "accent-blue-500" },
  { title: "Do some chores", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 8860, tag: "Personal", tagColor: "accent-purple-500" },
  { title: "Go to the barber", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 9560, tag: "Personal", tagColor: "accent-purple-500" },
  { title: "Practice the SQL course", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 7560, tag: "Study", tagColor: "accent-blue-500" },
  { title: "Prepare for the IELTS TEST", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 6560, tag: "Study", tagColor: "accent-blue-500" },
  { title: "Duolingo Daily test", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 2260, tag: "Study", tagColor: "accent-blue-500" },
  { title: "Finish coding my blog", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 4000, tag: "Work", tagColor: "accent-pink-500" },
  { title: "Watch the scientific podcast about circadian rhythm", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 5500, tag: "Personal", tagColor: "accent-purple-500" },
]

// Chart.js
const options = {
  responsive: true,
  scales: {
    x: {
      type: 'linear', // Specify the scale type as 'linear' for x-axis
      beginAtZero: true,
    },
    y: {
      type: 'linear', // Specify the scale type as 'linear' for y-axis
      beginAtZero: true,
    },
  },
};
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Example Dataset',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(75,192,192,0.4)',
    },
  ],
};
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Example Dataset',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};


const Statistics: React.FC<any> = () => {
  return (
    <PageModal page={"statistics"} >
      <div className="h-12"></div>
      <StatisticsCard>
        <StatisticsCardHeader title="Overview"></StatisticsCardHeader>
        <StatisticsCardBody>
          <Stats statsItems={[
            {
              title: "Total pomos",
              result: "377",
              description: "(188h45)"
            },
            {
              title: "Daily Avg",
              result: "12p",
              description: "(6h22)"
            },
            {
              title: "Days On",
              result: "48",
              description: "(82%)"
            },
          ]} />
        </StatisticsCardBody>
      </StatisticsCard>
      <StatisticsCard>
        <StatisticsCardHeader title="Productivity"></StatisticsCardHeader>
        <StatisticsCardBody>
          <h1>something</h1>
        </StatisticsCardBody>
      </StatisticsCard>
      <StatisticsCard>
        <StatisticsCardHeader title="Accomplishments"></StatisticsCardHeader>
        <StatisticsCardBody>
          <Stats statsItems={[
            { title: "Total tasks", result: "356" },
            { title: "Done tasks", result: "254" },
            { title: "Overdue", result: "102" },
          ]} />
          <Line data={chartData} options={options} />
        </StatisticsCardBody>
      </StatisticsCard>
      <StatisticsCard>
        <StatisticsCardHeader title="Tasks">
          <SelectField />
          <div className="w-3"></div>
          <SelectField />
        </StatisticsCardHeader>
        <StatisticsCardBody>
          <>
          { 
            doneTasksList.map((task, index) => (
              <div className="flex border-b mb-4 pb-3 border-primary-400" key={index}>
                <div className="flex-grow flex items-center">
                  <h3 className=" text-accent-grey text-sm">
                    {task.title}
                    <span  className={` inline mx-1 border text-${task.tagColor} border-${task.tagColor} text-sm px-1 rounded-sm `} >
                    {task.tag}
                    </span>
                  </h3>
                </div>
                <div className="w-16 flex flex-col items-end justify-center">
                  <h4>{task.totalPomodoros}/{task.totalPomodorosIn}</h4>
                  <span>{(task.timeSpentBySecs/60/60).toFixed(0)}h{((task.timeSpentBySecs%3600)/60).toFixed(0)}</span>
                </div>
              </div>
            ))
          }
          </>
        </StatisticsCardBody>
      </StatisticsCard>
    </PageModal>
  )
}

export default Statistics