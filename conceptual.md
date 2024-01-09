### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
<!-- json web token: one-time authentication token issued on successful login/register. token
is saved locally and sent as part of a req when needed. comprised of header, body, signature -->

- What is the signature portion of the JWT?  What does it do?
<!-- verifies authenticity of the token through hashed header/body/serversecret -->

- If a JWT is intercepted, can the attacker see what's inside the payload?
<!-- JWT is not encrypted, yes they can see contents of payload -->

- How can you implement authentication with a JWT?  Describe how it works at a high level.
<!-- JWT works by assigning a token that has some details about the user requesting resources. 
It is then encoded and signed with a server secret that is sent and verified on every subsequent request. 
Usually expires at end of a session or stored locally. -->

- Compare and contrast unit, integration and end-to-end tests.
<!-- Integration tests are used to test request functions are working correctly in conjunction with each other. 
End-to-end tests are used to simulate an end-users experience from start to finish, usually take much longer to write. -->

- What is a mock? What are some things you would mock?
  <!-- mock is a 'fake' object used to test functions in unit testing, good for randomness, good for testing to see if a callback was run -->

- What is continuous integration?
<!-- the practice of merging small amounts of code changes instead of all at once -->

- What is an environment variable and what are they used for?
  <!-- env variables are used for setting up configuration for the application to run - whether it is 
  used for testing, server info, secret keys -->

- What is TDD? What are some benefits and drawbacks?
  <!-- Test Driven Development: writing code around successful tests. can take much longer to write an application but can be built very modular and easy to test for the future. -->

- What is the value of using JSONSchema for validation?
  <!-- allows for validation of json structure and easier to implement complex structures -->
  
- What are some ways to decide which code to test?
  <!-- figure out where the failure points of an application are. status codes, data is properly created, updated, removed.  -->

- What does `RETURNING` do in SQL? When would you use it?
  <!-- returns whatever is specified after query runs. used in queries that do not usually return confirmation. can be used to return data after data entry/modification. -->

- What are some differences between Web Sockets and HTTP?
  <!-- websockets are built on top of http. better for bidirectional msgs. stateless http vs stateful web sockets, persistent connection.  -->

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  <!-- I feel like I like using Flask more, it seems easier to manage organization of files. Not sure how I feel about express being very modular, can seem overwhelming to manage files in so many different folders. I haven't used enough of both to determine which is I like more. -->