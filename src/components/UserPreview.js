import React from "react";

function UserPreview() {
  return (
    <div style={{ border: "1px solid black", padding: 10, width: 420 }}>
      <h2>PREVIEW</h2>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          padding: 10,
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <span>Name: Martin Raquion</span>
        <span>#: 1 </span>
      </div>
    </div>
  );
}

export default UserPreview;
