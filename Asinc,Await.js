let clock = false,
  gym = true,
  sleep = true;
// this promise about play
// return instance 
const PLAY_PROMISE = () =>{
    return new Promise((success, failure) => {
        if (clock) {
          success("the time is right");
        } else {
          failure("the time is wrong");
        }
      });
}
// return instance
const GYM_PROMISE = () =>{
   return  new Promise((success, failure) => {
        if (gym) {
          success("go the gym");
        } else {
          failure("not now");
        }
      });
}
const SLEEP_PROMISE = () =>{
    return new Promise((success, failure) => {
        if (sleep) {
          success("go the bed to sleep");
        } else {
          failure("sleep is not good");
        }
      })
}
const run = async () => {
    try{
    const playMessage =  await PLAY_PROMISE() ; 
        console.log(playMessage);
    const gymMessage =  await GYM_PROMISE() ;
        console.log(gymMessage);
    const sleepMessage = await SLEEP_PROMISE() ;
        console.log(sleepMessage);
    } 
    catch(err){
        console.log(err);
    }
}
run();