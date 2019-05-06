## Treetop Commons Engineering Problem Submission

#### Usage

Ensure that you have Node installed with the latest LTS version (10.13.0).

```
npm start
```

**The endpoint that was asked for will be available at:** `localhost:5000/api/v1/organizations`

Query params are available to be added to the endpoint and all of them have been implemented.  *NOTE:* If `orderBy` is set, but no `direction` is set, the `orderBy` will fallback to `ASC`.

### Run API/Integration Tests

```
npm test
```

#### Added Improvements

- API versioning structure setup
- Wrote basic API/Integration Tests using Supertest, Mocha, Chai
- Added status message to API response (just a habit).  Any API error should return the proper status code, a human readable error message, and the actual error message from Node.

#### Improvements With Additional Time

- Write unit tests for the helper functions.  Just added some blanket API/Integration tests as a stopgap for now due to time constraints.
- Make the application at least more CRUD-oriented.  The problem only required the one endpoint, but you should really have the ability to fetch a single organization by ID, or create, update, and delete these data points as well at the very least.
- Move the data from a CSV to a persistent data store that can be scaled, horizontally and vertically.
- Write up a Dockerfile for aiding in getting the Docker container properly provisioned with all of the application requirements and ready to be deployed into AWS/GCE via Kubernetes, Ansible, etc.
- Write up a Docker Compose file for consistency among developers and their respective development environments.
- Write up a CI file for your deploy scripts for Gitlab / Github for Jenkins, ConcourseCI, or other CI/CD platforms.
- Swagger documentation for all endpoints.
- Apigee proxy for all endpoints.