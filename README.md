# Glass Bridge Backend

This respository contains the backend code for the Glass Bridge, a game application built using Node.js, Express and MongoDB.

## Demo

You can view a live demo of the Glass Bridge Backend at [https://glass-bridge-api.onrender.com](https://glass-bridge-api.onrender.com)

## features

- MongoDB integration for storing user id and names

## Installation

To run the backend server locally, follow these steps:

1. Clone the repository to your local machine
2. Install the required dependencies by running `npm install`
3. Create a `.env` file in the root directory of the project and add the following environment variables:

```makefile
PORT=3001
MONGO_URI=<your MongoDb connection string>
CLIENT_URL =<your published frontend connection string>
```

4. Start the server by running `npm start`

## API Endpoints

The following API endpoints are available:

<table>
  <thead>
    <tr>
      <th>Endpoint</th>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>'/api/auth/add-user'</td>
      <td>POST</td>
      <td>Register a new user</td>
    </tr>
    <tr>
      <td>'/api/auth/update-user/:id'</td>
      <td>PUT</td>
      <td>Update a user data</td>
    </tr>
    <tr>
      <td>'/api/auth/all'</td>
      <td>GET</td>
      <td>Get all users</td>
    </tr>
  </tbody>
</table>

## Deployment

The backend server can be easily deployed to a cloud hosting playform such as Heroky or AWS. Simply create a new instance, set the necessary environment variables, and deploy the code to the platform.

## License

This project is licensed under the [MIT License](http://opensource.org/licences/MIT)

## Contact

For any questions or feedback, please contact the project owner at [otunbamarcusademola@gmail.com](mailto:otunbamarcusademola@gmail.com)

## Acknowledgements

- This project was inspired by the growing need for real-time chat applications in the curren digital age.
