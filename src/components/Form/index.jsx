import "./style.scss";
import Input from "../Input";
import SelectInput from "../SelectInput";
import departments from "../../data/departments";
import states from "../../data/states";
import DateInput from "../DateInput";

function Form() {
  return (
    <form className="form">
      <Input label="First Name" type="text" />
      <Input label="Last Name" type="text" />
      <DateInput label="Date of Birth" />
      <DateInput label="Start Date" />
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
