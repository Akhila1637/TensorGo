import React, { useState } from "react";
import { addUser } from "../api";

const UserForm = ({ onUserAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }

    const newUser = { name, email };
    const addedUser = await addUser(newUser);

    if (addedUser) {
      alert("User added successfully!");
      setName("");
      setEmail("");
      onUserAdded(); // Refresh user list
    } else {
      alert("Failed to add user.");
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" color="black">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
