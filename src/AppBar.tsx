import React, { useState } from 'react';

import Icon from './assets/icons/logo.svg';

function AppBar() {
  const [isMaximize, setMaximize] = useState(false);

  const handleToggle = () => {
    if (isMaximize) {
      setMaximize(false);
    } else {
      setMaximize(true);
    }
    window.Main.Maximize();
  };

  return (
    <>
      <div className="py-0.5 flex justify-between draggable">
        <div className="inline-flex items-center">
          <img className="h-4 ml-2 mr-2" src={Icon} alt="Icon of Electron" />
          <p className="text-xs md:pt-1 md:-ml-1 lg:-ml-2">ePomodoro</p>
        </div>
        <div className="inline-flex -mt-1">
          <button onClick={window.Main.Minimize} className="undraggable px-4 lg:px-3 pt-1  hover:bg-primary-400">
            &#8211;
          </button>
          <button onClick={handleToggle} className="undraggable px-6 lg:px-5 pt-1 hover:bg-primary-400">
            {isMaximize ? '\u2752' : '⃞'}
          </button>
          <button onClick={window.Main.Close} className="undraggable px-4 pt-1 hover:bg-red-500 hover:text-white">
            &#10005;
          </button>
        </div>
      </div>
    </>
  );
}

export default AppBar;
