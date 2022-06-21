# API Route Map

This document details all the complete and tested routes available in the controllers folder, how to access them, what data they expect to receive in the requests sent to them, and what data you should expect in the response from that route. 

## Contents
- [User Routes](#user-routes)
- [Friends Routes](#friends-routes)
- [Thought Routes](#thought-routes)
- [Reaction Routes](#reaction-routes)
- [Models Information](#models-information)
- [Server Information](#server-information)
- [About The Author](#about-the-author)

## User Routes

* **GET All Users:** </br>
    Request Requirements: none </br>
    Expected Response: all users and associated data </br>
    Method: GET <br>
    URL: /api/user </br>

* **GET User by ID:** </br>
    Request Requirements: User id in url </br>
    Expected Response: "" </br>
    Method: POST <br>
    URL: /api/user/:id </br>
    Example: /api/user/62acdcb67a72e3a54bd38819 </br>



* **POST Create New User:** </br>
    Request Requirements: json body with following example format: </br>
    ``` 
    {
	    "username": "Sally",
	    "email": "sally@test.com",
	    "thoughts": [],
	    "friends": []
    }

    ```
    Expected Response: User object in json format.  </br>
    Method: POST <br>
    URL: /api/user </br>
    Example Response: </br>
    ```
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
    ```

* **Edit User Bu Id:** </br>
    Request Requirements: json body with edited elements and user id in url.  </br>
    Example Request Body: </br>
    ```
    {
	    "username": "My Name Has Been Updated",
	    "email": "updated@test.com"
    }
    ```

    Example Response Body: </br>
    ```
    {
	    "_id": "62acdc8e7a72e3a54bd38815",
	    "username": "My Name Has Been Updated",
	    "email": "updated@test.com",
	    "friends": [],
	    "createdAt": "2022-06-17T19:57:02.337Z",
	    "updatedAt": "2022-06-17T19:57:02.338Z",
	    "__v": 0,
	    "thoughts": "62ace3f8ea43376ee625ef20"
    }
    ```
    Method: PUT <br>
    URL: /api/user/:id </br>
    Example: /api/user/62acdc8e7a72e3a54bd38815 </br>

* **DELETE User By ID:** </br>
    Request Requirements: User ID in URL </br>
    Expected Response: Data of the user that was deleted </br>
    Method: DELETE <br>
    URL: /api/user/:id </br>
    Example: /api/user/62acdca07a72e3a54bd38817 </br>


## Friends Routes 

* **ADD Friend:** </br>
    Request Requirements: user id's of both the person the friend is to be attached to and the ID of the User that is the friend. </br>
    Expected Response: updated user object </br>
    Method: POST <br>
    URL: /api/user/:userId/friends/:friendId </br>
    Example: /api/user/62acdcb67a72e3a54bd38819/friends/62acf3dc61549c0564657695 </br>

* **DELETE/Remove Friend:** </br>
    Request Requirements: ID of the target user and friend to be removed. </br>
    Expected Response: updated user information </br>
    Method: DELETE <br>
    URL: /api/user/:userId/friends/:friendId </br>
    Example: /api/user/62acdcb67a72e3a54bd38819/friends/62acf3dc61549c0564657695 </br>

## Thought Routes

* **GET All Thoughts:** </br>
    Request Requirements: None </br>
    Expected Response: Array of json objects containing all Thoughts </br>
    Method: GET <br>
    URL: /api/thoughts </br>

* **GET Thoughts By ID:** </br>
    Request Requirements: thought ID in URL </br>
    Expected Response: Single thought object </br>
    Method: GET <br>
    URL: /api/thoughts/:id </br>
    Example: /api/thoughts/62b114846f0679d260869d53

* **Create New Thought:** </br>
    Request Requirements: Json body with thought text, username, and userId </br>
    Expected Response: Newly created thought </br>
    Example Request Body: </br>
    ```
    {
      "thoughtText": "I think this is working, it should be assigned to Bill",
      "username": "Bill",
      "userId": "62acdec49c33129df3e05b22"
    }
    ```

    Example Response Body: </br>
    ```
    {
	    "thoughtText": "I think this is working, it should be assigned to Bill",
	    "username": "Bill",
	    "_id": "62b114846f0679d260869d53",
	    "createdAt": "2022-06-21T00:44:52.571Z",
	    "updatedAt": "2022-06-21T00:44:52.571Z",
	    "reactions": [],
	    "__v": 0
    }
    ```
    Method: POST <br>
    URL: /api/thoughts </br>

* **Update THought by ID:** </br>
    Request Requirements: ID in URL and Json body with updated parameters </br>
    Expected Response: updated thought object </br>
    Method: PUT <br>
    URL: /api/thoughts/:id </br>
    Example Request Body: </br>
    ```
    {
	    "thoughtText": "This has been edited! sorry bill..."
    }
    ```
    Example Response Body: </br>
    ```
    {
	    "_id": "62b114846f0679d260869d53",
	    "thoughtText": "This has been edited! sorry bill...",
	    "username": "Bill",
	    "createdAt": "2022-06-21T00:44:52.571Z",
	    "updatedAt": "2022-06-21T00:44:52.571Z",
	    "reactions": [],
	    "__v": 0
    }
    ```
* **DELETE Thought By ID:** </br>
    Request Requirements: Thought ID in request URL </br>
    Expected Response: Json object of the deleted thought </br>
    Method: DELETE <br>
    URL: /api/thoughts </br>
    Example Request URL: /api/thoughts/62acf7b7c2c222ebf0bd65c3 </br>
    Example Response: </br>
    ```
    {
	    "_id": "62acf7b7c2c222ebf0bd65c3",
	    "thoughtText": "I think this is working, and should be assigned to Bobby",
	    "username": "Bobby",
	    "createdAt": "2022-06-17T21:52:55.826Z",
	    "updatedAt": "2022-06-17T21:52:55.826Z",
	    "reactions": [],
	    "__v": 0
    }
    ```


## Reaction Routes 

* **GET Route Map Template:** </br>
    Request Requirements: "" </br>
    Expected Response: "" </br>
    Method: GET <br>
    URL: "" </br>
    Example: "" </br>

* **POST Route Map Template:** </br>
    Request Requirements: "" </br>
    Expected Response: "" </br>
    Method: POST <br>
    URL: "" </br>
    Example: "" </br>

* **PUT Route Map Template:** </br>
    Request Requirements:  </br>
    Expected Response: "" </br>
    Method: PUT <br>
    URL: "" </br>
    Example: "" </br>

* **DELETE Route Map Template:** </br>
    Request Requirements: "" </br>
    Expected Response: "" </br> 
    Method: DELETE <br>
    URL: "" </br>
    Example: "" </br>

**(nested in thought routes)**

## Models Information

## Server Information

## About The Author
