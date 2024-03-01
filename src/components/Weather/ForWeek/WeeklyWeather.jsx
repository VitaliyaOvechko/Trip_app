import { useEffect, useState } from "react";
import { getWeatherForWeek } from "../../../Api";
import styles from "./WeeklyWeather.module.css";

const WeeklyWeather = ({ activeTrip, getIconPath }) => {
  const [forecast, setForecast] = useState([]);

  const dayOfWeek = (date) => {
    const dayOfWeekIndex = new Date(date).getDay();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[dayOfWeekIndex];
  };

  function formatDate(date) {
    const parts = date.split("/");
    const year = parts[2];
    const month = parts[1].padStart(2, "0");
    const day = parts[0].padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const getWeeklyWeather = async () => {
      try {
        const results = await getWeatherForWeek(
          activeTrip.city,
          formatDate(activeTrip.startDate),
          formatDate(activeTrip.endDate)
        );
        setForecast([...results.data.days]);
      } catch (error) {
        console.log(error);
      }
    };
    getWeeklyWeather();
  }, [activeTrip]);

  return (
    <div>
      <h2 className={styles.title}>Weather for all days of the trip</h2>
      <ul className={styles.weekList}>
        {forecast.map(({ icon, tempmin, tempmax, datetime, datetimeEpoch }) => (
          <li key={datetimeEpoch} className={styles.weekListItem}>
            <p className={styles.day}>{dayOfWeek(datetime)}</p>
            <img
              src={getIconPath(icon)}
              alt="Weather Icon"
              width={50}
              height={50}
            />
            <p className={styles.temperature}>
              {tempmin}°/{tempmax}°
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyWeather;
