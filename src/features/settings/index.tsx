import React from 'react'
import PageModal from '../../components/PageModal'
import SettingCard from './settingCard'
import timerIcon from '../../assets/icons/timer-icon.svg'
import notificationsIcon from '../../assets/icons/notifications-icon.svg'
import soundIcon from '../../assets/icons/sound-icon.svg'
import tasksIcon from '../../assets/icons/tasks-icon.svg'
import SettingCardItem from './settingsCardItem'
import SelectField from '../../components/ui/select/selectField'
import ToggleSwitch from '../../components/ui/switch/toggleSwitch'

const Settings = () => {

  return (
    <PageModal page={"settings"} >
      <SettingCard title="Timer" icon={timerIcon}>
        <div className="flex space-x-4 mb-5">
          <div className="flex-1">
            <p>Pomodoro</p>
            <input 
              type="number" 
              className="bg-primary-400 text-accent-grey 
              border-transparent rounded w-full h-9
              mt-2 focus:ring-0 focus:border-transparent" 
              defaultValue={25} />
          </div>
          <div className="flex-1">
            <p>Short break</p>
            <input 
              type="number" 
              className="bg-primary-400 text-accent-grey 
              border-transparent rounded w-full h-9
              mt-2 focus:ring-0 focus:border-transparent"  defaultValue={5} />
          </div>
          <div className="flex-1">
            <p>Long break</p>
            <input 
              type="number" 
              className="bg-primary-400 text-accent-grey 
              border-transparent rounded w-full h-9
              mt-2 focus:ring-0 focus:border-transparent"  defaultValue={30} />
          </div>
        </div>
        <SettingCardItem description="Auto start Pomodoros">
          <ToggleSwitch />
        </SettingCardItem>
        <SettingCardItem description="Auto start Breaks">
          <ToggleSwitch />
        </SettingCardItem>
      </SettingCard>
      <SettingCard title="Tasks" icon={tasksIcon}>
        <SettingCardItem description="Auto switch">
          <ToggleSwitch />
        </SettingCardItem>
      </SettingCard>
      <SettingCard title="Sound" icon={soundIcon}>
        <SettingCardItem description="Ticking sound">
          <ToggleSwitch />
        </SettingCardItem>
        <SettingCardItem description="Ticking sound start before">
          <SelectField />
        </SettingCardItem>
      </SettingCard>
      <SettingCard title="Notifications" icon={notificationsIcon}>
        <SettingCardItem description="Get notified before the end of the pomodoro">
          <ToggleSwitch />
        </SettingCardItem>
        <SettingCardItem description="Get notified before">
          <SelectField />
        </SettingCardItem>
      </SettingCard>
    </PageModal>
  )
}

export default Settings