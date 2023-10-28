import React, { useState } from "react";
import { usePDF_Context } from "../context/PDF_Context";

const Generate_Ans = () => {
  const { links, updateScrapedData } = usePDF_Context();

  function removeDuplicateElements(array) {
    const uniqueArray = array.filter((item, index, self) => {
      return (
        index ===
        self.findIndex(
          (t) =>
            t.textTitle === item.textTitle && t.phoneText === item.phoneText
        )
      );
    });

    return uniqueArray;
  }

  const handleOpenLinks = () => {
    const sanitizedLinks = links.map((link) => {
      return link;
    });

    fetch("http://localhost:3000/open-links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ links: sanitizedLinks }),
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        console.log("Response Data:", data);

        const uniqueData = removeDuplicateElements(data["uniqueExtractedData"]);
        updateScrapedData(uniqueData); // Log the parsed data
        // If you want to update state with the data, you can call your updateScrapedData function here.
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <button onClick={handleOpenLinks} className="btn animated-btn">
      Open Links
    </button>
  );
};

export default Generate_Ans;
