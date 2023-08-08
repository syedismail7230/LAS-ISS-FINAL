import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Flex } from "rebass";

import "./App.css";
import { MagnifyingGlass } from "react-loader-spinner";
import StudentCard from "./StudentCard";

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchId, setSearchId] = useState("");
  const { id } = useParams(); // Access the ID from the URL

  useEffect(() => {
    // Fetch the data from the API using axios (Replace 'apiUrl' with the actual API endpoint)
    axios
      .get(
        "https://script.googleusercontent.com/macros/echo?user_content_key=5kMhNvyQ5fm4kPWSAqlw5fN2LQEhpi-ibwxvRgBGjwHLTodhkmx_jxo40lB6p2b8pVUqgx0tGazLph04FGUyaG_YI34he3afm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGA7L2LWdTuxhS1rq0QFqr_o6E9NBwPz8nVTIrMcwxEozD5utA57mI2eA0qOv6s2ERMVoBd6PFKt-hKB8zI1JspJdaU-6S-Dvw&lib=MmJX-JwsP3N7VOPt-QC53ZXXtad7F4Vk4"
      )
      .then((response) => {
        console.log("API Response:", response.data); // Check the API response in the console
        setData(response.data.data); // Assuming the data is available as 'data' property in the API response
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Filter and count the data based on the ID from the URL
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
    console.log("Filtered Data:", filtered); // Check the filtered data in the console
    setFilteredData(filtered);
  }, [id, data]);

  const handleSearchChange = (event) => {
    const inputId = event.target.value;
    setSearchId(inputId);

    if (!inputId) {
      setFilteredData(data); // Reset to all data when the search bar is empty
    } else {
      const filtered = data.filter(
        (item) => item.usn.toLowerCase() === inputId.toLowerCase()
      );
      console.log("Filtered Data:", filtered); // Check the filtered data in the console
      setFilteredData(filtered);
      return filtered;
      console.log(typeof filtered);
    }
  };

  const addReward = () => {
    const studentData = filteredData[0];
    const name = studentData.name.split(" ").join("");
    const usn = studentData.usn;
    const dept = studentData.department.replace(/&/g, "%26");
    // CHANGE THE BASE LINK
    const baseLink = `https://docs.google.com/forms/d/e/1FAIpQLSctaDI3JDAJRCRvn4S3J1r-Fovts71P0yYNmcunTFHI44jQaA/formResponse?usp=pp_url&entry.195016870=${usn}&entry.2059370101=${name}&entry.1986016935=AI%26ML&submit=Submit`;
    // window.location.href = baseLink;
    console.log(baseLink);
    console.log(typeof name);
    console.log(dept);
    console.log("Normal department" + studentData.department);
    console.log(name);

    const adminPassword = prompt("Enter the password ");

    if (adminPassword === "fireafrozsir") {
      window.location.href = baseLink;
    } else {
      alert("Don't poke where you're not supposed to 🌚");
    }
  };

  return (
    <Box className="body-container" p={4}>
      <Flex flexWrap="wrap" className="card-container">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <StudentCard
              key={index}
              name={item.name}
              usn={item.usn}
              dept={item.department}
              count={item.count}
              handleReward={addReward}
              // link={addReward}
            />
            // <Card
            //   width={250}
            //   m={2}
            //   p={3}
            //   className="card"
            //   sx={{ borderRadius: "15px" }}
            // >
            //   <div
            //     className="mt-3 mb-4"
            //     style={{
            //       backgroundColor: "white",
            //       borderRadius: "12px",
            //     }}
            //   >
            //     <img
            //       src="https://cdn.discordapp.com/attachments/1121100423818907739/1134027557168238712/absurd.design_-_Chapter_1_-_05.png"
            //       alt="Profile"
            //       className="rounded-circle"
            //       style={{ width: "100px" }}
            //     />
            //   </div>
            //   <Heading fontSize={2}>
            //     <strong>Name:</strong> {item.name}
            //   </Heading>
            //   <Text>
            //     <strong>USN:</strong> {item.usn}
            //   </Text>
            //   <Text>
            //     <strong>Department:</strong> {item.department}
            //   </Text>
            //   <Text>
            //     <strong>Score:</strong> {item.count}
            //   </Text>
            //   <Flex justifyContent="center" mt={3}>
            //     <Button
            //       onClick={console.log("DUMDUM")}
            //       style={{ color: "black" }}
            //     >
            //       Reward Student
            //     </Button>
            //   </Flex>
            // </Card>
          ))
        ) : (
          <div className="no-result">
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          </div>
        )}
      </Flex>
    </Box>
  );
};

export default DataDisplay;
