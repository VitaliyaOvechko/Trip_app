import { useState } from "react";
import "./App.css";
import TripsList from "./components/TripsList/TripsList";
import { useGoogleLogin } from "@react-oauth/google";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      setIsLoggedIn(true);
    },
  });
  return (
    <>
      {isLoggedIn ? (
        <TripsList />
      ) : (
        <div>
          <p>Sign in to view the list of your trips</p>
          <button
            onClick={() => login()}
            style={{
              padding: "10px",
              marginTop: "20px",
              backgroundColor: "#708eaac9",
            }}
          >
            Sign in with Google 🚀
          </button>
        </div>
      )}
    </>
  );
}

export default App;
