import "./style.scss";
import Input from "../Input";
import Select from "../Select";

function Form() {
  const state = [
    { label: "Alabama", value: "alabama" },
    { label: "Alaska", value: "alaska" },
  ];

  const department = [
    { label: "Sales", value: "sales" },
    { label: "Marketing", value: "marketing" },
  ];

  return (
    <form className="form">
      <Input label="First Name" type="text" />
      <Input label="Last Name" type="text" />
      <Input label="Date of Birth" type="date" />
      <Input label="Start Date" type="date" />
      <Input label="Street" type="text" />
      <Input label="City" type="text" />
      <Select label="State" options={state} />
      <Input label="Zip Code" type="number" />
      <Select label="Department" options={department} />
      <button type="submit" className="form-submit">
        Save
      </button>
    </form>
  );
}

export default Form;
