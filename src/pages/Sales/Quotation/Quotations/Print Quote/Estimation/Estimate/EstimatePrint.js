import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import EstimationTable from "./EstimationTable";

import { useLocation } from 'react-router-dom';

const { getRequest, postRequest } = require("../../../../../../api/apiinstance");
const { endpoints } = require("../../../../../../api/constants");

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

export default function EstimationPrint({ EstData }) {
  // const location = useLocation();

  // let selectedWeek=location.state.selectedWeek;
  //  console.log("to pass",selectedWeek);

  // const newData1 = [
  //   [{
  //     ShiftIc: "Kumar N",
  //     Shift: "First",
  //     day: "20-01-2023",
  //     machineOperators: [
  //       {
  //         Machine: "Laser 1",
  //         Operator: "Operator 1"
  //       },
  //       {
  //         Machine: "Laser 2",
  //         Operator: "Operator 2"
  //       },
  //       {
  //         Machine: "Laser 3",
  //         Operator: "Operator 3"
  //       },

  //     ]
  //   },
  //   {
  //     ShiftIc: "Shashidhara",
  //     Shift: "Second",
  //     day: "20-01-2023",
  //     machineOperators: [
  //       {
  //         Machine: "Laser 4",
  //         Operator: "Operator 4"
  //       },
  //       {
  //         Machine: "Laser 5",
  //         Operator: "Operator 5"
  //       },
  //       {
  //         Machine: "Laser 6",
  //         Operator: "Operator 6"
  //       },

  //     ]
  //   },
  //   {
  //     ShiftIc: "Mahesh Bogan",
  //     Shift: "Third",
  //     day: "20-01-2023",
  //     machineOperators: [
  //       {
  //         Machine: "Laser 7",
  //         Operator: "Operator 7"
  //       },
  //       {
  //         Machine: "Laser 8",
  //         Operator: "Operator 8"
  //       },
  //       {
  //         Machine: "Laser 9",
  //         Operator: "Operator 9"
  //       },

  //     ]
  //   }], [
  //     {
  //       ShiftIc: "Kumar N",
  //       Shift: "First",
  //       day: "21-01-2023",
  //       machineOperators: [
  //         {
  //           Machine: "Laser 1",
  //           Operator: "Operator 1"
  //         },
  //         {
  //           Machine: "Laser 2",
  //           Operator: "Operator 2"
  //         },
  //         {
  //           Machine: "Laser 3",
  //           Operator: "Operator 3"
  //         },

  //       ]
  //     },
  //     {
  //       ShiftIc: "Shashidhara",
  //       Shift: "Second",
  //       day: "21-01-2023",
  //       machineOperators: [
  //         {
  //           Machine: "Laser 4",
  //           Operator: "Operator 4"
  //         },
  //         {
  //           Machine: "Laser 5",
  //           Operator: "Operator 5"
  //         },
  //         {
  //           Machine: "Laser 6",
  //           Operator: "Operator 6"
  //         },

  //       ]
  //     },
  //     {
  //       ShiftIc: "Mahesh Bogan",
  //       Shift: "Third",
  //       day: "21-01-2023",
  //       machineOperators: [
  //         {
  //           Machine: "Laser 7",
  //           Operator: "Operator 7"
  //         },
  //         {
  //           Machine: "Laser 8",
  //           Operator: "Operator 8"
  //         },
  //         {
  //           Machine: "Laser 9",
  //           Operator: "Operator 9"
  //         },

  //       ]
  //     }
  //   ]
  // ]

  const data = {
    id: "5df3180a09ea16dc4b95f910",
    items: [
      {
        Machine: "Laser 1",
        Operator: "Suresh A",
        ShiftRemarks: "",
      },
      {
        Machine: "Laser 6",
        Operator: "Deepak",
        ShiftRemarks: ""
      },
      {
        Machine: "Laser 8",
        Operator: "Shreyas K",
        ShiftRemarks: ""
      }
    ],
  };

 // Call from API
 console.log(EstData);
  let [newData, setNewdata] = useState({});
  //let [loaded, setLoaded] = useState(false);

  // const getEstimatePrint = () => {
  //   postRequest(endpoints.getQtnPrintEstmnDets, { qtnno: QtnNo }, async (qtnidchk) => {
  //     console.log(qtnidchk);
  //     setNewdata(qtnidchk);
  //   });
  // }
  //setNewdata(EstData);
  // newData = "";
  // newData = EstData;

  useEffect(() => {
   // getEstimatePrint();
  //  if(!loaded){
  //    let d = EstData["qtnprof"];
  //    let dacc = {};
  //     let groupedData = d.reduce((acc, item) => {
  //       const taskNo = item.TaskNo;
  //       dacc[taskNo] = dacc[taskNo] || [];
  //       dacc[taskNo].push(item);
  //       return dacc;
  //     });
  //     console.log(groupedData);
  //     EstData["qtnprof"] = groupedData;
      setNewdata(EstData);
  //    setLoaded(true);
 //  }
  }, []);

  return (

    <Fragment>
      <PDFViewer width="1200" height="600" filename="somename.pdf">
        {Object.keys(newData).length > 0 &&
          <EstimationTable  //data={data}
            newData={newData}
          />
        }
      </PDFViewer>
    </Fragment>
  );

}
