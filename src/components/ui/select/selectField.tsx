import React from 'react'

const SelectField = () => {
  return (
    <select 
      className="form-select bg-primary-400 text-accent-grey text-sm
      pl-2 pr-8 rounded h-9 border-none border-transparent
      focus:border-transparent focus:ring-0">
        <option className=" border-transparent">Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
    </select>
  )
}

export default SelectField