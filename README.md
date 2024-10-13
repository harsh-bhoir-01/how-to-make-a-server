# how-to-make-a-server

**# Express.js Basic Server**

This repository contains a basic server implementation using *Express.js*. The server listens on port 3000 and responds to requests made to specific routes with a simple message.

## Steps to Set Up and Run the Server

**### 1. Initialize the Project**
First, initialize your Node.js project by running:
***terminal***
_npm init_                                     
Follow the prompts to create a package.json file.                                                                                                                       

**2. Install Dependencie**s
Next, install the required dependencies by running:
***terminal***
_ npm install express_
This will install Express.js, which is used to create and manage the server.
                                                                        
**3. Install nodemon (Optional for Development)**
If you want to use nodemon to automatically restart the server when changes are made, install nodemon globally by running:    
***terminal***                                                                                                                                                                                 
_npm install -g nodemon_   

**4. Running the Server**
Once everything is installed, you can run the server with:
***terminal***                                                                                                                                                                                
_node src/app.js _                                                                                                                                                                    
This will start the server on port 3000. You can now visit http://localhost:3000 in your browser or send requests via tools like Postman or curl.

**5. Available Routes:**
* http://localhost:3000/ - Root route (responds with "hello from server")
* http://localhost:3000/home - Home route (responds with "hello from server")
* http://localhost:3000/login - Login route (responds with "hello from server")
* http://localhost:3000/dashboard - Dashboard route (responds with "hello from server")
Each of these routes will return the same message: "hello from server".

**6. Running with nodemon:**
Nodemon is a development tool that automatically restarts the server when changes are made to the code. This is useful during development to avoid manually restarting the server.

Once nodemon is installed, you can start your server with:                                                                                                    
***terminal*  **                                                                                                                                                                             
_nodemon src/app.js_

**7. Running via npm script**
You can also set up a script in the package.json file to use nodemon. Modify the package.json file like this:                               
"scripts": {
  "start": "node src/app.js",
  "dev": "nodemon src/app.js"
}                                                                                                                                                                                            
After that, you can run the server in development mode with:                                                                                                
***terminal***                                                                                                                                                                                      
_npm run dev_                                                                                                                                                                           

**Features**
* Simple setup of an Express server
* Multiple route handling (/, /home, /login, /dashboard)
* Sends a basic "hello from server" message for each route
* Uses nodemon for automatic server restarts during development
