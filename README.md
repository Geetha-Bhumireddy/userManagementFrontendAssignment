

# React.js User Management Application

This project is a React.js application designed to fetch and display a list of users from an API. It features user search, sorting, and detailed views, providing an interactive and user-friendly experience. The app is styled with **CSS**, **Tailwind**, or **Material-UI** and incorporates React Router for navigation.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [How to Run the Project](#how-to-run-the-project)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)

---

## Features

### Home Page
- Fetches user data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).
- Displays user information: **name**, **email**, and **city**.
- Search functionality to filter users by name.
- Sorting functionality for user names in **A-Z** or **Z-A** order.
- Responsive design for mobile and desktop.

### User Detail Page
- Displays detailed user information:
  - Name
  - Email
  - Phone
  - Company Name
  - Website
- Includes a **Go Back** button for easy navigation to the home page.

### Additional Features
- State management using **React Context API** (or **Redux** as an option).
- Loading spinner and error handling while fetching data.
- Fully responsive UI for various screen sizes.

### Bonus Features
- Dark/light mode toggle.
- Pagination for user lists.
- Deployed on **Netlify/Vercel** for easy access.

---

## Technologies Used

- **React.js** (with functional components and hooks)
- **React Router** for navigation
- **CSS**, **Tailwind**, or **Material-UI** for styling
- **React Icons** for icons
- **Netlify/Vercel** for deployment

---

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Geetha-Bhumireddy/userManagementFrontendAssignment.git
   cd userManagementFrontendAssignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## How to Run the Project

1. Ensure Node.js and npm are installed on your system.
2. Follow the [Setup and Installation](#setup-and-installation) steps.
3. Use the search bar to filter users.
4. Click the sorting buttons to sort users alphabetically.
5. Click on a user to view detailed information on a separate page.
6. Use the **Go Back** button to return to the home page.

---

## Folder Structure

```
userManagementFrontendAssignment/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── UserCard.jsx
│   │   ├── Pagination.jsx
│   │   ├── DarkModeToggle.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── UserDetailPage.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useFetch.js
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
├── README.md
├── package.json
└── package-lock.json
```

---



## Future Enhancements

- Add more detailed styling for a better UI experience.
- Integrate a more advanced API for real-world user data.
- Add additional user interactions, such as editing or deleting user data.
- Implement unit and integration tests.
