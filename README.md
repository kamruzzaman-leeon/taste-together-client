# taste together - Community Food Sharing Platform

## Overview

Welcome to **taste together**, our Community Food Sharing Platform! This project aims to create a user-friendly platform connecting those with surplus food to those in need, reducing food waste, and addressing hunger. We are actively seeking a front-end web developer to join our mission.

## Live Website
Visit our live website: [taste together](https://taste-together-21c13.firebaseapp.com/)



## Project Description

Our project focuses on building a Community Food Sharing Platform using technologies like React, Firebase, Node.js (Express.js), and MongoDB. The goal is to connect surplus food donors with those in need, promoting sustainability and community cooperation.

## Layout

- **Navbar and Footer:**
  - Present on all pages except for the 404-page.
  - Meaningful and informative footer including the website logo, copyright notice, contact information, and more.
  - Optional: Explore Tailwind CSS libraries for design.

- **Navbar:**
  - Website name with logo
  - Home, Available Foods, Add Food, Manage My Foods, My Food Request, Login/Signup links.
  - Private routes for Manage My Foods and My Food Request.

## Login & Registration Systems

- **Login Page:**
  - Email/Password
  - Google/Github Sign-in
  - Link to the registration page

- **Registration Page:**
  - Name, Email, Password, Photo URL

## Home Page

- **Banner/Slider:**
  - Catchy and impressive.

- **Featured Foods:**
  - Display at least 6 food items.
  - Information: Food Image, Food Name, Donator Image & Name, Food Quantity, Pickup Location, Expired Date/Time, Additional Notes.
  - View Detail Button.
  - Show All button to redirect to the Available Foods page.

- **Extra Sections:**
  - Add 2 relevant extra sections on the homepage.
  - Count, About Us

## Available Foods Page

- **Filter Section:**
  - Implement search functionality by Food name.

- **Sorting Section:**
  - Implement Sorting functionality by Food Expire Date.

- **Foods Section:**
  - Display all available foods with information.
  - View Details Button redirects to Food details page.

## Single Food Details

- After clicking on the View Details button, redirected to the Food Details route (/food/:id).
- Donor Information: Donor Name, Food Pickup Location.
- Single Food Section: Food Image, Food Name, Food Quantity, Expired Date/Time, Request Button, Modal for request details.

## Add a Food (PRIVATE)

- Create an Add Food page with a form.
- Fields: Food Name, Food Image, Food Quantity, Pickup Location, Expired Date/Time, Additional Notes, Add Button.
- Donator Image, Name, & Email from the logged-in user.
- Food Status: By default, keep it "available".

## Manage My Foods (PRIVATE)

- Private route showing all foods added by the logged-in user in a tabular format.
- Utilize React-Table.
- Each card has Edit and Delete buttons for updating and removing food.

## Manage Single Food (PRIVATE)

- Page containing food request information.
- Food donor can update request status from pending to delivered.
- Information: Requester Name, Requester Image, Requester Email, Request Time and Date, Status.

## My Food Request (PRIVATE)

- Page showing all food requests made by the logged-in user.
- Information: Donor Name, Pickup Location, Expire Date, Request Date, Your Donation Amount, Status.
- Cancel Request Button.

## Show The Toast using sweetalert2

- For all CRUD operations, show relevant toast/notification.

## 404 Page

- Create a 404 page with an interesting jpg/gif.
- Back to home button redirects to the home page.

## Environment Variable

- Use environment variables to hide Firebase config keys and MongoDB credentials.

## Explore New Packages

- Implement any of the following packages:
  - React Hook Form
  - React Helmet

## Fix Reload Issue

- Ensure reload protected/private routes.

## HomePage Responsive

- Make the homepage of your website mobile, tablet & desktop responsive.

## Security with JWT

- Create and store a JWT token on the client-side for both email/password-based authentication and social login.
- Implement JWT on private routes.

## Optional (But Highly Recommended)

- Implement any two tasks from the following optional list:
  - Add a spinner when the data is in a loading state.
  - Use Axios Custom Hook [AxiosSecure].

## Additional Information

1. Host the site on Firebase.
2. Host your server-side application on Vercel.
