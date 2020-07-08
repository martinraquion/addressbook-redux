import React from "react";
import ContactContainer from "./ContactContainer";
import UserPreview from "./UserPreview";
import GroupsContainer from "./GroupsContainer";

function AddressbookContainer() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <h1>Address Book</h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <ContactContainer />
        <UserPreview />
        <GroupsContainer />
      </div>
    </div>
  );
}

export default AddressbookContainer;
