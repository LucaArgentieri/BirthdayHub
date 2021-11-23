import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Manage() {
  const [name, setName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://${process.env.REACT_APP_MOCKAPI_URL}.mockapi.io/people/`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const postData = (e) => {
    e.preventDefault();
    axios.post(
      `https://${process.env.REACT_APP_MOCKAPI_URL}.mockapi.io/people`,
      {
        name,
        birthDay,
        birthMonth,
      }
    );

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    setName(" ");
    setBirthDay(" ");
    setBirthMonth(" ");
  };

  const onDelete = (e, id) => {
    axios.delete(`https://6196203544dd5400173d53c3.mockapi.io/people/${id}`);
    e.target.classList.add("display-none");
  };

  return (
    <div>
      <div className="Manage">
        <form className="formStyle" onSubmit={(e) => postData(e)}>
          <h4>
            <label>Name</label>
          </h4>
          <input
            className="inputStyle"
            type="text"
            name=""
            id=""
            required
            onChange={(e) => setName(e.target.value)}
          />
          <h4>
            <label>Day</label>
          </h4>
          <input
            className="inputStyle"
            type="number"
            name=""
            id=""
            min="1"
            max="31"
            required
            onChange={(e) => setBirthDay(e.target.value)}
          />
          <h4>
            <label>Month</label>
          </h4>
          <input
            className="inputStyle"
            type="number"
            name=""
            id=""
            min="1"
            max="12"
            required
            onChange={(e) => setBirthMonth(e.target.value)}
          />

          <button className="buttonStyle" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="CardContainer">
        {APIData.map((p) => {
          return (
            <div className="card" key={p.id} onClick={(e) => onDelete(e, p.id)}>
              <p>Id: {p.id}</p>
              <p>Name: {p.name}</p>
              <p>Day: {p.birthDay}</p>
              <p>Month: {p.birthMonth}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
