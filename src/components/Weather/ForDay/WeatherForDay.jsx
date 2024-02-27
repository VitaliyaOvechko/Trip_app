import Timer from "../../Timer/Timer";
import styles from "./WeatherForDay.module.css";
// import { getWeatherForToday } from "../../../Api";
import { useEffect, useState } from "react";

const WeatherForDay = ({ activeTrip }) => {
  const [temperature, setTemperature] = useState("20");
  // const [icon, setIcon] = useState();

  // const getWeather = async () => {
  //   try {
  //     const results = await getWeatherForToday(activeTrip.city);
  //     // setMovies([...results.data.results]);
  //     // setTemperature(results.data.days[0].temp);
  //     //   const icon = results.data.days[0].icon;
  //     console.log(results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getWeather();
  // }, [activeTrip]);

  return (
    <div className={styles.wrapper}>
      <p>Sunday</p>
      <p>{temperature} °C</p>
      <p>{activeTrip.city}</p>
      <Timer startDate={activeTrip.startDate} />
    </div>
  );
};

export default WeatherForDay;
