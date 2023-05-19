import React, { useEffect, useState } from 'react'
import '../../../../customscrollbar.css'
import SearchIcon from '../../../../assets/icons/search-icon.svg'

type tagSectionProps = {
    tagSectionToggleHandler: () => void
    tagSectionIsOpen: Boolean
}

const TagSection: React.FC<tagSectionProps> = ({tagSectionToggleHandler, tagSectionIsOpen}) => {

    const [isOpen, setIsOpen] = useState<Boolean>(false)

    useEffect(() => {
        setIsOpen(tagSectionIsOpen)
    }, [tagSectionIsOpen])
    

  return (
    <div className={`relative mt-3 transition-all duration-700 ease-in ${isOpen? 'opacity-1' : 'opacity-0' }`} >
        <div className=" px-3 py-1 h-8 absolute -top-[31px] bg-primary-500 z-50 w-24 flex justify-center text-base border-l border-r border-t border-primary-400 rounded-t">Add tag</div>
        <div className="border rounded-tr rounded-b border-primary-400 z-40 mt-8">
            <div className="w-auto mt-3 mx-3 relative">
                <img src={SearchIcon} className="absolute left-0 top-3" />
                <input 
                    type="text" 
                    defaultValue={""} 
                    placeholder="Find or create a tag..." 
                    className="w-full bg-primary-500 border-t-0 border-x-0 border-b-[2px] border-primary-400 focus:ring-0 focus:border-accent-grey
                        pl-8 bg-ima " 
                    name="search-tag" />
            </div>
            <div className="max-h-40 overflow-x-auto custom-scrollbar m-3">
                <div className="flex px-2 py-1 justify-start items-center cursor-pointer hover:bg-primary-400">
                    <div className="mr-4 w-3 h-3 rounded-full bg-accent-pink-500"></div>
                    <span>Work</span>
                </div>
                <div className="flex px-2 py-1 justify-start items-center cursor-pointer hover:bg-primary-400">
                    <div className="mr-4 w-3 h-3 rounded-full bg-accent-blue-500"></div>
                    <span>Study</span>
                </div>
                <div className="flex px-2 py-1 justify-start items-center cursor-pointer hover:bg-primary-400">
                    <div className="mr-4 w-3 h-3 rounded-full bg-accent-purple-500"></div>
                    <span>Personal</span>
                </div>
                <div className="flex px-2 py-1 justify-start items-center cursor-pointer hover:bg-primary-400">
                    <div className="mr-4 w-3 h-3 rounded-full bg-accent-grey"></div>
                    <span>Chores</span>
                    
                </div>
                <div className="flex px-2 py-1 justify-start items-center cursor-pointer hover:bg-primary-400">
                    <div className="mr-4 w-3 h-3 rounded-full bg-accent-grey"></div>
                    <span>Chores</span>
                    
                </div>
                <div className="flex px-2 py-1 justify-start items-center cursor-pointer hover:bg-primary-400">
                    <div className="mr-4 w-3 h-3 rounded-full bg-accent-grey"></div>
                    <span>Chores</span>
                    
                </div>
                <div className="flex px-2 py-1 justify-start items-center cursor-pointer hover:bg-primary-400">
                    <div className="mr-4 w-3 h-3 rounded-full bg-accent-grey"></div>
                    <span>Chores</span>
                </div>
            </div>
            <div className="flex justify-end mx-3 my-3">
                <button className=" bg-primary-500 hover:bg-primary-400 inline-block border-primary-400 border text-accent-grey inline-block rounded text-sm px-3 py-2 mr-4 w-20 shadow-md" onClick={tagSectionToggleHandler}>Cancel</button>
                <button className=" bg-accent-purple-500 rounded text-lg px-3 py-1 w-20 border border-primary-500 hover:border-accent-purple-500 shadow-md">Select</button>
            </div>
        </div>
        
    </div>
  )
}

export default TagSection