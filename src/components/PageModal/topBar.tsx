import React from 'react'
import { useDispatch } from 'react-redux'
import { closeSettings } from '../../features/settings/settingsSlice'
import { closeStatistics } from '../../features/statistics/statisticsSlice'
import arrowBackIcon from '../../assets/icons/arrow_back_icon.svg'
import SelectField from '../ui/select/selectField'
import filterIcon from '../../assets/icons/filter-icon.svg'

const TopBar = ({title, page}: { title: String, page: String}) => {


    const dispatch = useDispatch()

    const onBackBtnClickHandler = () => {
        console.log('onBackBtnClickHandler')
        console.log(page)
        if(page=="Settings"){
            console.log('tt')
            dispatch(closeSettings())
        }
        if(page=="Statistics"){
            console.log('tt')
            dispatch(closeStatistics())
        }
    }

    console.log('title is '+title)


    return (
        <div className="flex flex-row w-screen p-6 items-center">
            {/* Back icon */}
            <div className="w-6 h-6 mr-4">
                <button className="w-6 h-6" onClick={onBackBtnClickHandler}>
                    <img src={arrowBackIcon} alt="" />
                </button>
            </div>
            {/* Page title */}
            <div className="flex text-white text-lg">
                {title}
            </div>
            {/* Right elements */}
            <div className="flex-grow">
                {
                    page==="Statistics" && (
                        <div className="flex justify-end items-center">
                            <img src={filterIcon} alt="Filter icon" className="w-5 h-5 mr-3" />
                            <SelectField dark={true} />
                        </div>
                    ) 
                }
            </div>
            
        </div>
    )
}

export default TopBar