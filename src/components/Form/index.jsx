import "./style.scss";
import Input from "../Input";
import SelectInput from "../SelectInput";
import departments from "../../data/departments";
import states from "../../data/states";

function Form() {
  return (
    <form className="form">
      <Input label="First Name" type="text" />
      <Input label="Last Name" type="text" />
      <Input label="Date of Birth" type="date" />
      <Input label="Start Date" type="date" />
      <Input label="Street" type="text" />
      <Input label="City" type="text" />
      <SelectInput label="State" options={states} />
      <Input label="Zip Code" type="number" />
      <SelectInput label="Department" options={departments} />
      <button type="submit" className="form-submit">
        Save
      </button>
    </form>
  );
}

export default Form;
