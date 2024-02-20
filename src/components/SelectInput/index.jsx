import "./style.scss";
import Select from "react-select";

function SelectInput({ label, onChange, options }) {
  return (
    <div className="select-container">
      <label className="select-label">{label}</label>
      <Select
        className="select-field"
        classNamePrefix="select"
        onChange={onChange}
        options={options}
      />
    </div>
  );
}

export default SelectInput;
