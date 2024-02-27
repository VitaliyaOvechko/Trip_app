// import { getWeatherForWeek } from "../../../Api";
// import styles from "./WeeklyWeather.module.css";
// import { useEffect, useState } from "react";

// const WeeklyWeather = ({ activeTrip }) => {
//   const [focast, setFocast] = useState();

//   const getWeeklyWeather = async () => {
//     try {
//       const results = await getWeatherForWeek(
//         "Paris",
//         "2024-02-28",
//         "2024-03-03"
//       );
//       //   setFocast([...results.data.days]);
//       //   setTemperature(results.data.days[0].temp);
//       console.log(results);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   getWeeklyWeather();

//   //   useEffect(() => {
//   //     const getWeeklyWeather = async () => {
//   //       try {
//   //         const results = await getWeatherForWeek(
//   //           "Paris",
//   //           "2024-02-28",
//   //           "2024-03-03"
//   //         );
//   //         //   setFocast([...results.data.days]);
//   //         //   setTemperature(results.data.days[0].temp);
//   //         console.log(results);
//   //       } catch (error) {
//   //         console.log(error);
//   //       }
//   //     };
//   //     getWeeklyWeather();
//   //   }, [activeTrip]);

//   return (
//     <div>
//       <p>Week</p>
//     </div>
//   );
// };

// export default WeeklyWeather;
