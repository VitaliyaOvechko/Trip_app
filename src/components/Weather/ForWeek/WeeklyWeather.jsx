import { getWeatherForWeek } from "../../../Api";
import styles from "./WeeklyWeather.module.css";
import { useEffect, useState } from "react";

const WeeklyWeather = ({ activeTrip, getIconPath }) => {
  const [forecast, setForecast] = useState([]);

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

  return (
    <div className={styles.weekList}>
      {forecast.map(({ icon, temp, datetime, datetimeEpoch }) => (
        <div key={datetimeEpoch}>
          <p>{dayOfWeek(datetime)}</p>
          <img src={getIconPath(icon)} alt="Weather Icon" />
          <p>{temp}</p>
        </div>
      ))}
    </div>
  );
};

export default WeeklyWeather;
