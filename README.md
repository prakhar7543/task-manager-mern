# Task Manager (MERN) - skeleton

A fully functional Task Manager application built using the MERN stack.
Users can Create, Read, Update, and Delete (CRUD) tasks with status handling.

This app uses:

🌐 Backend → Render

💻 Frontend → Vercel

☁️ Database → MongoDB Atlas

🌍 Live Links

🔗 Frontend (Vercel):
👉 https://task-manager-mern-5ymp.vercel.app/

🔗 Backend (Render):
https://task-manager-mern-1-ilyo.onrender.com/api/tasks

🚀 Tech Stack
-Frontend

- React.js

- Vite

- Axios

- CSS

- Backend

- Node.js

- Express.js

- MongoDB + Mongoose

- dotenv

- CORS

📦 Features

✔ Create new tasks
✔ Edit existing tasks
✔ Delete tasks
✔ View all tasks
✔ Update task status (Todo / In Progress / Done)
✔ Fully responsive UI
✔ REST API with MongoDB database
✔ Backend & frontend deployed separately

📁 Project Structure

task-manager-mern/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── services/
    │   └── App.jsx
    ├── public/
    └── vite.config.js


⚙️ Backend Setup (Local)

cd backend
npm install

Create a .env file:

PORT=5000
MONGO_URI=mongodb+srv://prakhar7543:Prakhar%40123@taskmanagerdb.hsk7ojk.mongodb.net/taskdb?retryWrites=true&w=majority&appName=taskManagerDB

Run backend:

npm start

💻 Frontend Setup (Local)

cd frontend
npm install
npm run dev

🚀 Deployment
Backend Deployment (Render)

1. Push code to GitHub

2. Create new Web Service

3. Set:

- Build Command: npm install

- Start Command: node server.js

4. Add Environment Variable

5. Deploy 🚀


Frontend Deployment (Vercel)

1. Import project from GitHub

2. Set Root Directory → frontend

3. Framework preset: Vite

4. Build Command:
   npm run build

5. Output Directory:
   dist

6. Deploy 🚀

🧪 API Endpoints
Get all tasks
GET /api/tasks

Create task
POST /api/tasks

Update task
PUT /api/tasks/:id

Delete task
DELETE /api/tasks/:id

📸 Screenshots

(Add screenshots of your UI here)

🙌 Author

Prakhar Sahu
MERN Stack Developer



