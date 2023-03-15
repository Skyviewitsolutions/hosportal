import React, { Fragment, Component, useEffect, useState } from "react";
import DataTableContainer from "../../components/DataTable/DataTableContainer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IconContext } from "react-icons";
import { FaDownload, FaEdit, FaEye, FaTrash, FaTrashAlt } from "react-icons/fa";
import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderContainer from "../../components/Header/HeaderContainer";
import SideBarComponent from "../../components/SideBar/SideBarComponent";
import { ToastContainer, toast } from "react-toastify";
import Confirm from "../../elements/Confirm/Confirm";
import "react-toastify/dist/ReactToastify.css";

const UserTypeList = () => {
  const navigate = useNavigate();

  const addUser = () => {
    navigate("/userType/add");
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
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    const activeUrl =
      "http://hos.team-suit.com/api/usertype/update/activestatus";

    const value = e.target.value;

    // const dta = {
    //   CountryId: record.CountryId,
    //   UserId: usersData.UserId,
    //   IsActive: !record.IsActive,
    // };

    const dta = {
      TypeId: record.TypeId,
      UserId: usersData.UserId,
      IsActive: !record.IsActive,
    };

    axios
      .post(activeUrl, dta, { headers: headers })
      .then((res) => {
        if (res.data.status === "Success") {
          setUpdateList(!updateList);
          toast("Status updated successfully !", { type: "success" });
        } else if (res.data.status === "Failed") {
          toast("Status updated failed", { type: "error" });
        }
      })
      .catch((err) => {});
  };

  const editItem = (record) => {
    localStorage.setItem("editRecords", JSON.stringify(record));
    navigate("/userType/edit");
  };

  const deleteItem = (record) => {
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    const deleteUrl = "http://hos.team-suit.com/api/usertype/delete";
    const val = {
      TypeId: record.TypeId,
      UserId: usersData.UserId,
    };

    axios
      .post(deleteUrl, val, { headers: headers })
      .then((res) => {
        if (res.data.status === "Success") {
          toast("UserType deleted successfully", { type: "success" });
          setUpdateList(!updateList);
        } else if (res.data.status === "Failed") {
          toast("UserType deleted failed", { type: "error" });
        }
      })
      .catch((err) => {});
  };

  const getList = () => {
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    const url = "http://hos.team-suit.com/api/usertype/get";

    const val = {
      TypeId: "",
      UserId: usersData.UserId,
      IsActive: null,
    };

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        if (res.data.status === "Success") {
          const dta = res.data.UTypes;
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
                    <div style={{ textAlign: "center" }} className="headings">
                      <h6 className="cellText">{index + 1}</h6>
                    </div>
                  </>
                );
              },
            },
            {
              key: "TypeHead",
              text: "Type Head",
              className: "typehead",
              align: "center",
              sortable: true,
              cell: (record) => {
                return (
                  <>
                    <div style={{ textAlign: "center" }} className="headings">
                      <h6 className="cellText">{record.TypeHead}</h6>
                    </div>
                  </>
                );
              },
            },
            {
              key: "IsActive",
              text: "Active Status",
              className: "active",
              align: "center",
              sortable: true,
              cell: (record) => {
                return (
                  <>
                    <div style={{ textAlign: "center" }} className="headings">
                      <input
                        type="checkbox"
                        defaultChecked={record.IsActive}
                        // value={}
                        style={{ width: "18px", height: "18px" }}
                        onChange={(e) => updateStatus(e, record)}
                      />
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
  };

  useEffect(() => {
    if (users) {
      getList(1);
    } else {
      navigate("/");
    }
  }, [updateList]);

  // getting list data ;

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
            title="UserType"
          />
          {/* <Confirm /> */}
          <FooterComponent />
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default UserTypeList;
