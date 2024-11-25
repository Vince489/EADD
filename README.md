
---

# Node.js HTTP Server

This project demonstrates a basic HTTP server built with Node.js that listens on a specified port, serves a default response, and handles errors such as the `EADDRINUSE` (port already in use) error. The server uses **no external libraries** and applies **plain CSS-like ANSI escape codes** to colorize terminal output for logging purposes.

## Features:
- **No External Libraries**: This server is built using pure Node.js without relying on any external libraries like `chalk` or other packages. This minimizes dependencies and keeps the setup lightweight.
- **Simple HTTP Server**: The server listens on a configurable port and returns a plain text message when accessed. It's designed to be easily extendable for more complex applications.
- **Error Handling**: Includes a mechanism to handle port conflicts (`EADDRINUSE`), automatically tries a new port if the current port is already in use.
- **ANSI Escape Codes for Colorized Logging**: The server logs to the terminal with colorized output for better readability. Specifically:
  - The message "Server is running at" is printed in white.
  - The URL (e.g., `http://localhost:3001`) is printed in blue for easy identification.
  - Port conflicts and errors are printed in yellow and red, respectively.

## Installation

No installation required, as this project only requires Node.js.

1. Clone or download the repository.
2. Navigate to the project directory in your terminal.

```bash
git clone https://github.com/yourusername/nodejs-server.git
cd nodejs-server
```

## Usage

1. **Start the Server**:
   You can run the server using Node.js. Open your terminal and execute:

```bash
node server.js
```

2. The server will attempt to start on port `3000`. If that port is already in use, the server will attempt to bind to the next available port (e.g., `3001`, `3002`, etc.).

## Features in Detail

### 1. **No External Libraries**:
   - The server uses only built-in Node.js modules like `http` and `fs`, making it lightweight and avoiding any unnecessary dependencies. This makes it easier to deploy and maintain.

### 2. **Port Conflict Handling**:
   - **`EADDRINUSE` Error**: The server has error handling for situations where the desired port is already in use. If the server tries to start on port `3000` and it’s taken, it will automatically attempt to start on the next available port (e.g., `3001`, `3002`, etc.).
   - **Benefit**: This helps avoid server crashes and makes the server more resilient to common issues in multi-server environments where the port might be occupied.

### 3. **Logging with ANSI Escape Codes**:
   - The server logs messages to the terminal with color coding using **ANSI escape codes**, which are used to change the text color.
   - The URL is printed in **blue** for better visibility, and error messages are highlighted in **red** for clear identification of issues.
   - **Benefit**: This helps to easily spot important messages in the terminal output without relying on third-party libraries like `chalk`. It keeps the output readable and visually appealing.

### 4. **Simple HTTP Server**:
   - The server responds with a plain text message ("Hello from plain Node.js server!") for incoming HTTP requests. This can be customized to serve HTML pages, API responses, or other resources.
   - **Benefit**: This provides a clean and minimal example of a basic Node.js server, making it suitable for learning or building upon for more complex applications.

## Example Output:

### Successful Server Start:

```
Server is running at http://localhost:3000
```

### Port Already in Use (e.g., Port 3000):

```
Port 3000 is already in use.
Trying port 3001...
Server is running at http://localhost:3001
```

### Error Message Example:

```
Error occurred: bind EADDRINUSE 0.0.0.0:3000
```

## Benefits:
- **Lightweight**: The server uses only built-in Node.js functionality, which avoids unnecessary complexity.
- **Resilience**: The server can automatically retry binding to a new port if the default port is already occupied, ensuring it doesn't crash and providing better reliability in shared environments.
- **Readable Output**: By utilizing ANSI escape codes, the log output is colored to differentiate between different types of messages (e.g., server start, port conflicts, errors), enhancing readability and improving user experience when running the server in the terminal.

## Contributing

Feel free to fork this repository, submit issues, or open pull requests if you'd like to contribute to the project!

---

This **README** provides a clear explanation of what the code does, the features it offers, and the benefits of error handling, colorized logging, and no external dependencies.