import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherCart from "./WeatherCart";
import styled from "styled-components";

const Weather = () => {
  const [city, setCity] = useState("Mumbai");
  const [country, setCountry] = useState("IN");
  const [data, setData] = useState([]);
  const [time, setTime] = useState("");

  const getData = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=3e40f365c791649294c7806f47e73fb4`;
    axios
      .get(url)
      .then((res) => {
        console.log("res", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
    setCity("");
    setCountry("");
  };

  console.log("data", data);

  const handleSubmit = (event) => {
    event.preventDefault();
    getData(city, country);
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <h1>Weather App</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>

      <WeatherCart data={data} />
    </div>
  );
};

export default Weather;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-direction: row;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
  border-bottom: dotted;
`;
const Button = styled.button`
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: #486686;
  color: #fff;
  cursor: pointer;
  outline: none;
`;
