import React, { useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { usePDF_Context } from "../context/PDF_Context";

const ExportExcel = () => {
  const { scrapedData, links } = usePDF_Context();
  const [showTable, setShowTable] = useState(false);
  const tableRef = useRef(null);
  console.log("scrapedData==>", scrapedData);
  let tableData = [
    {
      textTitle: "Victory Bar & Restaurant",
      phoneText: "099599 97491",
    },
    {
      textTitle: "Golden Eagle Restaurant & Bar",
      phoneText: "078160 19600",
    },
    {
      textTitle: "mayuri bar restaurant",
      phoneText: "077999 77747",
    },
    {
      textTitle: "Sri Lakshmi Restaurant and Bar",
      phoneText: "074198 66245",
    },
    {
      textTitle: "Food Court",
      phoneText: "083090 52198",
    },
    {
      textTitle: "Mirchi Point",
      phoneText: "099123 84287",
    },
    {
      textTitle: "FROTH - The Cafe Bar",
      phoneText: "086989 60991",
    },
    {
      textTitle: "36 Downtown Brew Pub",
      phoneText: "073311 17740",
    },
    {
      textTitle: "Beer House Bar & Restaurant",
      phoneText: "040 2414 9999",
    },
    {
      textTitle: "Joy N Joy Bar And Restaurant",
      phoneText: "093910 79121",
    },
    {
      textTitle: "Zero40 Brewing",
      phoneText: "073308 40040",
    },
    {
      textTitle: "Prost",
      phoneText: "091009 21161",
    },
    {
      textTitle: "Micro brewery in Hyderabad",
      phoneText: "1800 4252 0000",
    },
    {
      textTitle: "Nine O Nine",
      phoneText: "091339 09909",
    },
    {
      textTitle: "Big Spice Bar And Restaurant",
      phoneText: "080198 44888",
    },
    {
      textTitle: "Heaven Villa Bar And Restaurant",
      phoneText: "090000 90458",
    },
    {
      textTitle: "Repete Brewery & Kitchen",
      phoneText: "091210 11965",
    },
    {
      textTitle: "Broadway The Brewery",
      phoneText: "091333 16699",
    },
    {
      textTitle: "Sruthi Restaurant & Bar",
      phoneText: "040 2403 0511",
    },
    {
      textTitle: "Over The Flow",
      phoneText: "092481 94446",
    },
    {
      textTitle: "Sri Good Day Restaurant and Bar",
      phoneText: "099083 91912",
    },
    {
      textTitle: "Mallikarjuna Restaurant & Bar",
      phoneText: "098497 60337",
    },
    {
      textTitle: "Bar One Bar And Restaurant",
      phoneText: "079976 80999",
    },
    {
      textTitle: "Narendra Restaurant & Bar",
      phoneText: "093914 53777",
    },
    {
      textTitle: "The Hoppery",
      phoneText: "095731 17862",
    },
    {
      textTitle: "Papaiah Goud Pan Shop",
      phoneText: "091771 35507",
    },
  ];

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  const genTable = (arrObj) => {
    console.log("table transform initiated");
    console.log("arrObj==>", arrObj);
    // Generate the table content here.
    return (
      <table ref={tableRef}>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((ele, i) => {
            // console.log("ele==<", ele);
            return (
              <tr key={i}>
                <td>{ele?.textTitle}</td>
                <td>{ele?.phoneText}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={toggleTable} className="btn animated-btn">
        Generate Table
      </button>

      <div>{showTable && genTable(scrapedData)}</div>
      <div>
        {tableRef && (
          <DownloadTableExcel
            filename={`${links}_data`}
            sheet={`${links}_data`}
            currentTableRef={tableRef.current}
          >
            <button> Export excel </button>
          </DownloadTableExcel>
        )}
      </div>
    </div>
  );
};

export default ExportExcel;
