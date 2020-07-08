import React from "react";

function GroupsContainer() {
  return (
    <div style={{ border: "1px solid black", padding: 10, width: 350 }}>
      <h2>GROUP</h2>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          padding: 10,
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <span>GROUP 1</span>
      </div>
    </div>
  );
}

export default GroupsContainer;
