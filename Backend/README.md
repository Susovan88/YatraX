# Backend Express Server

This project is a simple Express server that demonstrates the structure of a backend application using Node.js and Express.

## Project Structure

```
Backend
├── src
│   ├── app.js             # Entry point of the application
│   ├── controllers
│   │   └── userController.js
│   ├── models
│   │   └── userModel.js
│   ├── Routers
│   │   └── userRoutes.js
│   ├── config
│   │   └── mongoDB.js
├── package.json           # NPM configuration file
└── README.md              # Project documentation
```

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd Backend
npm install
```

## Usage

To start the server, run the following command:

```bash
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

### `POST /api/users/register`

Register a new user.

#### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `fullname.firstname` (string, required, min 3 chars)
- `fullname.lastname` (string, required, min 3 chars)
- `email` (string, required, must be a valid email)
- `password` (string, required, min 8 chars)

#### Example Request

```bash
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "Alice", "lastname": "Smith" },
    "email": "alice.smith@example.com",
    "password": "supersecretpassword"
  }'
```

#### Success Response

- **Status:** `201 Created`
- **Body:**
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "Alice",
        "lastname": "Smith"
      },
      "email": "alice.smith@example.com"
    },
    "token": "jwt_token_here"
  }
  ```

#### Error Responses

- **Status:** `400 Bad Request`
  - Validation errors (missing fields, invalid email, short password, etc.)
  - Email already in use

  ```json
  {
    "errors": [
      { "msg": "First name is required", "param": "fullname.firstname", ... }
    ]
  }
  ```
  or
  ```json
  {
    "message": "Email already in use"
  }
  ```

---


### `POST /api/users/login`

Authenticate a user and return a token.

#### Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `email` (string, required, must be a valid email)
- `password` (string, required, min 8 chars)

#### Example Request

```bash
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "alice.smith@example.com",
    "password": "supersecretpassword"
  }'
```

#### Success Response

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Login successful",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "Alice",
        "lastname": "Smith"
      },
      "email": "alice.smith@example.com"
    },
    "token": "jwt_token_here"
  }
  ```

#### Error Responses

- **Status:** `400 Bad Request`
  - Validation errors (missing fields, invalid email, short password, etc.)
  - Invalid credentials

  ```json
  {
    "errors": [
      { "msg": "Email is required", "param": "email", ... }
    ]
  }
  ```
  or
  ```json
  {
    "message": "Invalid email or password"
  }


## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under