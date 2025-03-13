const http=require("http");
const hostname = 'localhost';
const port = 3000;
const app = http.createServer((req, res) => {
    // Set the response header to indicate the type of content being returned
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
  
    // Handle different routes
    if (req.url === '/') {
      res.end('Hello, World!');
    } else if (req.url === '/about') {
      res.end('This is the About page.');
    } else {
      res.statusCode = 404;
      res.end('Page  not found');
    }
  });
  
  // Start the server and listen on the specified port
  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });