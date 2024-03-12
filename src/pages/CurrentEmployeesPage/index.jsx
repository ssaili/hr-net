import Header from "../../components/Header";
import Table from "../../components/Table";
import employeeColumns from "../../data/tableColumns";
import { useSelector } from "react-redux";
import "./style.scss";

function CurrentEmployeesPage() {
  const employees = useSelector((state) => state.employees);

  return (
    <div className="employees-page">
      <Header />
      <h1 className="employees-page-title">Current Employees</h1>
      <div className="employees-page-table">
        <Table tableColumns={employeeColumns} tableData={employees.list} />
      </div>
    </div>
  );
}

export default CurrentEmployeesPage;
