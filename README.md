# TaskManager

A RESTful API for managing tasks, built with Node.js, Express.js, and MongoDB. Created for Albearoti Assessment.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Contributing](#contributing)

## Features

- User registration and authentication using JWT
- CRUD operations for tasks
- Associate tasks with authenticated users
- Input validation using Joi
- Error handling
- API documentation using Swagger

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0.0 or later)

## Installation

Clone the repository:

```shell
git clone https://github.com/TheMarvelFan/TaskManager.git
cd TaskManager
```

Install the dependencies:

```shell
npm install
```

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Add the following environment variables to the `.env` file:

```dotenv
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_jwt_secret` with a secure random string for JWT encryption.

## Running the Server

To start the server in development mode with nodemon:

```shell
npm run dev
```

To start the server in production mode:

```shell
npm start
```

The server will start running at `http://localhost:3000` (or the port specified in your .env file).

## API Documentation

The API documentation is available through Swagger UI. After starting the server, you can access the documentation at:

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

This interactive documentation provides detailed information about all available endpoints, request/response schemas, and allows you to test the API directly from the browser.

## Authentication

This API uses JWT (JSON Web Tokens) for authentication. To access protected routes, you need to include the JWT token in the Authorization header of your requests:

```yaml
Authorization: Bearer YOUR_JWT_TOKEN
```

You can obtain a JWT token by registering a new user or logging in with existing credentials.

## Error Handling

The API uses a consistent error response format:

```json
{
  "message": "Error message describing what went wrong"
}
```

Common HTTP status codes used:

- 200: Successful request
- 400: Bad request (e.g., invalid input)
- 401: Unauthorized (authentication required)
- 404: Resource not found
- 500: Internal server error


## Testing

(Note: As of now, no automated tests have been implemented. This section can be updated once tests are added to the project.)

To run the test suite (when implemented):

```shell
npm test
```

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Create a pull request
