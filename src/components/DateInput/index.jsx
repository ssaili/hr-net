import "./style.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInput({ label, selected, onChange }) {
  return (
    <div className="date-container">
      <label className="date-label">{label}</label>
      <DatePicker
        className="date-field"
        selected={selected}
        onChange={onChange}
      />
    </div>
  );
}

export default DateInput;
