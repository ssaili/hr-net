import Header from "../../components/Header";
import Table from "../../components/Table";
import "./style.scss";

function CurrentEmployeesPage() {
  return (
    <div className="employees-page">
      <Header />
      <h1 className="employees-page-title">Current Employees</h1>
      <div className="employees-page-table">
        <Table />
      </div>
    </div>
  );
}

export default CurrentEmployeesPage;
