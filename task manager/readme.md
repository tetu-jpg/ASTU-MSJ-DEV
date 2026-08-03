# Task Manager API

A full-stack Task Manager application built using Node.js, Express, MVC architecture, and a simple HTML/CSS/JavaScript frontend.

The application allows users to create, view, update, and delete tasks.



# Features

## Backend
- REST API using Express.js
- MVC architecture
- Environment configuration using `.env`
- CORS enabled
- CRUD operations:
  - Create task
  - Read tasks
  - Update task
  - Delete task

## Frontend
- Display all tasks
- Add new tasks
- Delete tasks
- Task completion status
- Responsive design


# Technologies Used

## Backend
- Node.js
- Express.js
- dotenv
- cors

## Frontend
- HTML5
- CSS3
- JavaScript

## Architecture
- MVC Pattern



# Project Structure
task manager/

│
├── backend/
│
│ ├── .env
│ ├── index.js
│ ├── package.json
│ │
│ ├── config/
│ │ └── env.js
│ │
│ ├── data/
│ │ └── taskData.js
│ │
│ ├── services/
│ │ └── taskService.js
│ │
│ ├── controllers/
│ │ └── taskController.js
│ │
│ └── routes/
│ └── taskRoutes.js
│
├── frontend/
│
│ ├── index.html
│ ├── style.css
│ └── app.js
│
└── README.md


---

# Installation

## Clone Repository


git clone <repository-url>

Go into the project:

cd task manager
Backend Setup

Go to backend folder:

cd backend

Install dependencies:

npm install

Create a .env file:

PORT=5000
APP_NAME=task Manager 
Run Backend

Development mode:

npm run dev

The server will start:

Task Manager API running on port 5000
API Endpoints

Base URL:

http://localhost:5000/api/tasks
Get All Tasks
GET /api/tasks



Rules:

id → automatically generated
title → required
completed → default false
priority → low, medium, or high
MVC Architecture
Routes

Responsible for defining API URLs.


Responsible for:

Handling requests
Sending responses
Managing status codes
Services

Responsible for:

Business logic
Managing task operations
Data

Stores temporary task data using an array.

Frontend Connection

The frontend communicates with the backend using Fetch API.

Example:

fetch("http://localhost:5000/api/tasks")

The backend returns JSON data, and the frontend displays it.

Running Frontend

Open:

frontend/index.html

using Live Server.

The frontend connects automatically to:

http://localhost:5000/api/tasks
Future Improvements
Database integration (MongoDB/MySQL)
User authentication
Task search

https://vercel.com/tesnim-abdella/task-manager/AFNSZzWqR37USMZvrhekykBPsnRV
coded by Tesnim Abdella 
github:https://github.com/tetu-jpg/ASTU-MSJ-DEV.git
