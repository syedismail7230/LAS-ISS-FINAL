import { useEffect, useState } from "react";

const useDataFilter = (data, id) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const groupedData = data.reduce((acc, item) => {
      if (!acc[item.usn]) {
        acc[item.usn] = { ...item, count: 1 };
      } else {
        acc[item.usn].count++;
      }
      return acc;
    }, {});
    const filtered = Object.values(groupedData).filter(
      (item) => item.usn === id
    );
    setFilteredData(filtered);
  }, [id, data]);

  return filteredData;
};

export default useDataFilter;
