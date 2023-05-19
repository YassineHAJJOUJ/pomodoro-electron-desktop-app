import React from 'react'
import PageModal from '../../components/PageModal'
import StatisticsCard from './statisticsCard'
import StatisticsCardHeader from './statisticsCard/header'
import StatisticsCardBody from './statisticsCard/body'
import SelectField from '../../components/ui/select/selectField'
import Stats from './stats'
import { Line, Doughnut } from 'react-chartjs-2'
import { 
  Chart as ChartJS, 
  LineElement, 
  CategoryScale, 
  LinearScale, 
  PointElement,
  Tooltip,
  Legend,
  ArcElement,  } from 'chart.js'






const doneTasksList = [
  { title: "Meditation and going to the gym Meditation and going to the gym Meditation and going to the gym", totalPomodoros: 12, totalPomodorosIn: 12, timeSpentBySecs: 4560, tag: "Personal", tagColor: "accent-purple-500" },
  { title: "Creating a landing page for my new website", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 4060, tag: "Work", tagColor: "accent-pink-500" },
  { title: "Answering emails of clients", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 5060, tag: "Work", tagColor: "accent-pink-500" },
  { title: "Learn the new features of next.js 3x", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 1560, tag: "Study", tagColor: "accent-blue-500" },
  { title: "Do some chores", totalPomodoros: 4, totalPomodorosIn: 4, timeSpentBySecs: 8860, tag: "Personal", tagColor: "accent-purple-500" },
  { title: "Go to the barber", totalPomodoros: 10, totalPomodorosIn: 10, timeSpentBySecs: 9560, tag: "Personal", tagColor: "accent-purple-500" },
  { title: "Practice the SQL course", totalPomodoros: 2, totalPomodorosIn: 2, timeSpentBySecs: 7560, tag: "Study", tagColor: "accent-blue-500" },
  { title: "Prepare for the IELTS TEST", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 6560, tag: "Study", tagColor: "accent-blue-500" },
  { title: "Duolingo Daily test", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 2260, tag: "Study", tagColor: "accent-blue-500" },
  { title: "Finish coding my blog", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 4000, tag: "Work", tagColor: "accent-pink-500" },
  { title: "Watch the scientific podcast about circadian rhythm", totalPomodoros: 2, totalPomodorosIn: 12, timeSpentBySecs: 5500, tag: "Personal", tagColor: "accent-purple-500" },
]

// Chart.js
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  ArcElement
)


ChartJS.defaults.color = '#D7D5F5';
ChartJS.defaults.borderColor = '#202041';

const Statistics: React.FC<any> = () => {

  const productivityData = {
    labels: [
      'Mon', 
      'Tue', 
      'Wed', 
      'Thu',
      'Fri',
      'Sat',
      'Sun'
    ],
    datasets: [
      {
        label: 'Pomodoros of the Week',
        data: [3,5,8,12,7,8,0],
        backgroundColor: '#FC2E7E',
        borderColor: '#FC2E7E',
        pointBorderColor: '#131132',
        tension: 0.4
      }
    ]
  }

  const productivityOptions = {
    plugins: {
    },
    /* scales: {
      y: {
        min: 0,
        max: 14
      }
    } */
  }

  const accomplishmentsData = {
    labels: ['Work', 'Personal', 'Study'],
    datasets: [
      {
        label: '%',
        data: [56,36,44],
        backgroundColor: [
          '#FC2E7E',
          '#9361F8',
          '#52A9E1'
        ],
        borderWidth: 0,
      }
    ]
  }

  const accomplishmentsOptions = {
    plugins: {
    }
  }

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
          <Line height={170} data={productivityData} options={productivityOptions} />
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
          <div className="h-6"></div>
          <Doughnut data={accomplishmentsData} options={accomplishmentsOptions}  />
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
              <div 
                className={`${task.totalPomodoros>=task.totalPomodorosIn? "flex relative border rounded mb-3 px-3 py-3 bg-gradient-to-t from-primary-500 to-[rgb(11,175,8,0.1)] border-green-400" : "flex border rounded mb-3 px-3 py-3 border-primary-400"}`} 
                key={index}>
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
                { task.totalPomodoros>=task.totalPomodorosIn && <div className="absolute text-white font-bold text-[10px] left-[-1px] -top-[1px] border-t border-l border-r border-green-500 flex items-center bg-primary-500 h-4 px-1 rounded ">Completed</div>}
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