import React, { useState } from "react";
import "./weather-form.css";

function WeatherForm(props) {
  // const [temperature, setTemperature] = useState(-10);
  // const [precipitation, setPrecipitation] = useState(1);
  const {
    temperature,
    setTemperature,
    precipitation,
    setPrecipitation,
  } = props;

  const onTemperatureChange = (event) => {
    const min = Number.parseInt(event.target.min);
    const max = Number.parseInt(event.target.max);
    const value = Number.parseInt(event.target.value);
    if (value < min) setTemperature(min);
    else if (value > max) setTemperature(max);
    else setTemperature(value);
  };

  const onPrecipitationChange = (event) => {
    setPrecipitation(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    alert(`Temperature is ${temperature} degrees and it's ${precipitation}.`);
  };

  return (
    <form className="weather-form" onSubmit={onFormSubmit}>
      <div className="weather-form__row">
        <label className="weather-form__label" htmlFor="questions">
          Enter Current Temperature:
        </label>
        <input
          className="weather-form__input"
          type="number"
          id="questions"
          min="-10"
          max="100"
          value={temperature}
          onChange={onTemperatureChange}
        />
      </div>

      <div className="weather-form__row">
        <label className="weather-form__label" htmlFor="category">
          Pick Current Visable Weather:
        </label>
        <select
          id="category"
          className="weather-form__input"
          value={precipitation}
          onChange={onPrecipitationChange}
        >
          <option value="raining!">It's Raining!</option>
          <option value="snowing!">It's Snowing</option>
          <option value="not raining or snowing.">No rain or snow. </option>
        </select>
      </div>

      <div className="weather-form__row">
        <input
          className="weather-form__submit"
          type="submit"
          value="What Should I Wear?"
        />
      </div>
    </form>
  );
}
export default WeatherForm;
