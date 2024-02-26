import trips from "../../helpers/trips.json";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import styles from "./TripsList.module.css";

const TripsList = () => {
  return (
    <div>
      <div className={styles.searchBox}>
        <div className={styles.searchIcon}>
          <IoSearch />
        </div>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search your trip"
        />
      </div>
      <ul className={styles.tripsList}>
        {trips.map((trip) => (
          <li key={trip.id} className={styles.tripsListItem}>
            <img src={trip.photo_url} width={180} height={180}></img>
            <div className={styles.itemThumb}>
              <p>{trip.city}</p>
              <p className={styles.tripDates}>
                {trip.startDate} - {trip.endDate}
              </p>
            </div>
          </li>
        ))}
        <li>
          <FaPlus />
          <p>Add trip</p>
        </li>
      </ul>
    </div>
  );
};

export default TripsList;
