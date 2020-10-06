import React, { useState } from "react";
import "./weather-form.css";

function WeatherForm() {
  const [name, setName] = useState("");
  const [numQuestions, setNumQuestions] = useState(-10);
  const [category, setCategory] = useState(1);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onNumQuestionsChange = (event) => {
    const min = Number.parseInt(event.target.min);
    const max = Number.parseInt(event.target.max);
    const value = Number.parseInt(event.target.value);
    if (value < min) setNumQuestions(min);
    else if (value > max) setNumQuestions(max);
    else setNumQuestions(value);
  };

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    alert(`Temperature is ${numQuestions} and it's ${category}.`);
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
          value={numQuestions}
          onChange={onNumQuestionsChange}
        />
      </div>

      <div className="weather-form__row">
        <label className="weather-form__label" htmlFor="category">
          Pick Current Visable Weather:
        </label>
        <select
          id="category"
          className="weather-form__input"
          value={category}
          onChange={onCategoryChange}
        >
          <option value="1">It's Raining!</option>
          <option value="2">It's Snowing</option>
          <option value="3">No rain or snow. </option>
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
