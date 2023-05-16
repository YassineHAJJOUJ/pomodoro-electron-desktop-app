import React from 'react'

const ToggleSwitch = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        value="" 
        className="sr-only peer" 
        defaultChecked />
      <div 
        className=" w-16 h-8 bg-primary-400 rounded-full peer 
        peer-checked:after:translate-x-full after:content-[''] after:absolute 
        after:top-[2px] after:left-[2px] after:bg-white after:rounded-full 
        after:h-[28px] after:w-[28px] after:transition-all 
        peer-checked:bg-accent-pink-500 peer-checked:after:bg-white
        peer-checked:after:ml-[4px]">
        </div>
    </label>
  )
}

export default ToggleSwitch