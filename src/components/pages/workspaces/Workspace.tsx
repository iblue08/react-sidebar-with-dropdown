import React from "react";
import DataGrid from "../../shared/dataGrid/DataGrid";
import { WorkSpaceDefs } from "../../../constants/workspace/workspaceDefs";

type Props = {};

const WorkspacesPage = (props: Props) => {
  return (
    <div>
      <DataGrid colDefs={WorkSpaceDefs} rowData={[]} key={0}/>
    </div>
  );
};

export default WorkspacesPage;
