import React , {useEffect ,useState} from "react";
import NoGrLogComponent from "./NoGrLogComponent";
import { endpoints } from "../../../../services/endpoints,";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NoGrLogContainer = () => {
  const usersData = localStorage.getItem("adminUsersData");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);
  const [totalData, setTotalData] = useState("");
  const [searchText, setSearchText] = useState(null);
  const [arrayItems ,setArrayItems] = useState("");

  const [ItemsInOnePage, setItemsInOnePage] = useState(10);

  const getList = (
    index,
    selectedItems = ItemsInOnePage,
    text = searchText
  ) => {
    const usersDetails = JSON.parse(usersData);
    const url = endpoints.admin.invoiceMasterData.noGrPoLog;
    const headers = { Authorization: `NUPCO=${usersDetails.MemberToken}` };

    const val = {
      itemCount: selectedItems,
      indexNumber: index,
      Id: null,
      Vendor_No: null,
      SearchText: null,
    };

  setLoading(true);

  axios
    .post(url, val, { headers: headers })
    .then((res) => {
      console.log(res, "response");
      setLoading(false);
      if (res.data.status === "Success") {
        const response = res.data.log;
        setData(response);
        setTotalData(res.data.recordCount);
        setArrayItems(response.length)


        const columns = [
          { name: "SN", label: "#" },
          { name: "po_no", label: "PO No" },
          { name: "vendor_no", label: "Vendor No" },
          { name: "added_by", label: "Added By" },
          { name: "status", label: "Status" },
          { name: "message", label: "Message" },
          { name: "created_at", label: "Created At" },
          { name: "updated_at", label: "Updated At" },
        ];

        setColumn(columns);
      } else if (res.data.status === "Failed") {
        setLoading(false);
      }
    })
    .catch((err) => {
      setLoading(false);
    });
  }

  useEffect(() => {
    if (usersData) {
      getList(1);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <NoGrLogComponent  column={column}
        isLoading={loading}
        data={data}
        totalData={totalData}
        searchText={searchText}
        setSearchText={setSearchText}
        ItemsInOnePage={ItemsInOnePage}
        setItemsInOnePage={setItemsInOnePage}
        getList={getList} 
        placeholder="Search here..."
        arrayItems={arrayItems}
        />
    </>
  );
};

export default NoGrLogContainer;
