# Backend Server with JWT Authorization, MongoDB, Express, and Jest

This repository contains a backend server built using Node.js and Express, integrated with MongoDB for data storage. The server includes JWT (JSON Web Token) authorization for secure authentication and Jest for testing.

## Prerequisites

Before running the server, make sure you have the following installed on your machine:

- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com)

## Getting Started

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/GiorgiMakh/JWT-Authorization.git
   ```

2. Install dependencies by running:

   ```bash
   cd backend
   npm install
   ```

3. Set up configuration:

   - Configure the MongoDB connection URL in the `.env` file. Replace `Your_MONGO_URI` with your actual MongoDB connection URL.
   - Configure the JWT secret key in the `.env` file. Replace `Your-JWT-Secret-Key` with your key.

Run the server:

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3000`.

## JWT Authorization

The server uses JWT (JSON Web Token) for secure authorization. When a user registers or logs in, they receive a JWT token, which they need to include in the Authorization header of subsequent requests to access protected routes.

## Testing

This repository includes test cases using Jest for unit testing and integration testing.

To run the tests, use the following command:

```bash
npm test
```

## API Endpoints

The server exposes the following API endpoints:

- `POST /api/register`: Register a new user. Required fields: `username` and `password`.
- `POST /api/login`: Log in an existing user. Required fields: `username` and `password`.
- `GET /api/protected`: Get the user's profile. Requires a valid JWT token in the Authorization header.

## Customization

You can customize the server to add more routes, modify the data models, or implement additional features according to your specific requirements. Feel free to extend the functionality to suit your project needs.

## Contributing

If you find any issues with the server or want to contribute to its improvement, please submit a pull request. We welcome contributions from the community to make this server even better.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using this backend server template! If you have any questions or need further assistance, feel free to reach out to us or open an issue on this repository. Happy coding!