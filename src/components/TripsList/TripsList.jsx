import trips from "../../helpers/trips.json";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import styles from "./TripsList.module.css";
import { useState } from "react";
import WeatherForDay from "../Weather/ForDay/WeatherForDay";
import Modal from "../Modal/Modal";
import Search from "../Search/Search";
// import WeeklyWeather from "../Weather/ForWeek/WeeklyWeather";

const TripsList = () => {
  const [activeTrip, setActiveTrip] = useState(trips[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [filter, setFilter] = useState("");

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleTrips = trips.filter((trip) =>
    trip.city.toLowerCase().includes(normalizedFilter)
  );

  const changeVisibilityModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.contentHolder}>
        <h1>Weather Forecast</h1>
        <Search filter={filter} onChange={changeFilter} />
        <ul className={styles.tripsList}>
          {visibleTrips.map((trip) => (
            <li
              key={trip.id}
              className={styles.tripsListItem}
              onClick={() => setActiveTrip(trip)}
            >
              <img src={trip.photo_url} width={180} height={180}></img>
              <div className={styles.itemThumb}>
                <p>{trip.city}</p>
                <p className={styles.tripDates}>
                  {trip.startDate} - {trip.endDate}
                </p>
              </div>
            </li>
          ))}
          <li className={styles.tripsListItem} onClick={changeVisibilityModal}>
            <FaPlus />
            <p>Add trip</p>
          </li>
        </ul>
        {/* <WeeklyWeather activeTrip={activeTrip} /> */}
      </div>
      <WeatherForDay activeTrip={activeTrip} />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          changeVisibilityModal={changeVisibilityModal}
        />
      )}
    </div>
  );
};

export default TripsList;
