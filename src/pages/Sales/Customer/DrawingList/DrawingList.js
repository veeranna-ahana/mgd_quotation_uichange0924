import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Table,
  Row,
  Col,
  FormLabel,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Tables from "../../../../components/Tables.js";
import { data } from "./data.js";
import { toast } from "react-toastify";
import { Typeahead } from "react-bootstrap-typeahead";

//import { getCustomers, drawingsCustomer } from '../../../api/apiconn';
const { getRequest, postRequest } = require("../../../api/apiinstance");
const { endpoints } = require("../../../api/constants");

function DrawingList() {
  // for accessing object keys
  const getHeadings = () => {
    return Object.keys(data[0]);
  };

  let navigate = useNavigate();
  let [CustName, setCustName] = useState([]);
  let [custdata, setCustdata] = useState([]);
  let [custcode, setCustCode] = useState("");
  let [custdwgdata, setCustDwgdata] = useState([]);
  // let [custdetdatafiltered, setCustDetdatafiltered] = useState([]);

  let customerMenu = () => {
    window.location.href = "/customer";
  };

  useEffect(() => {
    async function getCustomersdata() {
      postRequest(endpoints.getCustCodeName, {}, (data) => {


 for (let i = 0; i < data.length; i++) {
          data[i].label = data[i].Cust_name;
        }
        setCustdata(data);
      });
    }
    getCustomersdata();
    // getCustomers(data => {
    //     setCustdata(data);
    // });
  }, []);

  let selectCust = async (evt) => {
    //    e.preventDefault();

    // let custdet = evt.target.value.replace(/[^A-Za-z0-9. ]/gi, "");
    // if ((custdet.includes("..")) || (custdet == null) || (custdet == "")) {
    //     alert('Please enter Customer Name ..');
    //     return;
    // }
    // //    e.preventDefault();
    // let cdet = custdet.substring(0, 4)
    // console.log(cdet);
    // setCustCode(custdet.substring(0, 4));
    // custcode = custdet.substring(0, 4);
    // //     console.log("cust code : "+custcode);
    // postRequest(endpoints.drawingsCustomer, {
    //     custcode: custdet.substring(0, 4),
    // }, (data) => {
    //     setCustDwgdata(data);
    // });

    console.log("cust data = ", evt);
    console.log("cust code = ", evt[0].Cust_Code);
    console.log("table customer = ", custdata);
    let cust;
    for (let i = 0; i < custdata.length; i++) {
      if (custdata[i]["Cust_Code"] === evt[0].Cust_Code) {
        cust = custdata[i];
        break;
      }
    }
    // console.log(cust.Cust_Code);
    setCustCode(cust.Cust_Code);
    postRequest(
      endpoints.drawingsCustomer,
      { custcode: cust.Cust_Code },
      (data) => {
        setCustDwgdata(data);
      }
    );
    // drawingsCustomer({
    //     custcode: cust.Cust_Code,
    // }, async (resp) => {
    //     console.log(resp)
    //     setCustDwgdata(resp)
    // })
  };

  let rendertable = (custdwg) => {
    return (
      <tr className="custtr">
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {custdwg["Dwg_Code"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
          hidden
        >
          {custdwg["Cust_Code"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {custdwg["DwgName"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {custdwg["Mtrl_Code"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {custdwg["DxfLoc"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px" }}
        >
          {custdwg["Operation"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {custdwg["MtrlCost"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {custdwg["JobWorkCost"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {custdwg["LOC"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {custdwg["Holes"]}
        </td>
        <td
          className="custtd"
          style={{ fontFamily: "Roboto", fontSize: "12px", textAlign: "right" }}
        >
          {custdwg["Weight"]}
        </td>
      </tr>
    );
  };

  return (
    <div>
      <h4 className="title">Profile Drawing List</h4>
      {/* <hr className="horizontal-line" /> */}

      <div className="form-style table_top_style">
        <form>
          <div className="row mt-3">
            <div className="col-md-4 ">
              <label className="form-label">Name
              </label>
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
                //   className="ip-select mt-1 "
                //   controlId="CustName"
                //   onChange={selectCust}
                // >
                //   <option value="" disabled selected>
                //     {" "}
                //     Select Customer{" "}
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
            </div>
            <div className="col-md-4 col-sm-12">
              {/* <label className="">Branch</label> */}
              <label className="form-label">Cust Code</label>
              <Form.Control id="custcode" type="text" value={custcode} />
            </div>
            <div className="col-md-4 col-sm-12 mt-4">
              <button
                className="button-style"
                type="submit"
                onClick={() => navigate("/customer")}
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* for table */}
      <div>
        {/* <Tables theadData={getHeadings()} tbodyData={data} /> */}
        <div className="row">
          <div
            className="table-data"
            style={{ height: "350px", overflowY: "scroll" }}
          >
            <Table striped className="table-data border">
              <thead className="tableHeaderBGColor">
                <tr
                  className="custtr"
                  // style={{ fontFamily: "Roboto", fontSize: "12px" }}
                >
                  {[
                    "Dwg Code",
                    "Dwg Name",
                    "Mtrl Code",
                    "Dxf Location",
                    "Operation",
                    "Material Cost",
                    "Jobwork Cost",
                    "LOC",
                    "Holes",
                    "Weight",
                  ].map((h) => {
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
              <tbody className="tablebody ">
                {custdwgdata != null
                  ? custdwgdata.map((custdwg) => rendertable(custdwg))
                  : ""}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawingList;
