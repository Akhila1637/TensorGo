import React, { useState, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import ServiceRequestForm from "./components/ServiceRequestForm";
import ServiceRequestList from "./components/ServiceRequestList";
import { fetchUsers } from "./api";

const App = () => {
  const [refreshUsers, setRefreshUsers] = useState(false);
  const [refreshRequests, setRefreshRequests] = useState(false); // Refresh state for requests
  const [userId, setUserId] = useState(null);

  // Fetch users and set first user's ID
  useEffect(() => {
    const fetchUser = async () => {
      const users = await fetchUsers();
      if (users.length > 0) {
        setUserId(users[0]._id); // Assign first user's ID
      }
    };
    fetchUser();
  }, [refreshUsers]);

  const handleLoginSuccess = async (response) => {
    console.log("Google Login Success:", response);
    // You can later replace this with actual user authentication logic
  };

  const handleLoginFailure = () => {
    console.log("Google Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId="557677168303-4cq13entuimcjufsiev1rvvnqk1uhtcn.apps.googleusercontent.com">
      <Router>
        <div>
          <h1>Customer Service Platform</h1>

          {/* Google Login */}
          <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />

          {/* User Form (to add new users) */}
          <UserForm onUserAdded={() => setRefreshUsers(!refreshUsers)} />

          {/* User List */}
          <UserList key={refreshUsers} />

          {/* Service Request Form - Render only when userId is available */}
          {userId ? (
            <>
              <ServiceRequestForm userId={userId} onRequestAdded={() => setRefreshRequests(!refreshRequests)} />
              <ServiceRequestList key={refreshRequests} />
            </>
          ) : (
            <p>Loading user...</p>
          )}

          {/* Define Routes */}
          <Routes>
            <Route path="/service-request" element={<ServiceRequestForm />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
