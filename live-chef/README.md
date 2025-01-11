# Live Chef

Live Chef is a web application built using React and Vite. It provides a seamless development experience with hot module replacement (HMR) and server-side functionality powered by Nodemon.

## Features
- Fast React development setup with Vite.
- Server-side logic for backend operations.
- Live reloading for both frontend and backend.

## Prerequisites
Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/)
- A terminal or command prompt

## How to Run the Project
Follow these steps to run the project on your local machine:

### Step 1: Install Dependencies
1. Clone the repository and navigate to the project directory:
   ```bash
   cd live-chef
   ```
2. Install all dependencies:
   ```bash
   npm install
   ```

### Step 2: Start the Frontend
1. Open a terminal in the root project directory and run:
   ```bash
   npm run dev
   ```
   This will start the Vite development server and host the frontend application.

### Step 3: Start the Backend
1. Open a **new terminal** and navigate to the server folder:
   ```bash
   cd live-chef
   cd server
   ```
2. Start the backend server using Nodemon:
   ```bash
   nodemon
   ```

### Access the Application
Once both the frontend and backend servers are running, open your browser and navigate to the provided local development URL (usually `http://localhost:5173` for Vite by default).

## Additional Notes
- Ensure that your backend is properly configured to communicate with the frontend.
- If you encounter issues, check the terminal logs for error messages and verify all dependencies are installed correctly.

## Development Tools
- **Frontend:** React with Vite
- **Backend:** Node.js with Nodemon
- **Package Manager:** npm

Happy coding!

