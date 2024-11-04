import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [user, setUser] = useState({ name: "", email: "", number: "" });
  const [fetchData, setFetchData] = useState([]);

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const fetchDataUser = async () => {
    const response = await axios.get("http://localhost:9000/");
    setFetchData(response.data.data);
  };


  useEffect(() => {
    fetchDataUser();
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:9000/save", user);
    fetchDataUser()
  };

 

  return (
    <>
      <div className="formDiv">
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            name="name"
            required
            onChange={handleOnChange}
            className="form-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            name="email"
            required
            onChange={handleOnChange}
            className="form-input"
          />
          <input
            type="number"
            placeholder="Number"
            value={user.number}
            name="number"
            required
            onChange={handleOnChange}
            className="form-input"
          />
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>

      <div className="showDataDiv">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {fetchData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
