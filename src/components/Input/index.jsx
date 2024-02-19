import "./style.scss";

function Input({ label, type, value, onChange }) {
  return (
    <div className="input">
      <label className="input-label">{label}</label>
      <input
        className="input-field"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
