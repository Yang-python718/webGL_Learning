import JulianDate from "../packages/engine/Source/Core/JulianDate.js";
import Clock from "../packages/engine/Source/Core/Clock.js";
const myDate = JulianDate.fromDate(new Date());

console.log(myDate);

const myClock = new Clock({
  currentTime: myDate,
  multiplier: 1,
  shouldAnimate: true,
});

console.log(myClock);
