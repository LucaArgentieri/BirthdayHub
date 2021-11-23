import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import axios from "axios";

export default function BirthdayHub() {
  const [APIData, setAPIData] = useState([]);
  const date = new Date();
  const currentDate = date.getDate() + " " + (date.getMonth() + 1);
  const { width, height } = "100%";

  useEffect(() => {
    axios
      .get(`https://${process.env.REACT_APP_MOCKAPI_URL}.mockapi.io/people`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const textStyle = {
    color: `rgb(${getRandomInt(255)},
     ${getRandomInt(255)},
     ${getRandomInt(255)})`,
    textAlign: "center",
  };

  return (
    <>
      {APIData.length !== 0 &&
        APIData.map((p) => {
          if (p.birthDay + " " + p.birthMonth === currentDate) {
            return (
              <div key={p.id}>
                <Confetti width={width} height={height} />
                <h1>Oggi è il compleanno di</h1>
                <h1 style={textStyle}>{p.name} 🎉</h1>
              </div>
            );
          }
        })}

      {!APIData && <h1>Nessun compleanno in programma oggi</h1>}
    </>
  );
}
