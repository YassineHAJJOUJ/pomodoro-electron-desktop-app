import React, { useEffect, useState } from 'react';
import AppBar from './AppBar';
import NavBar from './components/NavBar'
import Settings from './features/settings';
import Statistics from './features/statistics';
import DailyScreen from './features/dailyScreen';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import AddEditTaskModal from './features/dailyScreen/dailyTasks/addEditTask';

function App() {
  console.log(window.ipcRenderer);

  const [isOpen, setOpen] = useState(false);
  const [isSent, setSent] = useState(false);
  const [fromMain, setFromMain] = useState<string | null>(null);

  const settingsIsOpen = useSelector((state: RootState) => state.settings.isOpen)
  const statsIsOpen = useSelector((state: RootState) => state.statistics.isOpen)
  const addEditTaskModalIsOpen = useSelector((state: RootState) => state.dailyScreen.addEditModal.open)


  const handleToggle = () => {
    if (isOpen) {
      setOpen(false);
      setSent(false);
    } else {
      setOpen(true);
      setFromMain(null);
    }
  };
  const sendMessageToElectron = () => {
    if (window.Main) {
      window.Main.sendMessage("Hello I'm from React World");
    } else {
      setFromMain('You are in a Browser, so no Electron functions are available');
    }
    setSent(true);
  };

  useEffect(() => {
    if (isSent && window.Main)
      window.Main.on('message', (message: string) => {
        setFromMain(message);
      });
  }, [fromMain, isSent]);

  return (
    <div className="flex flex-col">
      {window.Main && (
        <div className="flex-none">
          <AppBar />
        </div>
      )}
      { settingsIsOpen? <Settings /> : null }
      { statsIsOpen? <Statistics /> : null }
      <NavBar />

      <DailyScreen />
      {addEditTaskModalIsOpen && <AddEditTaskModal /> }
      
      <div className="flex-auto mx-6 hidden">
        <div className=" flex flex-col justify-center items-center h-full space-y-4">
          <button
            className="bg-yellow-400 py-2 px-4 rounded focus:outline-none shadow hover:bg-yellow-200"
            onClick={handleToggle}
          >
            Click Me
          </button>
          {isOpen && (
            <div className="flex flex-col space-y-4 items-center">
              <div className="flex space-x-3">
                <h1 className="text-xl text-gray-50">💝 Welcome 💝, now send a message to the Main 📩📩</h1>
                <button
                  onClick={sendMessageToElectron}
                  className=" bg-green-400 rounded px-4 py-0 focus:outline-none hover:bg-green-300"
                >
                  Send
                </button>
              </div>
              {isSent && (
                <div>
                  <h4 className=" text-green-500">Message sent!!</h4>
                </div>
              )}
              {fromMain && (
                <div>
                  {' '}
                  <h4 className=" text-yellow-200">{fromMain}</h4>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
