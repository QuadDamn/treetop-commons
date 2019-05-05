### Treetop Commons Engineering Problem Submission

##### Usage

Ensure that you have Node installed with the latest LTS version (10.13.0).

```
npm start
```

This command will spin up Nodemon (https://nodemon.io/), an automatic reloader for Node.js.

##### Additional Improvements

- Make the application at least more CRUD-oriented.  The problem only required the one endpoint, but you should really have the ability to fetch a single organization by ID, or create, update, and delete these data points as well at the very least.
- Move the data from a CSV to a persistent data store that can be scaled, horizontally and vertically.
- Write up a Dockerfile for aiding in getting the Docker container properly provisioned with all of the application requirements and ready to be deployed into AWS/GCE via Kubernetes, Ansible, etc.
- Write up a Docker Compose file for consistency among developers and their respective development environments.
- Write up a CI file for your deploy scripts for Gitlab / Github for Jenkins, ConcourseCI, or other CI/CD platforms.
- Swagger documentation for all endpoints.
- Apigee proxy for all endpoints.