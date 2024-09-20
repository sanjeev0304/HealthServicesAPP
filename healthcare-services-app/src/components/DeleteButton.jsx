import React from "react";

const DeleteButton = ({ index, deleteService }) => {
  return (
    <button className="btn-delete" onClick={() => deleteService(index)}>
      Delete
    </button>
  );
};

export default DeleteButton;
