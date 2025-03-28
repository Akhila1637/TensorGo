import { useEffect, useState } from "react";
import { fetchRequests } from "../api"; // Import API function

const ServiceRequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    const data = await fetchRequests();
    setRequests(data);
  };

  return (
    <div>
      <h2>Submitted Service Requests</h2>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <ul>
          {requests.map((request) => (
            <li key={request._id}>
              <strong>{request.title}</strong> - {request.category}
              <p>{request.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceRequestList;
