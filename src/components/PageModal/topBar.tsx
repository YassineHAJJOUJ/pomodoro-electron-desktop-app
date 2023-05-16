import React from 'react'
import { useDispatch } from 'react-redux'
import { closeSettings } from '../../features/settings/settingsSlice'
import { closeStatistics } from '../../features/statistics/statisticsSlice'
import arrowBackIcon from '../../assets/icons/arrow_back_icon.svg'

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
        <div className="flex flex-row w-screen p-6">
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
            </div>
            
        </div>
    )
}

export default TopBar