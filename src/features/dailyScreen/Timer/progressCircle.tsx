import React from 'react'
import {CircularProgressbar, CircularProgressbarWithChildren} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = () => {
  return (
    <div className="relative mx-4">
      
      <CircularProgressbarWithChildren
        value={30} 
        strokeWidth={3.1} 
        circleRatio={0.7}
        className={"progress-circle"}
        counterClockwise={false}
        styles={{
          path: {
            // Path color
            stroke: '#FC2E7E',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            // Customize transition animation
            transition: 'stroke-dashoffset 0.5s ease 0s',
            // Rotate the path
            transform: 'rotate(0.65turn)',
            transformOrigin: 'center center',
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: '#FFF',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            // Rotate the trail
            transform: 'rotate(0.65turn)',
            transformOrigin: 'center center',
          },
          text: {
            // Text color
            fill: '#FFF',
            // Text size
            fontSize: '16px',
            marginTop: '-20px',
            backgroundColor: 'green'
          }

        }}>
      </CircularProgressbarWithChildren>
      <div className="absolute bg-transparent bottom-[48px] z-40 w-full flex flex-col justify-center items-center">
        <h1 className="text-[56px]">21:00</h1>
        <div className="bg-transparent text-accent-grey text-[14px] text-center">Creating the landing page of...</div>
        <button className="mt-12 bg-gradient-to-b from-accent-pink-500 to-accent-pink-700 hover:from-accent-pink-700 hover:to-accent-pink-500 rounded-[4px] w-[148px] h-12 text-[18px] font-medium">Start</button>
      </div>
    </div>
  )
}

export default ProgressCircle