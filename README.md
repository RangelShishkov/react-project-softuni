# React-project-softuni

Welcome to the My Blog project! This is a web application built with React, Vite, and powered by [SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server) for the backend.

## Project Overview

The project is a simple blog application where users can read and publish blog posts. It uses React for the frontend and communicates with the SoftUni Project Server for managing blog data.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/RangelShishkov/react-project-softuni.git
    
    ```

2. Navigate to the project directory:

    ```bash
    cd react-project-softuni
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the SoftUni Practice Server:

    ```bash
    cd server/dist
    node server.js
    ```

5. Start the development server:

    ```bash
    cd client
    npm run dev
    ```

    This will start the development server for the React frontend.

6. Open your browser and go to [http://localhost:5173](http://localhost:5173) to view the application.

## Project Structure

- `/client`: Contains the React source code for the frontend.
- `/server`: Backend server code.

## Features

- Display a list of blog posts
- View individual blog posts
- Create and publish new blog posts functionality for logged-in users
- Interactive and responsive user interface

## Acknowledgments

- SoftUni Practice Server for providing the backend infrastructure.
- React and Vite communities for creating powerful and efficient web development tools.
