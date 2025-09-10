
# ✈️ TripQuote API

### An API for travel quotations.

This API provides a way to manage users and create travel quotations. It includes endpoints for user creation and authentication, as well as for creating and listing travel quotes.

---

## 🚀 Getting Started

### 🔑 Authentication

To access the travel quotation endpoints, you'll need a **JWT (JSON Web Token)**. You can get one by creating a user and then logging in with the `/users/session` endpoint. Once you have the token, you must include it in the `Authorization` header of your requests in the format `Bearer <YOUR_TOKEN>`.

---

## 🗺️ Endpoints

### 👤 User Management

- **`POST /users`**

  - **Description:** Creates a new user account.
  - **Request Body:**
    - `name` (string)
    - `email` (string)
    - `password` (string)
  - **Responses:**
    - `201 Created` ✨: User was created successfully.
    - `500 Error` ⚠️: User could not be created.

- **`POST /users/session`**
  - **Description:** Creates a new user session and returns a JWT token.
  - **Request Body:**
    - `email` (string)
    - `password` (string)
  - **Responses:**
    - `200 OK` ✅: Session created.
      - **Body:**
        - `token` (string): The JWT token for authentication.
        - `user` (object): User details.
          - `name` (string)
          - `email` (string)
    - `401 Unauthorized` 🚫: Invalid email or password.

---

### 📝 Travel Quotations

- **`POST /quotes`**

  - **Description:** Creates a new travel quotation.
  - **Requires Authorization:** Bearer Token
  - **Request Body:**
    - `origin` (string): Starting location.
    - `destiny` (string): Destination.
    - `ticketGoing` (number): Cost of the going ticket.
    - `ticketBack` (number): Cost of the return ticket.
    - `goingDate` (string): Date of departure.
    - `backDate` (string): Date of return.
    - `foodExpenses` (number): Estimated food costs.
    - `mobilityExpenses` (number): Estimated transportation costs.
    - `leisureExpenses` (number): Estimated leisure activity costs.
  - **Responses:**
    - `201 Created` ✨: Quotation was created successfully.
    - `500 Error` ⚠️: Quotation could not be created.

- **`GET /quotes`**
  - **Description:** Lists all travel quotations.
  - **Requires Authorization:** Bearer Token
  - **Responses:**
    - `200 OK` ✅: Returns a list of travel quotations.

---

_md file Powered by Gemini_ 🍺🍺🍺
