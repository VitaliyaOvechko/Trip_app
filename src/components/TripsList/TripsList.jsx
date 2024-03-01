import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import trips from "../../helpers/trips.json";
import styles from "./TripsList.module.css";
// import WeatherForDay from "../Weather/ForDay/WeatherForDay";
import Modal from "../Modal/Modal";
import Search from "../Search/Search";
// import WeeklyWeather from "../Weather/ForWeek/WeeklyWeather";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const TripsList = () => {
  const [tripsList, setTripsList] = useLocalStorage("tripsList", trips);
  const [activeTrip, setActiveTrip] = useLocalStorage("activeTrip", trips[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const tripsPerPage = 3;

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
    setCurrentPage(1);
  };

  const normalizedFilter = filter.toLowerCase();

  const filterAndSortTrips = (trips, filterText) => {
    const filteredTrips = trips.filter((trip) =>
      trip.city.toLowerCase().includes(filterText.toLowerCase())
    );

    const sortedTrips = filteredTrips.sort((trip1, trip2) => {
      const datePartsA = trip1.startDate.split("/").join("");
      const datePartsB = trip2.startDate.split("/").join("");
      return datePartsA - datePartsB;
    });

    return sortedTrips;
  };

  const changeVisibilityModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const formSubmitHandler = (data) => {
    const newTrip = {
      id: nanoid(),
      city: data.city,
      photo_url: `/public/${data.city}.jpg`,
      startDate: data.startDate,
      endDate: data.endDate,
    };

    setTripsList((prevState) => [...prevState, newTrip]);
    filterAndSortTrips(tripsList, normalizedFilter);
  };

  const visibleTrips = filterAndSortTrips(tripsList, normalizedFilter);

  const getIconPath = (iconName) => {
    return `/icons/${iconName}.svg`;
  };

  const indexOfLastTrip = currentPage * tripsPerPage;
  const indexOfFirstTrip = indexOfLastTrip - tripsPerPage;
  const currentTrips = visibleTrips.slice(indexOfFirstTrip, indexOfLastTrip);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.contentHolder}>
        <h1 className={styles.header}>
          Weather <span style={{ fontWeight: "600" }}>Forecast</span>
        </h1>
        <Search filter={filter} onChange={changeFilter} />
        <div className={styles.tripWrapper}>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack size={20} />
          </button>
          <ul className={styles.tripsList}>
            {currentTrips.map((trip) => (
              <li
                key={trip.id}
                className={`${styles.tripsListItem} ${
                  activeTrip.id === trip.id ? styles.activeTrip : ""
                }`}
                onClick={() => setActiveTrip(trip)}
              >
                <img src={trip.photo_url} width={170} height={160}></img>
                <div className={styles.itemThumb}>
                  <p>{trip.city}</p>
                  <p className={styles.tripDates}>
                    {trip.startDate} - {trip.endDate}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentTrips.length < tripsPerPage}
          >
            <IoIosArrowForward size={20} />
          </button>
          <div className={styles.addTrip} onClick={changeVisibilityModal}>
            <FaPlus />
            <p>Add trip</p>
          </div>
        </div>
        {/* <WeeklyWeather activeTrip={activeTrip} getIconPath={getIconPath} /> */}
      </div>
      {/* <WeatherForDay activeTrip={activeTrip} getIconPath={getIconPath} /> */}
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          changeVisibilityModal={changeVisibilityModal}
          onSubmit={formSubmitHandler}
        />
      )}
    </div>
  );
};

export default TripsList;
