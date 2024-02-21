import { useState } from "react";
import "./style.scss";
import Input from "../Input";
import departments from "../../data/departments";
import states from "../../data/states";

function Form() {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const handleInputChange = (name, newValue) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValues);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        label="First Name"
        type="text"
        name="firstName"
        onInputChange={handleInputChange}
      />
      <Input
        label="Last Name"
        type="text"
        name="lastName"
        onInputChange={handleInputChange}
      />
      <Input
        label="Date of Birth"
        type="date"
        name="dateOfBirth"
        onInputChange={handleInputChange}
      />
      <Input
        label="Start Date"
        type="date"
        name="startDate"
        onInputChange={handleInputChange}
      />
      <Input
        label="Street"
        type="text"
        name="street"
        onInputChange={handleInputChange}
      />
      <Input
        label="City"
        type="text"
        name="city"
        onInputChange={handleInputChange}
      />
      <Input
        label="State"
        type="select"
        name="state"
        options={states}
        onInputChange={handleInputChange}
      />
      <Input
        label="Zip Code"
        type="number"
        name="zipCode"
        onInputChange={handleInputChange}
      />
      <Input
        label="Department"
        type="select"
        name="department"
        options={departments}
        onInputChange={handleInputChange}
      />
      <button type="submit" className="form-submit">
        Save
      </button>
    </form>
  );
}

export default Form;
