import trips from "../../helpers/trips.json";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const TripsList = () => {
  return (
    <div>
      <div>
        <IoSearch />
        <input />
      </div>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <p>{trip.city}</p>
            <p>
              {trip.startDate}-{trip.endDate}
            </p>
          </li>
        ))}
      </ul>
      <div>
        <FaPlus />
        <p>Add trip</p>
      </div>
    </div>
  );
};

export default TripsList;
