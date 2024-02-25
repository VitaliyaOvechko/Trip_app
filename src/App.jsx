import "./App.css";
import Modal from "./components/Modal/Modal";
import TripsList from "./components/TripsList/TripsList";

function App() {
  return (
    <>
      <h1>Weather Forecast</h1>
      <TripsList />
      <Modal />
    </>
  );
}

export default App;
