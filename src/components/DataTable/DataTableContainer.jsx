import React from "react";
import DataTableComponent from "./DataTableComponent";

const DataTableContainer = (props) => {
  const {addUser , editUser , columns , records , title , showImport , showDownload , file ,  importValue ,
    updateFile , isUploading} = props
  return (
    <>
      <DataTableComponent addUser={addUser} editUser={editUser} columns={columns} records={records} title={title} showImport={showImport} showDownload={showDownload} file={file} importValue={importValue} updateFile={updateFile} isUploading={isUploading}/>
    </>
  );
};

export default DataTableContainer;
