export const secondsToHourMinutesFormatter = (secs: number): String => {
    const initSeconds: number = secs

    let date = new Date(0);
    date.setSeconds(secs);
  
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds()

    if(initSeconds<=60){
        return `${seconds}s`
    } 

    if(initSeconds<=120){
        return `${minutes}m${seconds}s`
    } 

    if(initSeconds<=60*60){
        return `${minutes}m`
    } 


    const formattedTime = `${hours}h${minutes}m`
    return formattedTime;
} 