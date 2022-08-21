let clock = false,
  gym = true,
  sleep = true;
// this promise about play
let playPromise = new Promise((success, failure) => {
  if (clock) {
    success("the time is right");
  } else {
    failure("the time is wrong");
  }
});
// this promise about gym

let gymPromise = new Promise((success, failure) => {
  if (gym) {
    success("go the gym");
  } else {
    failure("not now");
  }
});
// this promise about sleep

let sleepPromise = new Promise((success, failure) => {
  if (sleep) {
    success("go the bed to sleep");
  } else {
    failure("sleep is not good");
  }
});

playPromise.then(
  (resolve) => {
    console.log(resolve);
    gymPromise.then(
        (resolve) => {
            console.log(resolve);
            sleepPromise.then(
                (resolve) => console.log(resolve),
                (reject) => console.log(reject)
              );
              
        },
        (reject) => console.log(reject)
      );
  },
  (reject) => console.log(reject)
);

