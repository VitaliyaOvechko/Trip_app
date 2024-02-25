import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Modal = () => {
  return (
    <div>
      <div>
        <p>Create trip</p>
        <IoClose />
      </div>
      <form>
        <label htmlFor="city">City</label>
        <input type="text" placeholder="Please select a city" id="city" />
        <IoIosArrowDown />
        <label htmlFor="startDate">Start date</label>
        <input type="date" placeholder="Select date" id="startDate" />
        <label htmlFor="endDate">End date</label>
        <input type="date" placeholder="Select date" id="endDate" />
        <button>Cancel</button>
        <button>Save</button>
      </form>
    </div>
  );
};
export default Modal;
