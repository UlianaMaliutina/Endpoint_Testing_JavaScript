# Sprint 7 project, Uliana Maliutina
This project involves connecting a GitHub repository to the TripleTen platform and working with the Urban Grocers API. The primary goal is to test four distinct API endpoints using JavaScript, ensuring their functionality with appropriate HTTP methods. The project is structured to allow automated project submission through the TripleTen platform.
Technologies
Node.js: A JavaScript runtime for building scalable server-side and testing applications. Used to run the test scripts.
Jest: A JavaScript testing framework for running unit tests. Provides a clean syntax for test cases and supports asynchronous code testing.
Fetch API: Used to send HTTP requests (PUT) to the API endpoints. Handles communication between the test suite and the Urban Grocers API.
Custom Utility Function: handleResponse(response) ensures the API response is properly validated as JSON, adding robustness to error handling.
JavaScript (ES6): The language used for the test suite. Features such as async/await, try/catch, and destructuring improve code clarity and maintainability.
TripleTen Configuration: The config.js file stores the base API URL, making it easier to update and maintain.
Techniques
Unit Testing: Each test case focuses on a specific functionality of the API, such as ensuring the correct status code or validating the response structure.
Error Handling: Comprehensive error handling (try/catch) ensures meaningful feedback when tests fail.
Dynamic Validation: The test suite dynamically validates fields and their types.
Separation of Concerns: The configuration (API URL) is stored in a dedicated module (config.js). Test logic is kept separate, improving code maintainability.
Logging for Debugging: Uses console.log() to inspect parsed response data, which aids in debugging test failures. 
Assertion Testing: The expect() statements validate the response's properties and types, ensuring the API meets expected behavior.
How to run tests:
1. Clone the repository: git clone https://github.com/username/hm07-qa-us.git
cd hm07-qa-us
2. Install dependencies: npm install
3. Update the config.js file with the correct API URL: module.exports = {
    API_URL: 'https://Urban_Grocers_API.com',
};
4. Execute the test suite using Jest: npx jest