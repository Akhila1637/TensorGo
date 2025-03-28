import { useState } from "react";
import { addRequest } from "../api";

const ServiceRequestForm = ({ userId, onRequestAdded }) => {  // Accept onRequestAdded as prop
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId || !category || !description) {
      alert("Please fill all fields");
      console.error("Missing Fields:", { userId, category, description });
      return;
    }

    const requestData = { userId, category, description };
    console.log("Submitting Request:", requestData); 

    try {
      const result = await addRequest(requestData);
      if (result) {
        alert(" Request submitted successfully!");
        setCategory("");
        setDescription("");
        
        if (onRequestAdded) {
          onRequestAdded(); // Call onRequestAdded to refresh UI
        }
      } else {
        alert("Failed to submit request");
      }
    } catch (error) {
      console.error(" Error submitting request:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="General">General</option>
        <option value="Feature">Feature</option>
        <option value="Pricing">Pricing</option>
        <option value="Implementation">Implementation</option>
      </select>

      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

      <button type="submit">Submit Request</button>
    </form>
  );
};

export default ServiceRequestForm;
