import { useState, useEffect } from "react";
import "./Clock.css";
import { greeting } from "../../utils/getGreeting";

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className="clock">
      <p className={`clock__time clock_${greeting}`}>
        {date.toLocaleTimeString("en-US")}
      </p>
      <p className={`clock__date clock_${greeting}`}>
        {date.toLocaleDateString("en-US")}
      </p>
    </div>
  );
}
export default Clock;
