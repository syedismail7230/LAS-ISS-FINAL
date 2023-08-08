import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
const DataContext = createContext();

// Custom data provider component
const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from the API using axios (Replace 'apiUrl' with the actual API endpoint)
    axios
      .get(
        "https://script.googleusercontent.com/macros/echo?user_content_key=5kMhNvyQ5fm4kPWSAqlw5fN2LQEhpi-ibwxvRgBGjwHLTodhkmx_jxo40lB6p2b8pVUqgx0tGazLph04FGUyaG_YI34he3afm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGA7L2LWdTuxhS1rq0QFqr_o6E9NBwPz8nVTIrMcwxEozD5utA57mI2eA0qOv6s2ERMVoBd6PFKt-hKB8zI1JspJdaU-6S-Dvw&lib=MmJX-JwsP3N7VOPt-QC53ZXXtad7F4Vk4"
      ) // Replace 'apiUrl' with the actual API endpoint
      .then((response) => {
        console.log("API Response:", response.data); // Check the API response in the console
        setData(response.data.data); // Assuming the data is available as 'data' property in the API response
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export { DataContext, DataProvider };
