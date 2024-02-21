import { useState } from "react";
import "./style.scss";
import Select from "react-select";

function SelectInput({ label, options }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="select-container">
      <label className="select-label">{label}</label>
      <Select
        className="select-field"
        classNamePrefix="select"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

export default SelectInput;
