import React from "react";
import DataGrid from "../../../shared/dataGrid/DataGrid";
import { BookingColDefs } from "../../../../constants/booking/bookingColDefs";

type Props = {};

const NewEnquiryPage = (props: Props) => {
  return (
    <div>
      <DataGrid colDefs={BookingColDefs} rowData={[]} key={0}/>
    </div>
  );
};

export default NewEnquiryPage;
