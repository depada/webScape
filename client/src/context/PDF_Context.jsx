import { createContext, useState, useContext } from "react";

const PDF_Context = createContext();

export const usePDF_Context = () => {
  return useContext(PDF_Context);
};

export const PDF_Context_Provider = ({ children }) => {
  const [links, setLinks] = useState();
  const [scrapedData, setScrapedData] = useState();

  const updateLinks = (links) => setLinks(links);
  const updateScrapedData = (newData) => setScrapedData(newData);

  return (
    <PDF_Context.Provider
      value={{ links, updateLinks, scrapedData, updateScrapedData }}
    >
      {children}
    </PDF_Context.Provider>
  );
};
