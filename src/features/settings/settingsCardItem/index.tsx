import React from 'react'
import ToggleSwitch from '../../../components/ui/switch/toggleSwitch'
import SelectField from '../../../components/ui/select/selectField'


type settingsCardItemProps = {
    description: String,
    children: JSX.Element | JSX.Element[] | React.ReactChild | React.ReactChild[];
}
const SettingCardItem: React.FC<settingsCardItemProps> = ({description, children}) => {
    return (
        <div className="flex my-3">
            <div className="flex-grow text-[14px] flex items-center">
                <p className="max-w-[200px]">{description}</p>
            </div>
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default SettingCardItem