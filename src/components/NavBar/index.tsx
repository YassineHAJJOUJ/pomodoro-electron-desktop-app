import React from 'react'

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row w-screen p-6">
        <div className="w-6 h-6 mr-6"><img src="../assets/icons/logo.svg" alt="Logo ePomodoro" className="w-6 h-6" /></div>
        <div className=" h-6 text-white font-poppinsMedium">ePomodoro</div>
        <div className="h-6 flex flex-row flex-grow justify-end">
          <button className="mr-6 cursor-pointer"><img src="../assets/icons/stats_icon.svg" alt="Statistics" className="w-6 h-6" /></button>
          <button className="cursor-pointer"><img src="../assets/icons/settings_icon.svg" alt="Settings" className="w-6 h-6" /></button>
        </div>
      </div>
    </>
  )
}

export default NavBar