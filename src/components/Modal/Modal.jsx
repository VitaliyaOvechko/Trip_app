import { IoClose } from "react-icons/io5";
import styles from "./Modal.module.css";
import cities from "../../helpers/cities.json";
import { useEffect } from "react";

const Modal = ({ isModalOpen, changeVisibilityModal }) => {
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
    <div className={styles.backdrop} onClick={changeVisibilityModal}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <p className={styles.modalTitle}>Create trip</p>
          <div onClick={changeVisibilityModal}>
            <IoClose size={26} fill="#d4d0d0" style={{ cursor: "pointer" }} />
          </div>
        </div>
        <form>
          <div className={styles.modalFormElement}>
            <label className={styles.formLabel} htmlFor="city">
              City
            </label>
            <select className={styles.formInput} id="city">
              <option value="" disabled selected hidden>
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
              id="startDate"
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
              id="endDate"
            />
          </div>
          <div className={styles.formBtnWrapper}>
            <button className={styles.cancelBtn}>Cancel</button>
            <button className={styles.saveBtn}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Modal;
