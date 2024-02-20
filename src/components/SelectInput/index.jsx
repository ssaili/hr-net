import "./style.scss";
import Select from "react-select";

function SelectInput({ label, defaultValue, onChange, options }) {
  return (
    <div className="select-container">
      <label className="select-label">{label}</label>
      <Select
        className="select-field"
        classNamePrefix="select"
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
      />
    </div>
  );
}

export default SelectInput;
