# Backend Express Server

This project is a simple Express server that demonstrates the structure of a backend application using Node.js and Express.

## Project Structure

```
Backend
├── src
│   ├── app.js                    # Entry point of the application
│   ├── controllers
│   │   ├── userController.js     # User controller logic
│   │   └── captainControllers.js # Captain controller logic
│   ├── models
│   │   ├── userModel.js          # User mongoose schema/model
│   │   ├── captainModel.js       # Captain mongoose schema/model
│   │   └── backListTokenModel.js # Blacklist token mongoose schema/model
│   ├── Routers
│   │   ├── userRoutes.js         # User-related routes
│   │   └── captainRoutes.js      # Captain-related routes
│   ├── middlewares
│   │   └── authUser.js           # Authentication middleware
│   ├── config
│   │   └── mongoDB.js            # MongoDB connection logic
├── package.json                  # NPM configuration file
├── .gitignore                    # Git ignore file
└── README.md                     # Project documentation
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



### `GET /api/users/profile`

Get the profile of the currently logged-in user.  
**This endpoint requires authentication using a JWT token.**

#### Authentication

- Send the JWT token in the `Authorization` header as a Bearer token:
  ```
  Authorization: Bearer <your_jwt_token>
  ```
- Or, if you are using cookies, the token will be read from the `authToken` cookie.

#### Example Request

```bash
curl -X GET http://localhost:3000/api/users/profile \
  -H "Authorization: Bearer <your_jwt_token>"
```

#### Success Response

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "createdAt": "2024-06-23T12:34:56.789Z",
    "updatedAt": "2024-06-23T12:34:56.789Z"
  }
  ```

#### Error Responses

- **Status:** `401 Unauthorized`
  ```json
  { "message": "No token, authorization denied" }
  ```
  or
  ```json
  { "message": "Token is not valid" }
  ```

- **Status:** `404 Not Found`
  ```json
  { "message": "User not found" }
  ```

---

## Authentication Middleware

This project uses an authentication middleware (`authUser`) to protect routes that require the user to be logged in.

**How it works:**
- Checks for a JWT token in the `Authorization` header (`Bearer <token>`) or in the `authToken` cookie.
- Verifies the token using your secret key.
- If valid, attaches the user info to `req.user` and allows access to the route.
- If invalid or missing, returns a `401 Unauthorized` error.

**Usage Example:**

```javascript
import { authUser } from './middlewares/authUser.js';

app.get('/api/users/profile', authUser, getProfile);
```

## `Delete /users/logout`

Logs out the currently authenticated user by invalidating their session or authentication token.  
**Authentication required:** Yes

**Responses:**
- `200 OK`: Successfully logged out.
- `401 Unauthorized`: User is not authenticated.

**Example Request:**
You can use this middleware to protect any route that should only be accessible to authenticated users. 



### `POST /api/captains/register`

Register a new captain.

#### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "strongpassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Field Requirements

- `fullname.firstname` (string, required, min 3 chars)
- `fullname.lastname` (string, required, min 3 chars)
- `email` (string, required, must be a valid email)
- `password` (string, required, min 8 chars)
- `vehicle.color` (string, required, min 3 chars)
- `vehicle.plate` (string, required, min 3 chars)
- `vehicle.capacity` (number, required, min 1)
- `vehicle.vehicleType` (string, required, one of: `car`, `motorcycle`, `auto`, `bus`)

#### Example Request

```bash
curl -X POST http://localhost:3000/api/captains/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "strongpassword",
    "vehicle": {
      "color": "Red",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }'
```

#### Success Response

- **Status:** `201 Created`
- **Body:**
  ```json
  {
    "message": "Captain registered successfully",
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC1234",
        "capacity": 4,
        "vehicleType": "car"
      },
      "location": {
        "ltd":0.0,
        "lng":0.0,
      }
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
    "message": "Captain with this email already exists"
  }
  ```


  ### `POST /api/captains/login`

Login as a captain.

#### Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "strongpassword"
}
```

#### Field Requirements

- `email` (string, required, must be a valid email)
- `password` (string, required, min 8 chars)

#### Example Request

```bash
curl -X POST http://localhost:3000/api/captains/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "strongpassword"
  }'
```

#### Success Response

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Captain logged in successfully",
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC1234",
        "capacity": 4,
        "vehicleType": "car"
      }
    },
    "token": "jwt_token_here"
  }
  ```

#### Error Responses

- **Status:** `400 Bad Request`
  - Validation errors (missing fields, invalid email, short password, etc.)
  - Invalid email or password

  ```json
  {
    "message": "Invalid email or password"
  }
  ```


## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under