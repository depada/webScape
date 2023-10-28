import React, { useContext, useState } from "react";
import { usePDF_Context } from "../context/PDF_Context";

const InputText = () => {
  const [linkTemp, setLinkTemp] = useState();
  const { links, updateLinks } = usePDF_Context();

  const handleUpdateLinks = (event) => {
    const linkText = event.target.value;
    setLinkTemp(linkText);
    const linksArr = linkText.split(",");
    console.log("linksArr ==>", linksArr);
    const linksArrFin = linksArr.filter((ele) => ele !== "");
    console.log("linksArrFin==>", linksArrFin);
    linksArrFin.map((ele) => ele.trim());
    updateLinks(linksArrFin);
  };

  return (
    <div>
      <input
        type="text"
        style={{
          width: "100%",
          height: 20,
          padding: 10,
          borderRadius: 20,
          border: "1px solid black",
        }}
        value={linkTemp}
        onChange={handleUpdateLinks}
      />
    </div>
  );
};

export default InputText;
