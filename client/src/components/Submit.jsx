import React, { useRef, useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { usePDF_Context } from "../context/PDF_Context";

const ExportExcel = () => {
  const { scrapedData, links } = usePDF_Context();
  const [showTable, setShowTable] = useState(false);
  const tableRef = useRef(null);
  console.log("scrapedData==>", scrapedData);
  let tableData = [
    [
      {
        textTitle: "Pind Balluchi",
        phoneText: "082470 14959",
      },
      {
        textTitle: "Tabla Restaurant & Banquet",
        phoneText: "040 2389 3399",
      },
      {
        textTitle: "Hunger's Choice Multicuisine Restaurant",
        phoneText: "063055 21329",
      },
      {
        textTitle: "Barbeque Nation - Kukatpally",
        phoneText: "091212 23361",
      },
      {
        textTitle: "PanchaBhakshya",
        phoneText: "088865 45645",
      },
      {
        textTitle: "Vintage Restaurant",
        phoneText: "088856 99994",
      },
      {
        textTitle: "Chaitanya Family Restaurant And Bar",
        phoneText: "092463 67222",
      },
      {
        textTitle: "Hyderabad Chefs",
        phoneText: "072070 83535",
      },
      {
        textTitle: "TGI Fridays",
        phoneText: "040 6768 4205",
      },
      {
        textTitle: "Maa Ooru Biryani",
        phoneText: "084658 16845",
      },
      {
        textTitle: "Chutneys",
        phoneText: "083747 48484",
      },
      {
        textTitle: "Platform 65 - The Train Theme Restaurant - KPHB",
        phoneText: "091541 31340",
      },
      {
        textTitle: "Khandani Rajdhani",
        phoneText: "040 3053 4131",
      },
      {
        textTitle: "Spicy Xpress &Soda Station",
        phoneText: "099660 03035",
      },
      {
        textTitle: "Srikanya Comfort Restaurant, KPHB",
        phoneText: "090555 26666",
      },
      {
        textTitle: "Punjabi Parotha House",
        phoneText: "085550 38935",
      },
      {
        textTitle: "Madhura",
        phoneText: "085009 65977",
      },
    ],
    [
      {
        textTitle: "Madhura",
        phoneText: "085009 65977",
      },
      {
        textTitle: "Teluginti Ruchulu",
        phoneText: "096668 79566",
      },
      {
        textTitle: "Pondy Parottas",
        phoneText: "081860 04000",
      },
      {
        textTitle: "Raju Gari Biryani",
        phoneText: "080199 91610",
      },
      {
        textTitle: "Santosh Dhaba Exclusive",
        phoneText: "040 6618 7887",
      },
      {
        textTitle: "Hotel Sri Nandini",
        phoneText: "040 4028 1117",
      },
      {
        textTitle: "Tripura Bar & Restaurant",
        phoneText: "040 6649 2772",
      },
      {
        textTitle: "Anubhav's Restaurant",
        phoneText: "095400 16985",
      },
      {
        textTitle: "Pandhem Kodi Pakasala Multicusine Restaurant",
        phoneText: "097686 48888",
      },
      {
        textTitle: "Udipi's Upahar KPHB",
        phoneText: "098666 63156",
      },
      {
        textTitle: "Gismat Jail Mandi KPHB",
        phoneText: "094936 71222",
      },
      {
        textTitle: "MODEL RYTHU CHICKEN BAZAR",
        phoneText: "090300 46552",
      },
      {
        textTitle: "Hyderabad Chefs",
        phoneText: "072072 82525",
      },
      {
        textTitle: "Pista House Kukatpally",
        phoneText: "093926 73485",
      },
    ],
    [
      {
        textTitle: "Hotel Mayukha Multi Cuisine Restaurant & Banquet Halls",
        phoneText: "080082 22931",
      },
      {
        textTitle: "Millet Kitchen",
        phoneText: "091888 02888",
      },
      {
        textTitle: "Flechazo Kukatpally",
        phoneText: "093929 18941",
      },
      {
        textTitle: "Pista House Kukatpally",
        phoneText: "093965 00786",
      },
      {
        textTitle: "Honey Bees Restaurant",
        phoneText: "078010 80990",
      },
      {
        textTitle: "Hotel Mayukha Jungle Theme Restaurant - KPHB",
        phoneText: "089779 33805",
      },
      {
        textTitle: "Sai Food Point",
        phoneText: "092480 36116",
      },
      {
        textTitle: "Kinnera Tiffins",
        phoneText: "099088 70779",
      },
      {
        textTitle: "Krishnapatnam",
        phoneText: "091696 93344",
      },
      {
        textTitle: "Rajdhani Thali Restaurant",
        phoneText: "040 3053 4132",
      },
      {
        textTitle: "Babai Hotel",
        phoneText: "090003 58000",
      },
      {
        textTitle: "The Nosh Bistro Kukatpally",
        phoneText: "088788 72666",
      },
      {
        textTitle: "Gappe Vappe",
        phoneText: "040 2315 2055",
      },
      {
        textTitle: "Taco Bell",
        phoneText: "080107 80107",
      },
    ],
    [
      {
        textTitle: "IDLEE TREE",
        phoneText: "097059 65555",
      },
      {
        textTitle: "McDonald's",
        phoneText: "089282 12246",
      },
      {
        textTitle: "Subbayya Gari Hotel - KPHB",
        phoneText: "088975 64242",
      },
      {
        textTitle: "Raja Rani Ruchulu Restaurant",
        phoneText: "099666 26000",
      },
      {
        textTitle: "Melting Momo's & More",
        phoneText: "080938 67543",
      },
      {
        textTitle: "Abhiruchi",
        phoneText: "096405 09999",
      },
      {
        textTitle: "Blue Jay Family Restaurant",
        phoneText: "095777 34999",
      },
      {
        textTitle: "Mehfil Restaurant",
        phoneText: "081210 20121",
      },
      {
        textTitle: "Haldiram's",
        phoneText: "070300 00146",
      },
      {
        textTitle: "cuber restaurant pvt ltd",
        phoneText: "091007 70726",
      },
      {
        textTitle: "Freshfit Eatery",
        phoneText: "096660 15763",
      },
      {
        textTitle: "Sandwich Eatery",
        phoneText: "083673 76737",
      },
      {
        textTitle: "Rajahmundry Ruchulu",
        phoneText: "099123 44459",
      },
      {
        textTitle: "Burger King",
        phoneText: "040 3053 4118",
      },
    ],
    [
      {
        textTitle: "TMR’s Kitchen",
        phoneText: "078158 14554",
      },
      {
        textTitle: "Pizza Hut",
        phoneText: "1800 202 2022",
      },
      {
        textTitle: "Wander - Shawarma and Momo (KPHB Phase 3)",
        phoneText: "090100 11423",
      },
      {
        textTitle: "Mahesh Tiffins",
        phoneText: "096182 41223",
      },
      {
        textTitle: "Destination Cafe",
        phoneText: "098666 86646",
      },
      {
        textTitle: "Tibbs Frankie",
        phoneText: "092468 78121",
      },
      {
        textTitle: "Haldiram's",
        phoneText: "0712 277 9451",
      },
      {
        textTitle: "Biryani culture",
        phoneText: "080749 70773",
      },
      {
        textTitle: "Burger's Wharf",
        phoneText: "097008 06527",
      },
    ],
    [
      {
        textTitle: "Amogham - The Takeaway",
        phoneText: "063006 91117",
      },
      {
        textTitle: "California Burrito Mexican Grill @ Nexus Hyderabad Mall",
        phoneText: "080 4709 1118",
      },
      {
        textTitle: "Zomoz - The Momo Company",
        phoneText: "081065 12127",
      },
      {
        textTitle: "Domino's Pizza",
        phoneText: "1800 208 1234",
      },
      {
        textTitle: "Sherlock's - Lounge & Kitchen Hyderabad",
        phoneText: "094928 42345",
      },
      {
        textTitle: "Satti Babu Biryani",
        phoneText: "096582 11234",
      },
      {
        textTitle: "Barkaas Indo Arabic Restaurant",
        phoneText: "090325 55483",
      },
      {
        textTitle: "Cafe cupz",
        phoneText: "090322 71147",
      },
      {
        textTitle: "Hotel Sitara Grand",
        phoneText: "092468 05551",
      },
    ],
    [
      {
        textTitle: "BCB FOOD COURT",
        phoneText: "085559 26197",
      },
      {
        textTitle: "Vaibhav’S Kitchen- Multi cuisine Restaurant",
        phoneText: "093477 93907",
      },
      {
        textTitle: "HUNGER HUB Restaurant",
        phoneText: "070933 36262",
      },
      {
        textTitle: "MOGHULS PARADIEZ RESTAURANT & BANQUET HALLS",
        phoneText: "091001 24477",
      },
      {
        textTitle: "The Big Bean, Bakery & Cafe",
        phoneText: "095730 00096",
      },
      {
        textTitle: "Robo Headquaters",
        phoneText: "088066 11999",
      },
      {
        textTitle: "Ghumaghumalu",
        phoneText: "040 3257 8098",
      },
      {
        textTitle: "Deccan Durbar Restaurant",
        phoneText: "040 2307 7110",
      },
      {
        textTitle: "BhookmarK",
        phoneText: "081439 81074",
      },
      {
        textTitle: "Sevenelvan Food Court",
        phoneText: "099668 10005",
      },
      {
        textTitle: "Meals",
        phoneText: "099890 60818",
      },
      {
        textTitle: "Babai Oo Biryani",
        phoneText: "096767 96358",
      },
    ],
    [
      {
        textTitle: "MealBoys",
        phoneText: "040 6455 4555",
      },
      {
        textTitle: "RAMESH FOODS",
        phoneText: "095732 54002",
      },
      {
        textTitle: "RestoBell",
        phoneText: "093901 07159",
      },
      {
        textTitle: "Licence 2grill",
        phoneText: "098661 51818",
      },
      {
        textTitle: "Shanmukh",
        phoneText: "080742 34725",
      },
      {
        textTitle: "Dosa Empire",
        phoneText: "404069596666",
      },
      {
        textTitle: "Shirisha Foods",
        phoneText: "099518 34050",
      },
      {
        textTitle: "ANURADHA TIFFINS",
        phoneText: "084989 38941",
      },
    ],
  ];
  const flattenedArray =
    tableData &&
    tableData.reduce((accumulator, currentArray) => {
      return accumulator.concat(currentArray);
    }, []);

  // console.log("flattenedArr==>", flattenedArray);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  const genTable = (arrObj) => {
    console.log("table transform initiated");
    console.log("arrObj==>", flattenedArray);
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
          {flattenedArray?.map((ele, i) => {
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
