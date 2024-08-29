## Setup Instructions

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/V-atz/full-stack-repo.git
   ```

   Navigate to the project directory:

   ```bash
   cd backend
   ```

2. **Install NPM Packages**

   Install the necessary dependencies using npm:

   ```bash
   npm install
   ```

3. **Configure MongoDB**

   **Local MongoDB:**

   - Make sure MongoDB is installed and running on your machine. The default MongoDB server runs on `mongodb://localhost:27017`.

   **MongoDB Atlas:**

   - If you are using MongoDB Atlas, create a cluster and obtain the connection string from the Atlas dashboard.
   - Update the mongoUrl variable in index.js file with the connection string provided by Atlas.

4. **Run the Project**

   Start the application with the following command:

   ```bash
   node index.js
   ```

   Your application should now be running on the specified port.

## Troubleshooting

- **MongoDB Connection Issues:** Ensure MongoDB is running if using a local instance, or verify your connection string if using Atlas. Check that the `mongoUrl` variable is correctly set in index.js file.
- **NPM Package Issues:** Ensure that your `package.json` file is up-to-date and that you have a stable internet connection.
- **Application Errors:** Check the console output for error messages and verify that all required environment variables are correctly set.
