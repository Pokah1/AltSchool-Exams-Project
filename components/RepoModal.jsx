// RepoModal.jsx
import React, { useState } from "react";

const RepoModal = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreate({ name, description });

    setName("");
    setDescription("");
  };

  return (
    <div>
      <h2>Create New Repository</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Repository Name"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        ></textarea>
        <button type="submit">Create Repository</button>
      </form>
    </div>
  );
};

export default RepoModal;
