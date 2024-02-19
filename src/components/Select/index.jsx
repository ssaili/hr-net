import "./style.scss";

function Select({ label, value, onChange, options }) {
  return (
    <div className="select">
      <label className="select-label">{label}</label>
      <select className="select-field" value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
