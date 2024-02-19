import Form from "../../components/Form";
import Header from "../../components/Header";
import "./style.scss";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <h1 className="homepage-title">Create Employee</h1>
      <Form />
    </div>
  );
}

export default Homepage;
