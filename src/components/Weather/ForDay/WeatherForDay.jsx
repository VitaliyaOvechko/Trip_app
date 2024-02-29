import Timer from "../../Timer/Timer";
import styles from "./WeatherForDay.module.css";
import { getWeatherForToday } from "../../../Api";
import { useEffect, useState } from "react";

const WeatherForDay = ({ activeTrip, getIconPath }) => {
  const [temperature, setTemperature] = useState("20");
  const [icon, setIcon] = useState();

  const today = new Date();
  const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });

  const getWeather = async () => {
    try {
      const results = await getWeatherForToday(activeTrip.city);
      setTemperature(results.data.days[0].temp);
      setIcon(results.data.days[0].icon);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [activeTrip]);

  return (
    <div className={styles.wrapper}>
      <p>{dayOfWeek}</p>
      <img src={getIconPath(icon)} alt="Weather Icon" width={80} height={80} />
      <p>{temperature} °C</p>
      <p>{activeTrip.city}</p>
      <Timer startDate={activeTrip.startDate} />
    </div>
  );
};

export default WeatherForDay;
