import { useState } from "react";
import "./style.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInput({ label }) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="date-container">
      <label className="date-label">{label}</label>
      <DatePicker
        className="date-field"
        selected={startDate}
        onChange={setStartDate}
      />
    </div>
  );
}

export default DateInput;
