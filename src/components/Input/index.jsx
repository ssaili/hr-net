import { useState } from "react";
//DatePicker library is imported from react-datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//Select library is imported from react-select
import Select from "react-select";
import "./style.scss";

function Input({ label, type, name, options, onInputChange }) {
  const [inputValue, setInputValue] = useState(getInitialValue(type));

  const handleChange = (event) => {
    const updateInputValue = (value) => {
      setInputValue(value);
      onInputChange(name, value);
    };

    switch (type) {
      case "date":
        if (event) {
          const formattedDate = event.toLocaleDateString(
            document.documentElement.lang
          );
          updateInputValue(formattedDate);
        }
        break;
      case "select":
        if (event) {
          const selectedValue = event.value;
          updateInputValue(selectedValue);
        }
        break;
      default:
        if (event && event.target) {
          const inputValue = event.target.value;
          updateInputValue(inputValue);
        }
        break;
    }
  };

  function getInitialValue(type) {
    switch (type) {
      case "date":
        return new Date();
      case "select":
        return null;
      default:
        return "";
    }
  }

  function renderInput() {
    switch (type) {
      case "date":
        return (
          <div className="date-container">
            <label className="date-label">{label}</label>
            <DatePicker
              className="date-field"
              selected={inputValue}
              onChange={handleChange}
            />
          </div>
        );
      case "select":
        return (
          <div className="select-container">
            <label className="select-label">{label}</label>
            <Select
              className="select-field"
              classNamePrefix="select"
              defaultValue={inputValue}
              onChange={handleChange}
              options={options}
            />
          </div>
        );
      default:
        return (
          <div className="input-container">
            <label className="input-label">{label}</label>
            <input
              className="input-field"
              type={type}
              value={inputValue}
              onChange={handleChange}
            />
          </div>
        );
    }
  }

  return renderInput();
}

export default Input;
