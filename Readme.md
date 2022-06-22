# NoSQL Based Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 ## Table of Contents

- [Description](#overall-description)
- [Installation Instructions](#installation-instructions)
- [How To Use](#instructions/how-to-use)
- [License](#license)
- [Contribution](#contribution-guidelines)
- [Tests](#application-tests)
- [About The Author](#about-the-author)



 ## Description 
 
  A simple yet functional template for a MongoDB based social network/blog API.
  This API has been intentionally kept "broad stroke" in its construction to serve more as an example of how this type of database works in an MVC format. 



 ## Installation Instructions
 
  This particular API will require the installation of MongoDB, community edition was used for development, or it can alternatively be connected to MongoDB's Atlas service, and NodeJS. </br>

  - <a href="https://www.mongodb.com/">MongoDB</a> </br>

  - <a href="https://nodejs.org/en/">NodeJS</a> </br>

  Once Mongo is up and running open the root folder of the local instance and run `npm i` to install the relevant dependencies, Nodemon is recommended but definitely not required. </br>
  Once everything is done installing run `node server` or `nodemon server` depending on wether or not you installed nodemon.

  From here the server should be up and running, however keep in mind that in order for the database to generate you must use a POST route before any other operations will work. The best place to start is with creating a new user.


 ## How To Use

There is a full route map in the docs folder inside of this repository however, below is an example of how to create your first user, which will be needed before any of the other CRUD operations will work. 

In the event that you are using Insomnia for testing your routes there is JSON file in the docs folder that has a pre-configured work environment with test routes and sample data already set up to help get you started. 

- [Insomnia](https://insomnia.rest/)

- [Insomnia Setup](./docs/Insomnia_setup_2022-06-21)

- [Demo Video](https://youtu.be/IGNPUaspzac)

-  Full route documentation can be found here: [Route Map](./docs/RouteMap.md)


---
**POST Create New User:** </br>

  Request Requirements: json body with following example format: </br>

      {
	      "username": "Sally",
	      "email": "sally@test.com",
	      "thoughts": [],
	      "friends": []
      }

  Expected Response: User object in json format.  </br>
  Method: POST <br>
  URL: /api/user </br>
  Example Response: </br>
    
      {
	      "username": "Sally",
	      "email": "sally@test.com",
	      "thoughts": [],
	      "friends": [],
	      "_id": "62b0f07ebdab2382da77760a",
	      "createdAt": "2022-06-20T22:11:10.679Z",
	      "updatedAt": "2022-06-20T22:11:10.679Z",
	      "__v": 0
      }
---
 
 
 Once a user is created you will be able to use the remainder of the routes to GET POST PUT and DELETE users, thoughts, and reactions. Thoughts are basically posts, reactions are comments. 



 ## Contribution Guidelines

Contributors are welcome, just keep a few things in mind:

1. All contributions are to be made in a separate branch off develop or in an independent fork. Do not attempt to contribute to develop or main directly, it will be denied.

2. All contributions are subject to peer review, so please keep your code clean and readable, feel free to comment as much as you like, however most of those comments will likely be removed in the final version if your contributions are merged. Your code should speak for itself wherever possible. 

3. This project consists of a lot of asynchronous javascript, and for sake of consistency and debugging, please use the ES6 async syntax for all async functions. Any submissions that do not use this syntax will either be asked to refactor their code to this standard or they will be rewritten before being merged. 

Example: </br>
```
const myFunction = async() => {
  try{
    const response = await something()

    return something
  }catch(err){
    console.error(`error encountered in sample function: ${err}`)
  }
};
```

4. If there is an open issue that is not assigned, that means it is available to be worked on, so take your pick.

5. don't forget to have fun. If you love what you do, its not work.

 ## Application Tests
 

No test conditions are currently active and the package.json does not currently include any test packages or environments.

## license
  
  This project is licensed under the MIT license.
  For more information about this license and what it entails visit: https://opensource.org/licenses/MIT

 ## About The Author
 
I hope you enjoy the application, if you have any questions, comments, concerns, feedback, ect, 
please open a new issue or feel free to reach out directly. 

My email for this project is vincent@vtportfolio.net

Don't forget to check out some of my other projects on github while your here: [Cobalt's Profile](https://github.com/cobalt88)


