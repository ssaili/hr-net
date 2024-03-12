import { useState } from "react";
import "./style.scss";
import Input from "../Input";
import departments from "../../data/departments";
import states from "../../data/states";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../features/employees/employeesSlice";

function Form() {
  const dispatch = useDispatch();

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

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (name, newValue) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: newValue.trimEnd(),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      setErrorMessage("");
      dispatch(addEmployee(inputValues));
      window.location.reload(false);
    } else {
      setErrorMessage("Please fill out all fields");
    }
  };

  const isFormValid = () => {
    return Object.values(inputValues).every((value) => value.trim() !== "");
  };


  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        label="First Name"
        name="firstName"
        onInputChange={handleInputChange}
        regularExpression={/^[a-zA-Z\s]*$/}
      />
      <Input
        label="Last Name"
        name="lastName"
        onInputChange={handleInputChange}
        regularExpression={/^[a-zA-Z\s]*$/}
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
        name="street"
        onInputChange={handleInputChange}
        regularExpression={/^[a-zA-Z0-9\s]*$/}
      />
      <Input
        label="City"
        name="city"
        onInputChange={handleInputChange}
        regularExpression={/^[a-zA-Z\s]*$/}
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
        name="zipCode"
        onInputChange={handleInputChange}
        regularExpression={/^[0-9]*$/}
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
      {!isFormValid() && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}

export default Form;
