// import React from "react";
// // import Table from "react-bootstrap/Table";
// import "./Orders.css";
// import Tables from "../../../../components/Tables";
// import { Data1 } from "./Data/Data1";
// import { Data2 } from "./Data/Data2";
// import { Data3 } from "./Data/Data3";
// import NavTab from "./Components/NavTab";

// export default function Order() {
//   const getHeadings1 = () => {
//     return Object.keys(Data1[0]);
//   };

//   const getHeadings2 = () => {
//     return Object.keys(Data2[0]);
//   };
//   const getHeadings3 = () => {
//     return Object.keys(Data3[0]);
//   };

//   return (
//     <>
//       <div className=" ">
//         <h4 className="form-title">Customer Order Information</h4>
//         <hr className="horizontal-line" />
//       </div>

//       <div className="table_top_style">
//         <form action="">
//           <div className="row">
//             <div className="col-md-6">
//               <label className="form-label">Customer</label>
//               <select className="ip-select">
//                 <option value="option 1"> A A Industries</option>
//                 <option value="option 2">Test Industries</option>
//                 <option value="option 3">Ahana Systems and solutions</option>
//                 <option value="option 1"> A A Industries</option>
//                 <option value="option 2">Test Industries</option>
//                 <option value="option 3">Ahana Systems and solutions</option>
//                 <option value="option 1"> A A Industries</option>
//                 <option value="option 2">Test Industries</option>
//                 <option value="option 3">Ahana Systems and solutions</option>
//                 <option value="option 1"> A A Industries</option>
//                 <option value="option 2">Test Industries</option>
//                 <option value="option 3">Ahana Systems and solutions</option>
//                 <option value="option 1"> A A Industries</option>
//                 <option value="option 2">Test Industries</option>
//                 <option value="option 3">Ahana Systems and solutions</option>
//                 <option value="option 1"> A A Industries</option>
//                 <option value="option 2">Test Industries</option>
//                 <option value="option 3">Ahana Systems and solutions</option>
//                 <option value="option 1"> A A Industries</option>
//                 <option value="option 2">Test Industries</option>
//                 <option value="option 3">Ahana Systems and solutions</option>
//                 <option value="option 1"> A A Industries</option>
//                 <option value="option 2">Test Industries</option>
//                 <option value="option 3">Ahana Systems and solutions</option>
//                 <option value="option 1"> A A Industries</option>
//                 <option value="option 2">Test Industries</option>
//                 <option value="option 3">Ahana Systems and solutions</option>
//               </select>
//             </div>

//             <div className="col-md-6">
//               <div className="row justify-content-space-between">
//                 <div className="col-md-4">
//                   <label>Code</label>
//                   <input className="" />
//                 </div>
//                 <div className="col-md-4">
//                   <label className="">Status</label>
//                   <input className="" />
//                 </div>
//                 <div className="col-md-4">
//                   <button className="button-style ">Close</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>

//       {/* tables */}

//       <div className="d-grid gap-3 ">
//         <div className="row  ">
//           {/* first table in row*/}
//           <div className="col-md-12 ">
//             <div
//               className="table-data"
//               style={{ height: "200px", overflowY: "scroll" }}
//             >
//               <Tables theadData={getHeadings1()} tbodyData={Data1} />
//             </div>
//             {/* <hr className="horizontal-line" /> */}

//             {/* <div className="table-data order_table">
//             <Table striped>
//               <thead>
//                 <tr className=" order_table">
//                   <th className="table-header ">Order No</th>
//                   <th className="table-header ">Type</th>
//                   <th className="table-header ">Order Date</th>
//                   <th className="table-header ">Purchase Order</th>
//                   <th className="table-header ">Order Value</th>
//                   <th className="table-header ">Material Value</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>01</td>
//                   <td>Credit</td>
//                   <td>Jan 1, 2023</td>
//                   <td>Jan 3, 2023</td>
//                   <td>100</td>
//                   <td>70</td>
//                 </tr>
//               </tbody>
//             </Table>
//           </div> */}
//           </div>
//         </div>

//         {/* <div className="" style={}></div> */}
//         <div className="row  ">
//           <div className="col-md-6">
//             <div style={{ height: "200px", overflowY: "scroll" }}>
//               <Tables theadData={getHeadings3()} tbodyData={Data3} />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div style={{ height: "200px", overflowY: "scroll" }}>
//               <Tables theadData={getHeadings2()} tbodyData={Data2} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <hr className="horizontal-line" />

//       <div className="row " style={{ marginLeft: "-3px" }}>
//         <NavTab />
//       </div>
//       <div className="p-2"></div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Form,
  Button,
  Tabs,
  Tab,
} from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";
import { Typeahead } from "react-bootstrap-typeahead";


// import BreadcrumbsComponent from "../../components/BreadCumbsComponent";

const { postRequest } = require("../../../api/apiinstance");
const { endpoints } = require("../../../api/constants");

function Order(props) {
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();

  // let customerMenu = () => {
  //     window.location.href = "/customer";
  // }

  let [custdata, setCustdata] = useState([]);
  let [ordstatdata, setOrdStatdata] = useState([]);
  let [orderdata, setOrderdata] = useState([]);
  let [orderscheduledata, setOrderScheduledata] = useState([]);
  let [invoicelistdata, setInvoiceListdata] = useState([]);

  let [orderno, setOrderNo] = useState("");
  let [custcode, setCustCode] = useState("");
  let [ordstatus, setOrdStatus] = useState("");
  let [ordschid, setOrdSchId] = useState("");

  let [selectedOrderId, setSelectedOrderId] = useState(false);
  let [selectedOrder, setSelectedOrder] = useState(null);
  let [selectedOrdSchId, setSelectedOrdSchId] = useState(false);
  let [selectedOrdSchTaskId, setSelectedOrdSchTaskId] = useState(false);
  let [selectedOrdSch, setSelectedOrdSch] = useState(null);
  let [selectedSchTaskId, setSelectedSchTaskId] = useState(false);
  let [selectedSchTask, setSelectedSchTask] = useState(null);
  let [ordschtaskdata, setOrdSchTaskdata] = useState([]);
  let [selectedOrdSchtask, setSelectedOrdSchTask] = useState(null);
  let [orddetailsdata, setOrdDetailsdata] = useState([]);
  let [invdwgdata, setInvDwgdata] = useState([]);
  let [selectedInvListId, setSelectedInvListId] = useState(false);
  let [selectedinvlist, setSelectedInvList] = useState(null);
  let [dcinvno, setDCINVNo] = useState("");
  let [schdetsdata, setSchDetsdata] = useState([]);
  let [taskpartdetsdata, setTaskPartDetsdata] = useState([]);
  let [nctaskid, setNcTaskID] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      postRequest(endpoints.getCustCodeName, {}, (data) => {
        for (let i = 0; i < data.length; i++) {
          data[i].label = data[i].Cust_name;
        }
        setCustdata(data);
      });
      postRequest(endpoints.ordStatusCustomer, {}, (osdata) => {
        console.log("osdata", osdata);
        setOrdStatdata(osdata);
      });
    }
    fetchdata();
  }, []);

  let selectCust = async (e) => {
    //   e.preventDefault();
    // console.log("Yes")
    // console.log(e.target.value);
    // let custdet = e.target.value.replace(/[^A-Za-z0-9. ]/gi, "");
    // if ((custdet.includes("..")) || (custdet == null) || (custdet == "")) {
    //     alert('Please enter Customer Name ..');
    //     return;
    // }

    // let ccode = custdet.substring(0, 4);
    // console.log(custdet.substring(0, 4));
    // setCustCode(custdet.substring(0, 4));

    console.log("cust data = ", e);
    console.log("cust code = ", e[0].Cust_Code);
    console.log("table customer = ", custdata);
    let cust;
    for (let i = 0; i < custdata.length; i++) {
      if (custdata[i]["Cust_Code"] === e[0].Cust_Code) {
        cust = custdata[i];
        break;
      }
    }
    setCustCode(cust.Cust_Code);
    // console.log(custcode);
    let ostat = searchParams.get("ordstat");
    setOrdStatus(ostat);
    console.log(ostat);
    if (cust.Cust_Code !== "" && searchParams.get("ordstat") !== null) {
      //if (custdet.substring(0, 4) !== "" && searchParams.get("ordstat") !== null) {
      // postRequest(endpoints.ordersCustomer, { custcode: custdet.substring(0, 4), orderstatus: searchParams.get("ordstat") }, (odata) => {
      //     console.log("Orders Customer" + odata);
      //     setOrderdata(odata);
      // });
      postRequest(
        endpoints.ordersCustomer,
        { custcode: cust.Cust_Code, orderstatus: searchParams.get("ordstat") },
        (odata) => {
          console.log("Orders Customer" + odata);
          setOrderdata(odata);
        }
      );
      // ordersCustomer({
      //     custcode: custcode,
      //     orderstatus: ostat,
      // }, async (resp) => {
      //     console.log(resp)
      //     setOrderdata(resp)
      // })
    } else {
      toast.error("Please select a customer");
      return;
    }
  };

  let selectOStatus = async (e) => {
    console.log(e.target.value);
    setOrdStatus(e.target.value);
    postRequest(
      endpoints.ordersCustomer,
      {
        custcode: custcode,
        orderstatus: e.target.value,
      },
      async (resp) => {
        console.log(resp);
        setOrderdata([]);
        setOrderScheduledata([]);
        setInvoiceListdata([]);
        setOrdDetailsdata([]);
        setOrdSchTaskdata([]);
        setSchDetsdata([]);
        setInvDwgdata([]);
        setTaskPartDetsdata([]);
        setOrderdata(resp);
      }
    );
  };

  let dateconv = (da) => {
    let cdate = new Date(da);
    console.log(cdate);
    return (
      cdate.getDay().toString().padStart(2, "0") +
      "/" +
      cdate.getMonth().toString().padStart(2, "0") +
      "/" +
      cdate.getFullYear()
    );
  };

  let ordselector = (id, orders) => {
    setSelectedOrderId(id);
    setSelectedOrder(orders);
    setOrderNo(orders["Order_No"]);
    setOrderScheduledata([]);
    setInvoiceListdata([]);
    setOrdDetailsdata([]);
    setOrdSchTaskdata([]);
    setSchDetsdata([]);
    setInvDwgdata([]);
    setTaskPartDetsdata([]);
    postRequest(
      endpoints.orderScheduleCustomer,
      { orderno: orders["Order_No"] },
      (osdata) => {
        setOrderScheduledata(osdata);
      }
    );
    postRequest(
      endpoints.orderInvoicesCustomer,
      { orderno: orders["Order_No"] },
      (invdata) => {
        setInvoiceListdata(invdata);
      }
    );
    postRequest(
      endpoints.orderDetailsCustomer,
      { orderno: orders["Order_No"] },
      (orddata) => {
        setOrdDetailsdata(orddata);
      }
    );
    // orderScheduleCustomer({
    //     orderno: orders["Order_No"],
    // }, async (resp) => {
    //     //console.log(resp)
    //     setOrderScheduledata(resp)
    // })
    // orderDetailsCustomer({
    //     orderno: orders["Order_No"],
    // }, async (resp) => {
    //     //console.log(resp)
    //     setOrdDetailsdata(resp)
    // })
    // orderInvoicesCustomer({
    //     orderno: orders["Order_No"],
    // }, async (resp) => {
    //     console.log(resp)
    //     setInvoiceListdata(resp)
    // })
  };

  let ordschselector = (id, ordschedules) => {
    setSelectedOrdSchId(id);
    setSelectedOrdSch(ordschedules);
    setOrderNo(ordschedules["Order_No"]);
    setOrdSchId(ordschedules["ScheduleId"]);
    postRequest(
      endpoints.ordSchTasksCustomer,
      {
        orderno: ordschedules["Order_No"],
        ordschid: ordschedules["ScheduleId"],
      },
      (ostdata) => {
        setOrdSchTaskdata(ostdata);
      }
    );
    postRequest(
      endpoints.schDetsCustomer,
      { ordschid: ordschedules["ScheduleId"] },
      (osddata) => {
        setSchDetsdata(osddata);
      }
    );

    // ordSchTasksCustomer({
    //     orderno: ordschedules["Order_No"],
    //     ordschid: ordschedules["ScheduleId"],
    // }, async (resp) => {
    //     //console.log(resp)
    //     setOrdSchTaskdata(resp)
    // })
    // schDetsCustomer({
    //     ordschid: ordschedules["ScheduleId"],
    // }, async (resp) => {
    //     //console.log(resp)
    //     setSchDetsdata(resp)
    // })
  };

  let invselector = (id, invlist) => {
    setSelectedInvListId(id);
    setSelectedInvList(invlist);
    setDCINVNo(invlist["DC_Inv_No"]);
    postRequest(
      endpoints.invDwgCustomer,
      { dcinvno: invlist["DC_Inv_No"] },
      (iddata) => {
        setInvDwgdata(iddata);
      }
    );
    // invDwgCustomer({
    //     dcinvno: invlist["DC_Inv_No"],
    // }, async (resp) => {
    //     //console.log(resp)
    //     setInvDwgdata(resp)
    // })
  };

  let schtasksselector = (id, schtasks) => {
    setSelectedSchTaskId(id);
    setSelectedSchTask(schtasks);
    setNcTaskID(schtasks["NcTaskId"]);

    postRequest(
      endpoints.scheduleTasksCustomer,
      { nctaskid: schtasks["NcTaskId"] },
      (stddata) => {
        setTaskPartDetsdata(stddata);
      }
    );
    // scheduleTasksCustomer({
    //     nctaskid: schtasks["NcTaskId"],
    // }, async (resp) => {
    //     //console.log(resp)
    //     setTaskPartDetsdata(resp)
    // })
  };

  let rendertable = (orders, id) => {
    return (
      <tr
        className="custtr"
        style={{
          // backgroundColor: selectedOrderId === id ? "#5d88fc" : "",
          backgroundColor: selectedOrderId === id ? "#98A8F8" : "",
          fontFamily: "Roboto",
          fontSize: "14px",
          cursor: "pointer",
        }}
        id={id}
        onClick={() => {
          ordselector(id, orders);
        }}
      >
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orders["Order_No"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orders["Type"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {moment(orders["Order_Date"]).format("DD/MM/YYYY")}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orders["Purchase_Order"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {orders["OrderValue"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {orders["MaterialValue"]}
        </td>
      </tr>
    );
  };

  let rendertblschs = (ordschedules, id) => {
    return (
      <tr
        className="custtr"
        style={{
          // backgroundColor: selectedOrdSchId === id ? "#5d88fc" : "",
          backgroundColor: selectedOrdSchId === id ? "#98A8F8" : "",
          fontFamily: "Roboto",
          fontSize: "14px",
          cursor: "pointer",
        }}
        id={id}
        onClick={() => {
          ordschselector(id, ordschedules);
        }}
      >
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {ordschedules["OrdSchNo"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
          hidden
        >
          {ordschedules["ScheduleId"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {ordschedules["Schedule_Status"]}
        </td>
      </tr>
    );
  };

  let rendertbltasks = (ordschtasks, id) => {
    return (
      <tr
        className="custtr"
        style={{
          // backgroundColor: selectedSchTaskId === id ? "#5d88fc" : "",
          backgroundColor: selectedSchTaskId === id ? "#98A8F8" : "",
          fontFamily: "Roboto",
          fontSize: "14px",
          cursor: "pointer",
        }}
        id={id}
        onClick={() => {
          schtasksselector(id, ordschtasks);
        }}
      >
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {ordschtasks["TaskNo"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {ordschtasks["Mtrl_Code"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {ordschtasks["CustMtrl"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {ordschtasks["Operation"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {ordschtasks["TStatus"]}
        </td>
      </tr>
    );
  };
  let rendertblOrdDets = (orddetails) => {
    return (
      <tr className="custtr">
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orddetails["DwgName"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orddetails["Operation"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orddetails["Mtrl_Code"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orddetails["Mtrl_Source"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orddetails["Qty_Ordered"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orddetails["QtyScheduled"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orddetails["QtyProduced"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orddetails["QtyPacked"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orddetails["QtyDelivered"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orddetails["JWCost"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {orddetails["MtrlCost"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {orddetails["SrlStatus"]}
        </td>
      </tr>
    );
  };

  let rendertblInvList = (invlist, id) => {
    return (
      <tr
        className="custtr"
        style={{
          // backgroundColor: selectedInvListId === id ? "#5d88fc" : "",
          backgroundColor: selectedInvListId === id ? "#98A8F8" : "",
          fontFamily: "Roboto",
          fontSize: "14px",
          cursor: "pointer",
        }}
        id={id}
        onClick={() => {
          invselector(id, invlist);
        }}
      >
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {invlist["DC_InvType"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {invlist["Inv_No"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {moment(invlist["Inv_Date"]).format("DD/MM/YYYY")}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {moment(invlist["PaymentDate"]).format("DD/MM/YYYY")}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {invlist["GrandTotal"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {invlist["PymtAmtRecd"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
          hidden
        >
          {invlist["DC_Inv_No"]}
        </td>
      </tr>
    );
  };

  let rendertblInvDwg = (invdwg) => {
    return (
      <tr className="custtr">
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {invdwg["Dwg_No"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {invdwg["Mtrl"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {invdwg["Qty"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {invdwg["JW_Rate"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {invdwg["Mtrl_rate"]}
        </td>
      </tr>
    );
  };

  let rendertblschDets = (schdetails) => {
    return (
      <tr className="custtr" style={{ width: "100%" }}>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          <div style={{ textTransform: "none" }}>{schdetails["DwgName"]}</div>
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          <div style={{ width: "130px" }}>{schdetails["Mtrl_Code"]}</div>
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          <div style={{ width: "100%" }}>{schdetails["Operation"]}</div>
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {schdetails["Mtrl_Source"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {schdetails["QtyScheduled"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {schdetails["QtyProgrammed"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {schdetails["QtyProduced"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {schdetails["QtyInspected"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {schdetails["QtyCleared"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {schdetails["QtyPacked"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {schdetails["QtyDelivered"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {schdetails["QtyRejected"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {schdetails["JWCost"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {schdetails["MtrlCost"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
          hidden
        >
          {schdetails["SrlStatus"]}
        </td>
      </tr>
    );
  };

  let rendertbltaskprtDets = (taskprtdets) => {
    return (
      <tr className="custtr">
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {taskprtdets["DwgName"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {taskprtdets["QtyToNest"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {taskprtdets["QtyNested"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {taskprtdets["QtyProduced"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {taskprtdets["QtyCleared"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {taskprtdets["Remarks"]}
        </td>
      </tr>
    );
  };

  return (
    <div>
      {/* <BreadcrumbsComponent /> */}
      <h4 className="title ">Customer Order Information</h4>
      {/* <hr className="horizontal-line" /> */}
      <div style={{ marginLeft: "10px" }}>
        <div className="row">
          <div className="col-md-6">
          <Form.Group controlId="CustName">
                    <label className="form-label">Customer</label>
                    <Form.Label
                        style={{
                          color: "#f20707",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        *
                      </Form.Label>
                    {custdata.length > 0 ? (
                      // <Form.Select
                      //   className="ip-select "
                      //   controlId="CustName"
                      //   onChange={selectCust}
                      // >
                      //   <option value="" disabled selected>
                      //     {" "}
                      //     Select Customer
                      //   </option>
                      //   {custdata.map((cust) => {
                      //     return (
                      //       <option value={cust["Cust_Code"]}>
                      //         {cust["Cust_name"]}
                      //       </option>
                      //     );
                      //   })}
                      // </Form.Select>
                      <Typeahead
                id="basic-example"
                // onChange={selectCust}
                options={custdata}
                placeholder="Select Customer"
                // selected={selected}
                /*onInputChange={(label) => {
                  console.log("input change :", label);
                }}
                onChange={(label) => {
                  console.log("onchange :", label);
                }}*/
                onChange={(label) => selectCust(label)}
              />
                    ) : (
                      ""
                    )}
                  </Form.Group>
          </div>{" "}
          <div className="col-md-2">
            {" "}
            <label className="form-label">Code </label>
            <Form.Control id="custcode" type="text" disabled value={custcode} />
          </div>
          <div className="col-md-2">
            {" "}
            <label className="form-label">Status </label>
            {/* <input id="custcode" type="text" disabled value={""} /> */}
            {searchParams.get("ordstat") == "All" ? (
              ordstatdata.length > 0 ? (
                <Form.Select
                  className="ip-select col-md-6"
                  controlId="ordstatus"
                  onChange={selectOStatus}
                >
                  <option value="" disabled selected>
                    ** Select **
                  </option>
                  {ordstatdata.map((ordstat) => {
                    return (
                      <option value={ordstat["Status"]}>
                        {ordstat["Status"]}
                      </option>
                    );
                  })}
                </Form.Select>
              ) : (
                ""
              )
            ) : (
              // <input id="ordstatus" type="text" disabled value={ordstatus} />
              <Form.Control
                id="custcode"
                type="text"
                disabled
                value={ordstatus}
              />
            )}
          </div>
          <div className="col-md-2 mt-4">
            {" "}
            <button
              id="btnclose"
              type="submit"
              className="button-style"
              onClick={() => navigate("/customer")}
            >
              Close{" "}
            </button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mt-3">
            <div
              style={{
                height: "200px",
                overflowY: "scroll",
              }}
            >
              <Table striped className="table-data border ">
                <thead className="tableHeaderBGColor">
                  <tr>
                    {[
                      "Order No",
                      "Type",
                      "Order Date",
                      "Purchase Order",
                      "Order Value",
                      "Mtrl Value",
                    ].map((h) => {
                      return <th>{h}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {orderdata != null
                    ? orderdata.map((orders, id) => rendertable(orders, id))
                    : ""}
                </tbody>
              </Table>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div
              style={{
                height: "200px",
                overflowY: "scroll",
              }}
            >
              <Table striped className="table-data border ">
                <thead className="tableHeaderBGColor">
                  <tr>
                    {["Ord. Schedule No", "Sch. Status"].map((h) => {
                      return (
                        <th
                          className="custth"
                          //   style={{ fontFamily: "Roboto", fontSize: "12px" }}
                        >
                          {h}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {orderscheduledata != null
                    ? orderscheduledata.map((ordschedules, id) =>
                        rendertblschs(ordschedules, id)
                      )
                    : ""}
                </tbody>
              </Table>
            </div>
          </div>
          <div className="col-md-5 mt-3">
            {" "}
            <div
              style={{
                height: "200px",
                overflowY: "scroll",
              }}
            >
              <Table striped className="table-data border ">
                <thead className="tableHeaderBGColor">
                  <tr>
                    {[
                      "Task No",
                      "Mtrl Code",
                      "Cust Mtrl",
                      "Operation",
                      "Status",
                    ].map((h) => {
                      return (
                        <th
                          className="custth"
                          // style={{ fontFamily: "Roboto", fontSize: "12px" }}
                        >
                          {h}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {ordschtaskdata != null
                    ? ordschtaskdata.map((ordschtasks, id) =>
                        rendertbltasks(ordschtasks, id)
                      )
                    : ""}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div xs={12}>
            <Tabs
              defaultActiveKey="orddets"
              id="orderdetails"
              className="mb-3 mt-3"
            >
              <Tab eventKey="orddets" title="Order Details Status">
                <Row>
                  <Col
                    xs={12}
                    style={{ maxHeight: "320px", overflowY: "scroll" }}
                  >
                    <Table striped className="table-data border ">
                      <thead className="tableHeaderBGColor">
                        <tr>
                          {[
                            "Dwg Name",
                            "Operation",
                            "Mtrl Code",
                            "Source",
                            "Qty",
                            "Scheduled",
                            "Produced",
                            "Packed",
                            "Delivered",
                            "JWCost",
                            "MtrlCost",
                            "SrlStatus",
                          ].map((h) => {
                            return <th>{h}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {orddetailsdata != null
                          ? orddetailsdata.map((orddetails) =>
                              rendertblOrdDets(orddetails)
                            )
                          : ""}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Tab>
              <Tab
                eventKey="invlist"
                title="Invoice List"
                // style={{ fontFamily: "Roboto", fontSize: "12px" }}
              >
                <Row classnName="mt-2">
                  <Col
                    style={{
                      overflowY: "scroll",
                    }}
                  >
                    <Table striped className="table-data border ">
                      <thead className="tableHeaderBGColor">
                        <tr className="custtr">
                          {[
                            "Inv Type",
                            "Inv No",
                            "Mtrl Inv Date",
                            "Due Date",
                            "Grand Total",
                            "Amt. Received",
                          ].map((h) => {
                            return <th>{h}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {invoicelistdata != null
                          ? invoicelistdata.map((invlist, id) =>
                              rendertblInvList(invlist, id)
                            )
                          : ""}
                      </tbody>
                    </Table>
                  </Col>
                  <Col
                    style={{
                      overflowY: "scroll",
                    }}
                  >
                    <Table striped className="table-data border ">
                      <thead className="tableHeaderBGColor">
                        <tr>
                          {[
                            "Dwg No",
                            "Mtrl",
                            "Qty",
                            "JW Rate",
                            "Mtrl Rate",
                          ].map((h) => {
                            return <th>{h}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {invdwgdata != null
                          ? invdwgdata.map((invdwg) => rendertblInvDwg(invdwg))
                          : ""}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="schdets" title="Schedule Details">
                <Row classnName="mt-2">
                  <Col
                    style={{
                      overflowY: "scroll",
                    }}
                  >
                    <Table striped className="table-data border ">
                      <thead className="tableHeaderBGColor">
                        <tr>
                          {[
                            "Dwg Name ",
                            "Mtrl Code",
                            "Operation",
                            "Source",
                            "Scheduled",
                            "Programmed",
                            "Produced",
                            "Inspected",
                            "Cleared",
                            "Packed",
                            "Delivered",
                            "Rejected",
                            "JWCost",
                            "MtrlCost",
                          ].map((h) => {
                            return <th>{h}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {schdetsdata != null
                          ? schdetsdata.map((schdetails) =>
                              rendertblschDets(schdetails)
                            )
                          : ""}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="taskpartdets" title="Task Part Details">
                <Row classnName="mt-2">
                  <Col
                    style={{
                      overflowY: "scroll",
                    }}
                  >
                    <Table striped className="table-data border ">
                      <thead className="tableHeaderBGColor">
                        <tr>
                          {[
                            "Drawing",
                            "To Nest",
                            "Nested",
                            "Produced",
                            "Cleared",
                            "Remarks",
                          ].map((h) => {
                            return <th>{h}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {taskpartdetsdata != null
                          ? taskpartdetsdata.map((taskprtdets) =>
                              rendertbltaskprtDets(taskprtdets)
                            )
                          : ""}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------------------------------------------- */}
      <div className="form-style">
        {/* // <Container>
        //     <div className="addquotecard">
                 <h4 className="addquotecard-header">Customer Order Information</h4> */}
        <Form>
          {/* <Row className="mb-1">
            <Form.Label
              style={{ width: "90px", fontFamily: "Roboto", fontSize: "12px" }}
            >
              Customer
            </Form.Label>
            {custdata.length > 0 ? (
              <select
                className="ip-select col-md-6"
                controlId="CustName"
                style={{
                  width: "350px",
                  height: "30px",
                  fontFamily: "Roboto",
                  fontSize: "12px",
                }}
                onChange={selectCust}
              >
                <option value="" disabled selected>
                  {" "}
                  Select Customer
                </option>
                {custdata.map((cust) => {
                  return (
                    <option
                      style={{ fontFamily: "Roboto", fontSize: "12px" }}
                      value={cust["Cust_Code"]}
                    >
                      {cust["Cust_name"]}
                    </option>
                  );
                })}
              </select>
            ) : (
              ""
            )} */}

          {/* <input type="text" list="custdata" id='CustName' style={{ width: '400px', height: '30px', fontFamily: 'Roboto', fontSize: '12px', marginLeft: '5px', marginRight: '20px' }} placeholder="Select Customer" onChange={selectCust} />
                        {custdata.length > 0 ?
                            <datalist id="custdata" onChange={selectCust} required>
                                {custdata.map((cust) =>
                                    <option key={cust.Cust_Code} value={cust.Cust_Code + ' - ' + cust.Cust_name} />

                                )}
                            </datalist> : ""} */}
          {/* <Form.Label
              style={{
                width: "90px",
                fontFamily: "Roboto",
                fontSize: "14px",
                padding: "1px 1px 1px 50px",
              }}
            > */}
          {/* Code{" "}
            </Form.Label> */}
          {/* <Form.Control
              id="custcode"
              type="text"
              disabled
              style={{
                width: "90px",
                height: "30px",
                fontFamily: "Roboto",
                fontSize: "14px",
              }}
              value={custcode}
            /> */}
          {/* <Form.Label
              style={{
                width: "100px",
                fontFamily: "Roboto",
                fontSize: "12px",
                padding: "1px 1px 1px 50px",
              }}
            >
              Status{" "}
            </Form.Label> */}

          {/* {searchParams.get("ordstat") == "All" ? (
              ordstatdata.length > 0 ? (
                <select
                  className="ip-select col-md-6"
                  controlId="ordstatus"
                  style={{
                    width: "130px",
                    height: "30px",
                    fontFamily: "Roboto",
                    fontSize: "14px",
                  }}
                  onChange={selectOStatus}
                >
                  <option value="" disabled selected>
                    ** Select **
                  </option>
                  {ordstatdata.map((ordstat) => {
                    return (
                      <option
                        style={{ fontFamily: "Roboto", fontSize: "12px" }}
                        value={ordstat["Status"]}
                      >
                        {ordstat["Status"]}
                      </option>
                    );
                  })}
                </select>
              ) : (
                ""
              )
            ) : (
              <Form.Control
                id="ordstatus"
                type="text"
                disabled
                style={{
                  width: "130px",
                  height: "30px",
                  fontFamily: "Roboto",
                  fontSize: "12px",
                }}
                value={ordstatus}
              />
            )} */}
          {/* <Col style={{ width: "200px", padding: "0px 0px 0px 50px" }}>
              <Button
                id="btnclose"
                type="submit"
                style={{
                  backgroundColor: "#283E81",
                  align: "float-right",
                  width: "100px",
                  fontFamily: "Roboto",
                  fontSize: "12px",
                }}
                onClick={() => navigate("/customer")}
              >
                Close{" "}
              </Button>
            </Col> */}
          {/* </Row> */}
          <Row>
            {/* <Col
              xs={5}
              className="vscroll"
              style={{
                fontFamily: "Roboto",
                fontSize: "12px",
                maxHeight: "310px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  fontFamily: "Roboto",
                  fontSize: "12px",
                }}
                className="custtable"
              >
                <tr
                  className="custtr"
                  style={{ fontFamily: "Roboto", fontSize: "12px" }}
                >
                  {[
                    "Order No",
                    "Type",
                    "Order Date",
                    "Purchase Order",
                    "Order Value",
                    "Mtrl Value",
                  ].map((h) => {
                    return (
                      <th
                        className="custth"
                        style={{ fontFamily: "Roboto", fontSize: "12px" }}
                      >
                        {h}
                      </th>
                    );
                  })}
                </tr>
                {orderdata != null
                  ? orderdata.map((orders, id) => rendertable(orders, id))
                  : ""}
              </table>
            </Col> */}
            {/* <Col
              xs={3}
              className="vscroll"
              style={{
                fontFamily: "Roboto",
                fontSize: "12px",
                height: "310px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  fontFamily: "Roboto",
                  fontSize: "12px",
                }}
                className="custtable"
              >
                <tr
                  className="custtr"
                  style={{ fontFamily: "Roboto", fontSize: "12px" }}
                >
                  {
                    // ["Ord. Schedule No", "Scheduled", "Sch. Status"].map(h => {
                    ["Ord. Schedule No", "Sch. Status"].map((h) => {
                      return (
                        <th
                          className="custth"
                          style={{ fontFamily: "Roboto", fontSize: "12px" }}
                        >
                          {h}
                        </th>
                      );
                    })
                  }
                </tr>
                {orderscheduledata != null
                  ? orderscheduledata.map((ordschedules, id) =>
                      rendertblschs(ordschedules, id)
                    )
                  : ""}
              </table>
            </Col> */}
            {/* <Col xs={4} className="vscroll" style={{ maxHeight: "310px" }}>
              <table
                style={{
                  width: "100%",
                  fontFamily: "Roboto",
                  fontSize: "12px",
                }}
                className="custtable"
              >
                <tr
                  className="custtr"
                  style={{ fontFamily: "Roboto", fontSize: "12px" }}
                >
                  {[
                    "Task No",
                    "Mtrl Code",
                    "Cust Mtrl",
                    "Operation",
                    "Status",
                  ].map((h) => {
                    return (
                      <th
                        className="custth"
                        style={{ fontFamily: "Roboto", fontSize: "12px" }}
                      >
                        {h}
                      </th>
                    );
                  })}
                </tr>
                {ordschtaskdata != null
                  ? ordschtaskdata.map((ordschtasks, id) =>
                      rendertbltasks(ordschtasks, id)
                    )
                  : ""}
              </table>
            </Col> */}
          </Row>
          <Row className="mt-2 mb-3">
            {/* <Col xs={12}>
              <Tabs
                defaultActiveKey="orddets"
                id="orderdetails"
                className="mb-3"
                style={{
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  padding: "1px 1px 1px 5px",
                }}
              >
                <Tab
                  eventKey="orddets"
                  title="Order Details Status"
                  style={{ fontFamily: "Roboto", fontSize: "12px" }}
                >
                  <Container>
                    <Row>
                      <Col
                        xs={12}
                        className="vscroll"
                        style={{ maxHeight: "320px" }}
                      >
                        <table
                          style={{
                            width: "100%",
                            fontFamily: "Roboto",
                            fontSize: "12px",
                          }}
                          className="custtable"
                        >
                          <tr
                            className="custtr"
                            style={{ fontFamily: "Roboto", fontSize: "12px" }}
                          >
                            {[
                              "Dwg Name",
                              "Operation",
                              "Mtrl Code",
                              "Source",
                              "Qty",
                              "Scheduled",
                              "Produced",
                              "Packed",
                              "Delivered",
                              "JWCost",
                              "MtrlCost",
                              "SrlStatus",
                            ].map((h) => {
                              return (
                                <th
                                  className="custth"
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: "12px",
                                  }}
                                >
                                  {h}
                                </th>
                              );
                            })}
                          </tr>
                          {orddetailsdata != null
                            ? orddetailsdata.map((orddetails) =>
                                rendertblOrdDets(orddetails)
                              )
                            : ""}
                        </table>
                      </Col>
                    </Row>
                  </Container>
                </Tab>
                <Tab
                  eventKey="invlist"
                  title="Invoice List"
                  style={{ fontFamily: "Roboto", fontSize: "12px" }}
                >
                  <Container>
                    <Row classnName="mt-2">
                      <Col
                        xs={8}
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          height: "300px",
                        }}
                        className="vscroll"
                      >
                        <table
                          style={{
                            width: "100%",
                            fontFamily: "Roboto",
                            fontSize: "12px",
                          }}
                          className="custtable"
                        >
                          <tr
                            className="custtr"
                            style={{ fontFamily: "Roboto", fontSize: "12px" }}
                          >
                            {
                              //  ["Inv Type", "Inv No", "Mtrl Inv Date", "Due Date", "Grand Total", "Amt. Received", "DC Inv No"].map(h => {
                              [
                                "Inv Type",
                                "Inv No",
                                "Mtrl Inv Date",
                                "Due Date",
                                "Grand Total",
                                "Amt. Received",
                              ].map((h) => {
                                return (
                                  <th
                                    className="custth"
                                    style={{
                                      fontFamily: "Roboto",
                                      fontSize: "12px",
                                    }}
                                  >
                                    {h}
                                  </th>
                                );
                              })
                            }
                          </tr>
                          {invoicelistdata != null
                            ? invoicelistdata.map((invlist, id) =>
                                rendertblInvList(invlist, id)
                              )
                            : ""}
                        </table>
                      </Col>
                      <Col
                        xs={4}
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          height: "300px",
                        }}
                        className="vscroll"
                      >
                        <table
                          style={{
                            width: "100%",
                            fontFamily: "Roboto",
                            fontSize: "12px",
                          }}
                          className="custtable"
                        >
                          <tr
                            className="custtr"
                            style={{ fontFamily: "Roboto", fontSize: "12px" }}
                          >
                            {[
                              "Dwg No",
                              "Mtrl",
                              "Qty",
                              "JW Rate",
                              "Mtrl Rate",
                            ].map((h) => {
                              return (
                                <th
                                  className="custth"
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: "12px",
                                  }}
                                >
                                  {h}
                                </th>
                              );
                            })}
                          </tr>
                          {invdwgdata != null
                            ? invdwgdata.map((invdwg) =>
                                rendertblInvDwg(invdwg)
                              )
                            : ""}
                        </table>
                      </Col>
                    </Row>
                  </Container>
                </Tab>
                <Tab
                  eventKey="schdets"
                  title="Schedule Details"
                  style={{ fontFamily: "Roboto", fontSize: "12px" }}
                >
                  <Container>
                    <Row classnName="mt-2">
                      <Col
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          height: "300px",
                          overflowX: "scroll",
                          overflowY: "scroll",
                        }}
                      >
                        <table
                          style={{
                            width: "100%",
                            fontFamily: "Roboto",
                            fontSize: "12px",
                          }}
                          className="custtable"
                        >
                          <tr
                            className="custtr"
                            style={{
                              width: "100%",
                              fontFamily: "Roboto",
                              fontSize: "12px",
                            }}
                          >
                            {[
                              "       Dwg Name         ",
                              "Mtrl Code",
                              "Operation",
                              "Source",
                              "Scheduled",
                              "Programmed",
                              "Produced",
                              "Inspected",
                              "Cleared",
                              "Packed",
                              "Delivered",
                              "Rejected",
                              "JWCost",
                              "MtrlCost",
                            ].map((h) => {
                              return (
                                <th
                                  className="custth"
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: "12px",
                                  }}
                                >
                                  {h}
                                </th>
                              );
                            })}
                          </tr>
                          {schdetsdata != null
                            ? schdetsdata.map((schdetails) =>
                                rendertblschDets(schdetails)
                              )
                            : ""}
                        </table>
                      </Col>
                    </Row>
                  </Container>
                </Tab>
                <Tab
                  eventKey="taskpartdets"
                  title="Task Part Details"
                  style={{ fontFamily: "Roboto", fontSize: "12px" }}
                >
                  <Container>
                    <Row classnName="mt-2">
                      <Col
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          height: "300px",
                        }}
                        className="vscroll"
                      >
                        <table
                          style={{
                            width: "100%",
                            fontFamily: "Roboto",
                            fontSize: "12px",
                          }}
                          className="custtable"
                        >
                          <tr
                            className="custtr"
                            style={{ fontFamily: "Roboto", fontSize: "12px" }}
                          >
                            {[
                              "Drawing",
                              "To Nest",
                              "Nested",
                              "Produced",
                              "Cleared",
                              "Remarks",
                            ].map((h) => {
                              return (
                                <th
                                  className="custth"
                                  style={{
                                    fontFamily: "Roboto",
                                    fontSize: "12px",
                                  }}
                                >
                                  {h}
                                </th>
                              );
                            })}
                          </tr>
                          {taskpartdetsdata != null
                            ? taskpartdetsdata.map((taskprtdets) =>
                                rendertbltaskprtDets(taskprtdets)
                              )
                            : ""}
                        </table>
                      </Col>
                    </Row>
                  </Container>
                </Tab>
              </Tabs>
            </Col> */}
          </Row>
        </Form>
      </div>
      {/* ----------------------------------------------------------------------------------------------------------------- */}
    </div>
  );
}

export default Order;
