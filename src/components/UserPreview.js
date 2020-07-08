import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/actions";
function UserPreview() {
  const selectedContact = useSelector((state) => state.contact.selectedContact);
  const dispatch = useDispatch();
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
        <span>Name: {selectedContact.name}</span>
        <span>#: {selectedContact.number} </span>
        <button onClick={() => dispatch(deleteContact(selectedContact))}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserPreview;
