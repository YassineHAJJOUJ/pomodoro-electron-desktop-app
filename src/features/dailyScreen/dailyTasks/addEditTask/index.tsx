import React, { useEffect, useState } from 'react'
import tagIcon from '../../../../assets/icons/tag-icon.svg'
import TagSection from './tagSection'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import { addEditModalType, closeAddEditTaskModal } from '../../dailyScreenSlice'


const AddEditTaskModal: React.FC<any> = () => {

    const [tagSectionIsOpen, setTagSectionIsOpen] = useState<Boolean>(false)

    const tagSectionToggleHandler = () => setTagSectionIsOpen(!tagSectionIsOpen)

    const addEditTaskModalContent = useSelector((state: RootState) => state.dailyScreen.addEditModal.content)
    const dispatch = useDispatch()


    return (
        <div className="fixed w-screen h-screen bg-accent-purple-500/30 backdrop-blur-sm z-50 flex justify-center items-center">
            <div className="relative bg-primary-500 w-full m-6 pt-2 rounded">
                <div className="mx-6 w-auto my-6">
                    <div className="">
                        <input type="text" placeholder="Write Your Task here..." defaultValue={`${addEditTaskModalContent.task}`} name="task" className=" w-full text-white text-lg font-medium bg-primary-500 border-l-0 border-r-0 border-t-0 border-b-[2px] border-b-primary-400 focus:ring-0 focus:border-b-accent-grey pl-0" />
                    </div>
                    <div className="mt-4 mb-6">
                        {
                            tagSectionIsOpen? (
                                <>
                                    <div className="h-1"></div>
                                    <TagSection 
                                        tagSectionToggleHandler={tagSectionToggleHandler}
                                        tagSectionIsOpen={tagSectionIsOpen}
                                         />
                                </>
                            ) : (
                                
                                <div className="flex justify-end">
                                    <button 
                                        className="rounded bg-primary-400 px-4 py-1 flex items-center 
                                            shadow inline-block border border-primary-500 
                                            hover:border-primary-400"
                                            onClick={tagSectionToggleHandler}>
                                            
                                        <img src={tagIcon} alt="Tag Icon" className="mr-2" />
                                        Add tag
                                    </button>
                                </div>
                            )
                        }
                    </div>
                    <div className="">
                        <div className="mb-2">Estimated Pomodoros</div>
                        <div className="flex">
                            <div className="mr-2">
                                <input 
                                    type="number" 
                                    defaultValue={addEditTaskModalContent.estimatedPomodoros? addEditTaskModalContent.estimatedPomodoros : 0} 
                                    className="bg-primary-400 text-accent-grey 
                                                border-transparent rounded w-full h-9
                                                focus:ring-0 focus:border-transparent" />
                            </div>
                            <div className="flex w-auto h-9">
                                {
                                    [1,2,4,6,8].map((item, index) => (
                                        <button 
                                            key={index}
                                            className="bg-primary-400 text-accent-grey shadow 
                                            border-transparent rounded w-8 h-9 flex justify-center items-center ml-2
                                            hover:bg-accent-grey hover:text-primary-500 hover:font-medium
                                            focus:ring-0 focus:border-transparent">{item}</button>
                                            ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex p-6">
                    <div className="flex flex-grow">
                        <button 
                            className="text-accent-pink-700 text-sm px-3 py-2 hover:bg-primary-400 rounded inline-block">
                                Delete
                        </button>
                    </div>
                    <div className="flex justify-end">
                        <button 
                            className=" bg-primary-500 hover:bg-primary-400 inline-block
                             border-primary-400 border text-accent-grey inline-block rounded text-sm px-3 py-2 mr-4 w-20 shadow-md"
                             onClick={() => dispatch(closeAddEditTaskModal()) }
                             >
                                Cancel
                        </button>
                        <button 
                            className=" bg-gradient-to-t from-accent-pink-700 to-accent-pink-500 rounded text-lg 
                            px-3 py-2 w-20 hover:from-accent-pink-500 hover:to-accent-pink-700 shadow-md"
                            >
                                Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEditTaskModal



/* 
1 - Create basic modal
2 - Add the form (task, number of estimated pomodoros, button add tag, button submit, cancel, delete )
3 - 
*/