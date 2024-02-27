import { useEffect, useState } from "react";
import styles from "./Timer.module.css";

const Timer = ({ startDate }) => {
  const calculateTimeLeft = () => {
    const parts = startDate.split(".");
    const targetDate = new Date(parts[2], parts[1] - 1, parts[0]);
    const currentDate = new Date();

    const difference = targetDate.getTime() - currentDate;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.timer}>
      <div className={styles.field}>
        <span className={styles.value}>
          {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
        </span>
        <span className={styles.text}>Days</span>
      </div>
      <div className={styles.field}>
        <span className={styles.value}>
          {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
        </span>
        <span className={styles.text}>Hours</span>
      </div>
      <div className={styles.field}>
        <span className={styles.value}>
          {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
        </span>
        <span className={styles.text}>Minutes</span>
      </div>
      <div className={styles.field}>
        <span className={styles.value}>
          {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
        </span>
        <span className={styles.text}>Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
