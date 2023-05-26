import { ipcRenderer, contextBridge } from 'electron';

declare global {
  interface Window {
    Main: typeof api;
    ipcRenderer: typeof ipcRenderer;
  }
}

const api = {
  /**
   * Here you can expose functions to the renderer process
   * so they can interact with the main (electron) side
   * without security problems.
   *
   * The function below can accessed using `window.Main.sayHello`
   */
  sendMessage: (message: string) => {
    ipcRenderer.send('message', message);
  },
  /**
    Here function for AppBar
   */
  Minimize: () => {
    ipcRenderer.send('minimize');
  },
  Maximize: () => {
    ipcRenderer.send('maximize');
  },
  Close: () => {
    ipcRenderer.send('close');
  },
  /**
   * Provide an easier way to listen to events
   */
  on: (channel: string, callback: (data: any) => void) => {
    ipcRenderer.on(channel, (_, data) => callback(data));
  },
  tasks: {
    getTodayTasks: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getLastWeekTasks: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getLastMonthTasks: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getLastThreeMonthsTasks: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getLastSixMonthTasks: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getLastYearTasks: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getAllTasks: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getTasksByPeriod: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getTasksByPeriodAndTag: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    createTask: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    deleteTask: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    updateTask: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
  },
  tags: {
    getTags: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    createTag: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    updateTag: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    deleteTag: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
  },
  timers: {
    createTimer: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getTodayTimers: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getLastWeekTimers: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getLastMonthTimers: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getLastThreeMonthsTimers: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getLastSixMonthsTimers: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getLastYearTimers: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getAllTimeTimers: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    getTimerByTask: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
  },
  settings: {
    timer: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    sound: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    task: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
    notification: (channel: string, callback: (data:any) => void) => {
      ipcRenderer.invoke(channel, (_: any, data:any) => callback(data));
    },
  }
};
contextBridge.exposeInMainWorld('Main', api);
/**
 * Using the ipcRenderer directly in the browser through the contextBridge ist not really secure.
 * I advise using the Main/api way !!
 */
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);
