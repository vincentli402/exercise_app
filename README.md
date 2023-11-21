# Exercise App

## Overview

This Exercise App is a web application built with React and Express that allows users to explore a variety of exercises, categorized by body parts. The app utilizes a third-party API to fetch exercise data and provides a user-friendly interface to search for exercises based on specific criteria.

## Features

### 1. Home Page

- **Welcome Message**: The home page displays a welcome message to users.
- **Navigation**: Users can navigate to different sections of the app using the navigation bar.

### 2. Exercise Detail Page

- **Exercise Detail View**: Users can view detailed information about a specific exercise, including its name, body part, target, and required equipment.

### 3. Exercise List Page

- **Exercise Cards**: Displays a list of exercises with their names and accompanying images.
- **Pagination**: Enables users to navigate through multiple pages of exercise cards.

### 4. Search Exercises Page

- **Search Bar**: Users can search for exercises based on keywords such as exercise name, target, equipment, or body part.
- **Body Part Selection**: Provides a horizontal scrollbar for selecting body parts, allowing users to filter exercises by specific body parts.

## Getting Started

Follow these steps to set up and run the Exercise App:

### Prerequisites

- Node.js installed on your machine.
- API key for the RapidAPI used in the Express server.

### Installation

1. Install dependencies for both the client and server:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

2. Set up environment variables:

   Create a `.env` file in the `server` directory and add your RapidAPI key:

   ```env
   REACT_APP_RAPID_API_KEY=your-rapid-api-key
   ```

### Running the App

1. Start the Express server:

   ```bash
   cd server
   node app
   ```

   The server will run on `http://localhost:4000`.

2. In a separate terminal, start the React client:

   ```bash
   cd client
   npm start
   ```

   The React app will run on `http://localhost:3000`.

3. Open your web browser and go to `http://localhost:3000` to access the Exercise App.

## Usage

- Navigate through the app using the provided links in the navigation bar.
- Explore exercises by body parts on the Home page.
- Click on an exercise card to view detailed information on the Exercise Detail page.
- Use the Search Exercises page to search for specific exercises based on keywords or filter by body part.

## Credits

- **React**: A JavaScript library for building user interfaces. [React Documentation](https://reactjs.org/docs/getting-started.html)
- **Express**: A fast, unopinionated, minimalist web framework for Node.js. [Express Documentation](https://expressjs.com/)
- **RapidAPI**: A platform that allows developers to find, connect to, and manage thousands of APIs. [RapidAPI](https://rapidapi.com/)
