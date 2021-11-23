import { useEffect } from "react";
import OneSignal from "react-onesignal";
import BirthdayHub from "./BirthdayHub";

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: process.env.REACT_APP_ONESIGNAL_API_KEY,
    });
  }, []);
  return (
    <div className="App">
      <BirthdayHub />
    </div>
  );
}

export default App;
