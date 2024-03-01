import { IoClose } from "react-icons/io5";
import styles from "./Modal.module.css";
import cities from "../../helpers/cities.json";
import { useEffect, useState } from "react";

const Modal = ({ isModalOpen, changeVisibilityModal, onSubmit }) => {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const availableDate = new Date(today.getTime() + 15 * 86400000);
    const year = availableDate.getFullYear();
    const month = (availableDate.getMonth() + 1).toString().padStart(2, "0");
    const day = availableDate.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setMaxDate(formattedDate);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedStartDate = new Date(startDate).toLocaleDateString("en-GB");
    const formattedEndDate = new Date(endDate).toLocaleDateString("en-GB");

    setCity("");
    setStartDate("");
    setEndDate("");
    onSubmit({
      city,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    });

    changeVisibilityModal();
  };

  const handleChange = (event) => {
    switch (event.currentTarget.name) {
      case "city":
        console.log(event.target);
        setCity(event.target.value);
        break;
      case "startDate":
        setStartDate(event.target.value);
        break;
      case "endDate":
        setEndDate(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleCancel = () => {
    setCity("");
    setStartDate("");
    setEndDate("");
    changeVisibilityModal();
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isModalOpen]);

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <p className={styles.modalTitle}>Create trip</p>
          <div onClick={changeVisibilityModal}>
            <IoClose size={26} fill="#d4d0d0" style={{ cursor: "pointer" }} />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.modalFormElement}>
            <label className={styles.formLabel} htmlFor="city">
              City
            </label>
            <select
              className={styles.formInput}
              name="city"
              value={city}
              required
              onChange={handleChange}
            >
              <option value="" hidden>
                Please select a city
              </option>
              {cities.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.modalFormElement}>
            <label className={styles.formLabel} htmlFor="startDate">
              Start date
            </label>
            <input
              className={styles.formInput}
              type="date"
              placeholder="Select date"
              name="startDate"
              max={maxDate}
              required
              onChange={handleChange}
            />
          </div>
          <div className={styles.modalFormElement}>
            <label className={styles.formLabel} htmlFor="endDate">
              End date
            </label>
            <input
              className={styles.formInput}
              type="date"
              placeholder="Select date"
              name="endDate"
              max={maxDate}
              required
              onChange={handleChange}
            />
          </div>
          <div className={styles.formBtnWrapper}>
            <button className={styles.cancelBtn} onClick={handleCancel}>
              Cancel
            </button>
            <button className={styles.saveBtn} type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Modal;
