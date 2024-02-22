import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

const data = [
  {
    firstName: "John",
    lastName: "Doe",
    startDate: "01/01/2024",
    department: "Marketing",
    dateOfBirth: "01/01/1990",
    address: "261 Erdman Ford",
    city: "East Daphne 20019",
    state: "Kentucky",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    startDate: "01/01/2024",
    department: "Marketing",
    dateOfBirth: "01/01/1990",
    address: "769 Dominic Grove",
    city: "Columbus 20019",
    state: "Ohio",
  },
  {
    firstName: "Joe",
    lastName: "Doe",
    startDate: "01/01/2024",
    department: "Marketing",
    dateOfBirth: "01/01/1990",
    address: "566 Brakus Inlet",
    city: "South Linda 20019",
    state: "West Virginia",
  },
  {
    firstName: "Kevin",
    lastName: "Vandy",
    startDate: "01/01/2024",
    department: "Marketing",
    dateOfBirth: "01/01/1990",
    address: "722 Emie Stream",
    city: "Lincoln 20019",
    state: "Nebraska",
  },
  {
    firstName: "Joshua",
    lastName: "Rolluffs",
    startDate: "01/01/2024",
    department: "Marketing",
    dateOfBirth: "01/01/1990",
    address: "32188 Larkin Turnpike",
    city: "Charleston 20019",
    state: "South Carolina",
  },
];

function Table() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 100,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 100,
      },
      {
        accessorKey: "startDate",
        header: "Start Date",
        size: 100,
      },
      {
        accessorKey: "department",
        header: "Department",
        size: 100,
      },
      {
        accessorKey: "dateOfBirth",
        header: "Date of Birth",
        size: 100,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 150,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return <MaterialReactTable table={table} />;
}

export default Table;
