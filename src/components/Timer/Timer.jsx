import { useEffect, useState } from "react";
import styles from "./Timer.module.css";

const Timer = ({ startDate }) => {
  const dateParts = startDate.split("/");
  const targetDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
  const currentDate = new Date();
  const difference = targetDate.getTime() - currentDate;

  const calculateTimeLeft = () => {
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
    <div>
      {difference > 0 ? (
        <ul className={styles.timer}>
          <li className={styles.timerItem}>
            <span className={styles.value}>
              {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
            </span>
            <p className={styles.text}>Days</p>
          </li>
          <li className={styles.timerItem}>
            <span className={styles.value}>
              {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
            </span>
            <p className={styles.text}>Hours</p>
          </li>
          <li className={styles.timerItem}>
            <span className={styles.value}>
              {timeLeft.minutes < 10
                ? `0${timeLeft.minutes}`
                : timeLeft.minutes}
            </span>
            <p className={styles.text}>Minutes</p>
          </li>
          <li className={styles.timerItem}>
            <span className={styles.value}>
              {timeLeft.seconds < 10
                ? `0${timeLeft.seconds}`
                : timeLeft.seconds}
            </span>
            <p className={styles.text}>Seconds</p>
          </li>
        </ul>
      ) : (
        <p style={{ fontSize: "20px" }}>Trip starts today</p>
      )}
    </div>
  );
};

export default Timer;
