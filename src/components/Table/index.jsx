import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

function Table({tableColumns, tableData}) {
  const columns = tableColumns;

  const data = tableData;

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return <MaterialReactTable table={table} />;
}

export default Table;
