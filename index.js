import http from 'http';

let port = 3000;

function startServer(port) {
    const server = http.createServer((req, res) => {
        // Set response headers
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        
        // Send a default response
        res.end('Hello from plain Node.js server!');
    });

    server.listen(port, () => {
        // Keep "Server is running at" white, but color the URL in blue
        console.log('Server is running at\x1b[34m', `http://localhost:${port}`, '\x1b[0m');
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            // Make the "Port 3000 is already in use." yellow
            console.log('\x1b[33m', `Port ${port} is already in use.`, '\x1b[0m');
            // Make the "Trying port 3001..." green
            console.log('\x1b[32m', `Trying port ${port + 1}...`, '\x1b[0m');
            startServer(port + 1); // Increment the port and try again
        } else {
            // Error message in red
            console.error('\x1b[31m', `Error occurred: ${err.message}`, '\x1b[0m');
        }
    });
}

// Start the server on the initial port
startServer(port);
