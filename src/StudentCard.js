import React from "react";
import { Button, Card, Flex, Text } from "rebass";

function StudentCard({ name, usn, dept, count, handleReward }) {
  return (
    <Card
      width={250}
      m={2}
      p={3}
      className="card"
      sx={{ borderRadius: "15px" }}
    >
      <div
        className="mt-3 mb-4"
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
        }}
      >
        <img
          src="https://cdn.discordapp.com/attachments/1121100423818907739/1134027557168238712/absurd.design_-_Chapter_1_-_05.png"
          alt="Profile"
          className="rounded-circle"
          style={{ width: "100px" }}
        />
      </div>
      <Text>
        <strong>Name:</strong> {name}
      </Text>
      <Text>
        <strong>USN:</strong> {usn}
      </Text>
      <Text>
        <strong>Department:</strong> {dept}
      </Text>
      <Text>
        <strong>Score:</strong> {count}
      </Text>
      <Flex justifyContent="center" mt={3}>
        {/* <a target="_blank" rel="noopener noreferrer"> */}
        <Button
          style={{
            backgroundColor: "white",
            color: "black",
          }}
          onClick={handleReward}
          variant="secondary"
        >
          Reward Student
        </Button>
        {/* </a> */}
      </Flex>
    </Card>
  );
}

export default StudentCard;
