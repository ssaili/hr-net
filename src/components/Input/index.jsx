import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import "./style.scss";

function Input({
  label,
  type,
  name,
  options,
  onInputChange,
  regularExpression,
}) {
  const [inputValue, setInputValue] = useState(getInitialValue(type));
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    let timer;
    if (!isValid) {
      timer = setTimeout(() => {
        setIsValid(true);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isValid]);

  function firstLetterToUppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleChange = (event) => {
    const updateInputValue = (value) => {
      if (regularExpression && !regularExpression.test(value)) {
        setIsValid(false);
        return;
      } else {
        setIsValid(true);
      }

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
          const selectedValue = firstLetterToUppercase(event.value);
          updateInputValue(selectedValue);
        }
        break;
      default:
        if (event?.target) {
          const inputValue = firstLetterToUppercase(event.target.value)
            .trimStart()
            .split(/[\s,\t,\n]+/)
            .join(" ");
          updateInputValue(inputValue);
        }
        break;
    }
  };

  function getInitialValue(type) {
    switch (type) {
      case "date":
        return null;
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
            <label className="date-label" htmlFor={label}>
              {label}
            </label>
            <DatePicker
              id={label}
              placeholderText="Select a date"
              className="date-field"
              onChange={handleChange}
              selected={inputValue}
            />
          </div>
        );
      case "select":
        return (
          <div className="select-container">
            <label className="select-label" htmlFor={label}>
              {label}
            </label>
            <Select
              id={label}
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
            <label className="input-label" htmlFor={label}>
              {label}
            </label>
            <input
              id={label}
              className="input-field"
              type={type}
              value={inputValue}
              onChange={handleChange}
            />
            {!isValid && (
              <span className="error-message">
                This character is not allowed.
              </span>
            )}
          </div>
        );
    }
  }

  return renderInput();
}

export default Input;
