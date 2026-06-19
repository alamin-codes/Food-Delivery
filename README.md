# Food Delivery App

A full-stack food delivery web application where users can browse food items, add them to the cart, place orders, and track order status.

## Features

* User Authentication
* Browse Food Menu
* Add to Cart
* Place Orders
* Online Payment Integration
* Order Tracking
* Admin Dashboard
* Manage Food Items
* Update Order Status

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Install dependencies

Frontend:

```bash
cd frontend
npm install
```

Backend:

```bash
cd backend
npm install
```

Admin Panel:

```bash
cd admin
npm install
```

### Run the project

Backend:

```bash
npm run server
```

Frontend:

```bash
npm run dev
```

Admin:

```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the backend directory and add:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## Author

Al Amin Islam

![Demo](./src/assets/Food%20delivery.gif)