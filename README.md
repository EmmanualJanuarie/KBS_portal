# KBS-portal
A dynamic platform built with the M.E.R.N stack that enables entrepreneurs and like-minded individuals to enroll in paid courses. This end-to-end application offers a modern, user-friendly interface with a vibrant, visually appealing design.

# Project Outline
* Admin Portal
    - Add Employees(Based on the corporate and Beneficiary discussions via email)
    - Add new courses (PAID)
    - Edit Added Courses
    - No Downloadable content (Must) 
    - Market Analysis (Show graphs and diagrams of the sales uses and etc)
    - Manage Members (Admin accepts / rejects registed users to course)
    - Add notification based on location, WhatsApp notifications (Events will only be showed to the Registerd users on the platform)

 
* Corporate Portal
  - Self-Paced Learning (However the course expires, and they get notifications) / Upskilled Learning - Employee Upskill
  - Add Animated Videos / Youtube - (This is for all courses)
  - Corporate pays for course -> Assigns employess to course(Limited amount based on payment) -> employees limited duration
  - Pay-as-use
  - course expires (3/6 month duration)
 
* Program Beneficiaries
  - Schedule Workshops(Select which courses will be utilized) - Beneficiaries pays for total
  - only members from the beneficiaries can access the course, so they get only those courses when they login
  - must be township friendly(whatsApp notifications)
  - for courses there must be a post/pre assessment
  - Impact Management - Do understanding assessments to track users/employees understanding
  - Expiration based on how long they on the course
  - Add new courses.
  - Get's a summary  - Content Summary
 
* Course Layout
    1. Pre-assessment (Surveys or summative assessment)
    2. Content
    3. Post Assessment (Formative Assessment)
    4. Feedback/Rating
    5. Grading
    6. Download Certifiate
 
* Landing Page (Client - Side)
  - Information about KBS Portal
  - Testimonials
  - Only Register Organisation and Login Employees
 

# Project Folder & File Structure
* MERN-FRONTEND
   

```plaintext
frontend-rootfolder/
│   ├── public /                 # index.html. favicon, static assets
│   ├── src/
│   │   ├── assets /             # images. icons, fonts
│   │   └── components           # Resuseable UI Components(Buttons, Cards/Viewa)
│   │       └── Button.jsx       # e.g 
│   │
│   ├── pages/                   # route-level Components(pages/views)
│   │   ├── Home.jsx             # e.g
│   │   ├── Login.jsx            # e.g
│   │   └── Dashboard.jsx        # e.g
│   │
│   ├── hooks/                  # custom React Hooks
│   │   └── useAuth.js          # e.g
│   │
│   ├── context/                # React Context, global state
│   │   └── AuthContext.js      # e.g
│   │               
│   ├── services/               # API calls, axios instances
│   │   └── userService.js      # e.g
│   │
│   ├── utils/                  # helper functions, Constants
│   │    └── formatDate.js      # e.g
│   │
│   ├── App.js
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── tailwind.config.js

```

* MERN-BACKEND
   

```plaintext
backend-rootfolder/
│   ├── controllers /            # logic for each route
│   │   └── userController.js    # e.g
│   │
│   ├── models/                  # Mongoose Schemas
│   │   └── userModel.js         # e.g  
│   │
│   ├── routes/                 # API routes definitions
│   │   └── userRoutes.js       # e.g
│   │               
│   ├── middleware/             # custom middleware (auth, error handling)
│   │   └── authMiddleware.js   # e.g
│   │
│   ├── utils/                  # helper functions (e.g generateToken.js)
│   │    └── generateToken.js   # e.g
│   │
│   ├── config/                 # database or environment configs
│   │    └──  db.js             # e.g
│   └── main.jsx
│
├── .env
├── server.js
└── package.json

```



# Software Versions
* tailwindcss: version 4.1.13 (change to v3)
  - use command: npm install -D tailwindcss postcss autoprefixer
  - to reinstall previous version : npm install -D tailwindcss@3 postcss autoprefixer

* React: version 19.1.1 
* NodeJs: version 18+ , then npm === v10 (Install node v20)


# How to run project
  1. Download the project folder
  2. cd project folder
  3. npm install 
  4. npm install -D tailwindcss postcss autoprefixer
  5. npm run dev (this command rund the project in development environment)

# Developers
* Lead Developer: Emmanual R. Januarie (Github: https://github.com/EmmanualJanuarie)

# Deployment
  - Link: N/A

# Versioning
* The current version is **0.20.0 (initial development)**.
* Future updates will be documented in the [Changelog](./CHANGELOG.md).

# Notes For future developers
* Please Update the [Changelog](./CHANGELOG.md).
* Every typo update, patch or new feature please update the CHANGELOG.
* Update the versioning on the Application and on the README.md File. 


