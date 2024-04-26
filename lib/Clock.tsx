import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [trialDaysLeft, setTrialDaysLeft] = useState<number>(30);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const oneDayMs: number = 24 * 60 * 60 * 1000;
    const endDate: Date = new Date();
    endDate.setDate(endDate.getDate() + trialDaysLeft);
    const today: Date = new Date();
    const daysLeft: number = Math.round(
      (endDate.getTime() - today.getTime()) / oneDayMs
    );
    setTrialDaysLeft(daysLeft);
  }, [currentTime, trialDaysLeft]);

  const formattedTime: string = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div>
      <p className="truncate text-md text-green-500">
        Enjoy your 30-Days trial.
      </p>{" "}
      <br />
      <p className="text-white truncate text-sm">
        ({trialDaysLeft} Days-Left :
        <span className="truncate text-green-500 text-xs">
          {" "}
          {formattedTime}
        </span>
        )
      </p>
    </div>
  );
};

export default Clock;
