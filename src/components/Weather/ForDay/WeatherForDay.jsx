// import Timer from "../../Timer/Timer";
// import styles from "./WeatherForDay.module.css";
// import { getWeatherForToday } from "../../../Api";
// import { useEffect, useState } from "react";

// const WeatherForDay = ({ activeTrip, getIconPath }) => {
//   const [temperature, setTemperature] = useState("20");
//   const [icon, setIcon] = useState();

//   const today = new Date();
//   const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });

//   const getWeather = async () => {
//     try {
//       const results = await getWeatherForToday(activeTrip.city);
//       setTemperature(results.data.days[0].temp);
//       setIcon(results.data.days[0].icon);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getWeather();
//   }, [activeTrip]);

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.dailyWeatherBox}>
//         <p className={styles.day}>{dayOfWeek}</p>
//         <div className={styles.dailyWeather}>
//           <img
//             src={getIconPath(icon)}
//             alt="Weather Icon"
//             width={80}
//             height={80}
//           />
//           <p className={styles.temperature}>{temperature}</p>
//         </div>
//         <p className={styles.city}>{activeTrip.city}</p>
//       </div>
//       <Timer startDate={activeTrip.startDate} />
//     </div>
//   );
// };

// export default WeatherForDay;
