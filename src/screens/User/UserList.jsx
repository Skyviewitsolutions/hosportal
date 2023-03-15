import React, { useState, useEffect } from "react";
import DataTableContainer from "../../components/DataTable/DataTableContainer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IconContext } from "react-icons";
import { FaDownload, FaEdit, FaEye, FaTrash, FaTrashAlt } from "react-icons/fa";
import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderContainer from "../../components/Header/HeaderContainer";
import SideBarComponent from "../../components/SideBar/SideBarComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { endpoints } from "../../services/endpoints,";

const UserList = () => {
  const navigate = useNavigate();

  const addUser = () => {
    navigate("/user/add");
  };

  const editUser = () => {};

  const [list, setList] = useState([]);
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [updateList, setUpdateList] = useState(false);
  const [loading, setLoading] = useState(false);

  const users = localStorage.getItem("adminUsersData");
  const usersData = JSON.parse(users);

  

  const updateStatus = (e, record) => {
    const value = e.target.value;
  };

  const editItem = (record) => {
    localStorage.setItem("editRecords", JSON.stringify(record));
    navigate("/user/edit");
  };

  const deleteItem = (record) => {
    const deleteUrl = endpoints.admin.users.delete;
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    const val = {
      CUserId: usersData.UserId,
      UserId: record.UserId,
    };

    axios
      .post(deleteUrl, val, { headers: headers })
      .then((res) => {
        if (res.data.status === "Success") {
          toast("User deleted successfully", { type: "success" });
          setUpdateList(!updateList);
        } else if (res.data.status === "Failed") {
          toast("User not deleted", { type: "error" });
        }
      })
      .catch((err) => {});
  };

  const getList = () =>{
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    const url = endpoints.admin.users.list;

    const val = {
      CUserId: usersData.UserId,
      UserId: "",
      HospitalId: "",
      MinistryId: "",
      PlantId: "",
      SlocId: "",
      TypeId: "",
      IsActive: null,
    };

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        if (res.data.status === "Success") {
          const dta = res.data.UserList;
          setList(dta);

          const columnsData = [
            {
              key: "id",
              text: "S NO.",
              className: "id",
              align: "center",
              sortable: true,
              cell: (record, index) => {
                return (
                  <>
                    <div
                      style={{ textAlign: "center", width: "60px" }}
                      className="headings"
                    >
                      <h6 className="cellText">{index + 1}</h6>
                    </div>
                  </>
                );
              },
            },
            {
              key: "FullName",
              text: "Full Name",
              className: "typehead",
              align: "center",
              sortable: true,
              cell: (record) => {
                return (
                  <>
                    <div
                      style={{ textAlign: "center", width: "200px" }}
                      className="headings"
                    >
                      <h6 className="cellText">{record.FullName}</h6>
                    </div>
                  </>
                );
              },
            },
            {
              key: "Email",
              text: "Email",
              className: "typehead",
              align: "center",
              sortable: true,
              cell: (record) => {
                return (
                  <>
                    <div
                      style={{ textAlign: "center", width: "200px" }}
                      className="headings"
                    >
                      <h6 className="cellText">{record.Email}</h6>
                    </div>
                  </>
                );
              },
            },
            {
              key: "LoginId",
              text: "Login ID",
              className: "typehead",
              align: "center",
              sortable: true,
              cell: (record) => {
                return (
                  <>
                    <div
                      style={{ textAlign: "center", width: "100px" }}
                      className="headings"
                    >
                      <h6 className="cellText">{record.LoginId}</h6>
                    </div>
                  </>
                );
              },
            },
            {
              key: "GUID",
              text: "Guid",
              className: "typehead",
              align: "center",
              sortable: true,
              cell: (record) => {
                return (
                  <>
                    <div
                      style={{ textAlign: "center", width: "100px" }}
                      className="headings"
                    >
                      <h6 className="cellText">{record.GUID}</h6>
                    </div>
                  </>
                );
              },
            },
            {
              key: "TypeHead",
              text: "User Type",
              className: "typehead",
              align: "center",
              sortable: true,
              cell: (record) => {
                return (
                  <>
                    <div
                      style={{ textAlign: "center", width: "100px" }}
                      className="headings"
                    >
                      <h6 className="cellText">{record.TypeHead}</h6>
                    </div>
                  </>
                );
              },
            },
            {
              key: "PlantName",
              text: "Plant Name",
              className: "typehead",
              align: "center",
              sortable: true,
              cell: (record) => {
                return (
                  <>
                    <div
                      style={{ textAlign: "center", width: "200px" }}
                      className="headings"
                    >
                      <h6 className="cellText">{record.PlantName}</h6>
                    </div>
                  </>
                );
              },
            },
            {
              key: "SlocName",
              text: "Storage Location",
              className: "typehead",
              align: "center",
              sortable: true,
              cell: (record) => {
                return (
                  <>
                    <div
                      style={{ textAlign: "center", width: "150px" }}
                      className="headings"
                    >
                      <h6 className="cellText">{record.SlocName}</h6>
                    </div>
                  </>
                );
              },
            },
            {
              key: "LastLoginDate",
              text: "Last Login Date",
              className: "typehead",
              align: "center",
              sortable: true,
              cell: (record) => {
                return (
                  <>
                    <div
                      style={{ textAlign: "center", width: "200px" }}
                      className="headings"
                    >
                      <h6 className="cellText">{record.LastLoginDate}</h6>
                    </div>
                  </>
                );
              },
            },
            {
              key: "CreateDate",
              text: "created Date",
              className: "typehead",
              align: "center",
              sortable: true,
              cell: (record) => {
                return (
                  <>
                    <div
                      style={{ textAlign: "center", width: "150px" }}
                      className="headings"
                    >
                      <h6 className="cellText">{record.CreateDate}</h6>
                    </div>
                  </>
                );
              },
            },

            {
              key: "action",
              text: "Action",
              className: "action",
              align: "center",
              sortable: false,
              cell: (record) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={() => editItem(record)}
                      style={{
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        margin: "0px 6px",
                      }}
                      title="Edit"
                    >
                      <IconContext.Provider
                        value={{ color: "var(--lightBlue)", size: 22 }}
                      >
                        <div>
                          <FaEdit />
                        </div>
                      </IconContext.Provider>
                    </button>
                    <button
                      onClick={() => deleteItem(record)}
                      style={{
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        margin: "0px 6px",
                      }}
                      title="Delete"
                    >
                      <IconContext.Provider
                        value={{ color: "var(--lightBlue)", size: 20 }}
                      >
                        <div style={{ marginLeft: "9px" }}>
                          <FaTrashAlt />
                        </div>
                      </IconContext.Provider>
                    </button>
                  </div>
                );
              },
            },
          ];

          setColumns(columnsData);
          setRecords(dta);
        } else if (res.data.status === "Failed") {
        }
      })
      .catch((err) => {});
  }

  useEffect(() =>{
    if (users) {
      getList(1);
    } else {
      navigate("/");
    }
  },[updateList])

  const [importFile, setImportFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFile = (event) => {
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    setImportFile(event.target.files[0]);
    const formData = new FormData();
    const val = event.target.files[0];
    formData.append("File", val);

    const uploadUrl = endpoints.admin.users.uploadFile;
    setIsUploading(true);

    axios
      .post(uploadUrl, formData, { headers: headers })
      .then((res) => {
        setIsUploading(false);
        console.log(res, "response");
        if (res.data.status === "Success") {
          toast("File uploaded successfully", { type: "success" });
        } else if (res.data.status === "Failed") {
          toast(res.data.statusText, { type: "error" });
        }
      })
      .catch((err) => {
        setIsUploading(false);
      });
  };

  return (
    <>
      <div className="home">
        <SideBarComponent />
        <div className="homeContent">
          <HeaderContainer />
          <DataTableContainer
            addUser={addUser}
            editUser={editUser}
            columns={columns}
            records={records}
            isUploading={isUploading}
            title="User"
            importValue={importFile}
            updateFile={(e) => handleFile(e)}
            showImport={true}
            showDownload={true}
            file="https://ansara.in/HOS_S4/public/admin/downloads/ibd_user_data.xlsx"
          />
          <ToastContainer />
          <FooterComponent />
        </div>
      </div>
    </>
  );
};

export default UserList;
