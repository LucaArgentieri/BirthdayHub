import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import axios from "axios";

export default function BirthdayHub() {
  const [APIData, setAPIData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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

  useEffect(() => {
    APIData.forEach((p) => {
      setFilteredData(
        APIData.filter((p) => p.birthDay + " " + p.birthMonth === currentDate)
      );
    });
  }, [APIData, currentDate]);

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
      {filteredData.length !== 0 ? (
        filteredData.map((p) => {
          return (
            <div key={p.id}>
              <Confetti width={width} height={height} />
              <h1>Oggi è il compleanno di</h1>
              <h1 style={textStyle}>{p.name} 🎉</h1>
            </div>
          );
        })
      ) : (
        <h1>Non sono previsti compleanni oggi.</h1>
      )}
    </>
  );
}
