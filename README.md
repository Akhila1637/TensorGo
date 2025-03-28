# TensorGo Customer Service Platform 🚀

## 📌 Overview
TensorGo Technologies is an enterprise-grade **low-code PaaS company** for **computer vision products**. This **Customer Service Platform** allows users to:
- **Log in using Google OAuth**
- **Submit customer service requests** categorized as:
  - General Queries
  - Product Features Queries
  - Product Pricing Queries
  - Product Feature Implementation Requests
- **Retrieve & display customer service requests**
- **Interact with customer support via Intercom.com integration**

## 🏗️ Tech Stack
### Backend (Node.js & Express)
- Google OAuth for authentication
- MongoDB Atlas for database storage
- REST API with Express.js
- Intercom.com API for customer service interactions

### Frontend (React.js)
- Google OAuth for login
- Dynamic service request form
- Categorized request display

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Akhila1637/TensorGo.git
cd TensorGo
cd backend
npm install
3️⃣ Set Up Environment Variables

Create a .env file inside the backend folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
INTERCOM_ACCESS_TOKEN=your_intercom_access_token

4️⃣ Start the Project
Run Backend

cd backend
npm start

Run Frontend

cd frontend
npm start

📌 API Endpoints
User Authentication
Method	Endpoint	Description
GET	/auth/google	Google OAuth login
Customer Service Requests
Method	Endpoint	Description
POST	/requests	Submit a new request
GET	/requests	Get all customer requests
GET	/requests/:category	Get requests by category
🖥️ Features

✅ Google OAuth for secure login
✅ Service request submission with category selection
✅ Customer request display categorized for better management
✅ Intercom.com integration for live customer support
🏗️ Project Structure

TensorGo/
│── backend/                # Backend Microservice (Node.js)
│   ├── models/             # Mongoose Models
│   ├── routes/             # API Routes
│   ├── controllers/        # Request Handlers
│   ├── config/             # Database & Authentication Setup
│   ├── server.js           # Main Server File
│   ├── .env                # Environment Variables
│
│── frontend/               # Frontend (React.js)
│   ├── src/
│   │   ├── components/     # Reusable Components
│   │   ├── pages/          # Page Views
│   │   ├── api.js          # API Requests
│   │   ├── App.js          # Main App Component
│   │   ├── index.js        # React Entry Point
│   ├── package.json        # Dependencies
│   ├── .env                # Environment Variables
│
│── README.md               # Project Documentation
│── package.json            # Root Dependencies
│── .gitignore              # Git Ignore File
