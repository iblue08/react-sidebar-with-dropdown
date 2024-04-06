import { CustomerColDefs } from "../../../constants/customer/customerColDefs";
import DataGrid from "../../shared/dataGrid/DataGrid";

const AllCustomersPage = () => {
  return (
    <div>
      <DataGrid colDefs={CustomerColDefs} rowData={[]} key={0}/>
    </div>
  );
};

export default AllCustomersPage;
