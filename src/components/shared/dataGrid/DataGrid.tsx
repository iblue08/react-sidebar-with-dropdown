import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { DataGridProp } from "../../../@types/props/DataGrid.props";

interface IRow {
  make: string;
  model: string;
  price: number;
}

const DataGrid = ({ rowData, colDefs } :DataGridProp) => {
  // const [rowData, setRowData] = useState<IRow[]>([
  //   { make: "Toyota", model: "Celica", price: 35000 },
  // ]);

  // const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
  //   { field: "make" },
  //   { field: "model" },
  //   { field: "price" },
  // ]);

  // const defaultColDef = useMemo(
  //   () => ({
  //     sortable: true,
  //     filter: true,
  //   }),
  //   []
  // );

  return (
    <div className="ag-theme-alpine" style={{ height: 500}}>
      <AgGridReact
        animateRows={true}
        rowSelection="multiple"
        rowData={rowData}
        columnDefs={colDefs}
      />
    </div>
  );
};

export default DataGrid;
