import { IoSearch } from "react-icons/io5";
import styles from "./Search.module.css";

const Search = ({ filter, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <div className={styles.searchIcon}>
        <IoSearch />
      </div>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search your trip"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
