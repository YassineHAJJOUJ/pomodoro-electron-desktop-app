import React from 'react'

type selectFieldProps = {
  dark?: Boolean
}

const SelectField: React.FC<selectFieldProps> = ({dark=false}) => {
  return (
    <select 
      className={`form-select 
      ${dark? 'bg-primary-500 text-white font-medium' : 'bg-primary-400 text-accent-grey' } 
       text-sm
      pl-2 pr-8  rounded h-9 border-none border-transparent
      focus:border-transparent focus:ring-0`}>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
    </select>
  )
}

export default SelectField