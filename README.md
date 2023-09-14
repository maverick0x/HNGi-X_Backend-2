# HNGi-X Backend 2

## Task
You are to build a simple REST API capable of CRUD operations on a "person" resource, interfacing with any database of your choice. Your API should dynamically handle parameters, such as adding or retrieving a person by name. Accompany the development with UML diagrams to represent your system's design and database structure.  Host your entire project on GitHub, and provide a well-structured documentation in the repository that outlines request/response formats, setup instructions, and sample API usage.

### Steps to setup the server
To use the server you'll have to clone the repository and get your MONGO_URI

**To get MONGO_URI**
- Go to [MongoDB website and register for a serverless free account](https://www.mongodb.com/cloud/atlas/register).
- Create a free database using shared cluster.
- After the DB has been created, Click on **connect**.
- Select **Driver**.
- Copy your connection string under section 3.
- Go into the root of the repository you cloned.
- Create a file named ```.env```.
- Then paste your connection string there following the .env-example.

After adding your connection string, you can then run the server in development mode using  ```npm run dev``` or run it in production mode using  ```npm start```

### Using the REST API

Base URL (in production mode): [http://hngix-task2.eu-4.evennode.com](http://hngix-task2.eu-4.evennode.com)

There are four endpoints
1. [```/api```](http://hngix-task2.eu-4.evennode.com/api) - POST Method - For creating a person. It takes a compulsory variable ```name``` and two other optional variables; ```gender``` and ```email```.
#### Sample
Create new Person
```
    Request:
      HTTP Method: POST
      Endpoint: /api
      Request Body:
       {
        "name": "Farouk Bello",
        "email": "farouk.bello@email.com"
        "gender": "Male"
      }
    Response:
      HTTP Status Code: 201 Created
      Response Body:
       {
        "success": "Person 'Farouk Bello Adebayo' created successfully...!",
        "person": {
          "name": "Farouk Bello",
          "email": "farouk.bello@email.com"
          "gender": "Male"
          "_id": "6502d989844cb256eb5e266c",
          "__v": 0
        }
      }
```

**OR**

```
    Request:
      HTTP Method: POST
      Endpoint: /api
      Request Body:
       {
        "name": "Farouk Bello",
        "email": ""
        "gender": ""
      }

    Response:
      HTTP Status Code: 201 Created
      Response Body:
       {
        "success": "Person 'Farouk Bello Adebayo' created successfully...!",
        "person": {
          "name": "Farouk Bello",
          "email": ""
          "gender": ""
          "_id": "6502d989844cb256eb5e266c",
          "__v": 0
        }
      }
```

2. [```/api/user_id```](http://hngix-task2.eu-4.evennode.com/api/user_id) - GET Method - For getting the details of a person using their name as input variable.
#### Sample
Get a person
```
    Request:
      HTTP Method: GET
      Endpoint: /api/Farouk%20Bello
      Request Body: {}

    Response:
      HTTP Status Code: 200 OK
      Response Body:
       {
        "success": "Person data found..!",
        "data": {
          "_id": "6502d965844cb256eb5e2665",
          "name": "Farouk Bello",
          "email": "test123@gmail.com",
          "gender": "Male",
          "__v": 0
        }
      }
```

**OR**

```
    Request:
      HTTP Method: GET
      Endpoint: /api/Farouk%20Bell
      Request Body: {}

    Response:
      HTTP Status Code: 404 Not Found
      Response Body:
       {
        "error": "Person 'Farouk Bell' is not in our database..!"
       }
```

3. [```/api/user_id```](http://hngix-task2.eu-4.evennode.com/api/user_id) - PATCH Method - For upating details of the user. N.B.: All details can be modified.
#### Sample
Update a person
```
    Request:
      HTTP Method: PATCH
      Endpoint: /api/Farouk%20Bello
      Request Body:
        {
          "name": "Farouk",
          "email": "test123@gmail.com",
          "gender": "Male"
        }

    Response:
      HTTP Status Code: 200 OK
      Response Body:
       {
        "success": "Person 'Farouk Bello' data modified successfully..!"
       }
```

Calling the endpoint again with the same **user_id** after updating will result in:

```
    Request:
      HTTP Method: PATCH
      Endpoint: /api/Farouk%20Bello
      Request Body:
        {
          "name": "Farouk",
          "email": "test123@gmail.com",
          "gender": "Male"
        }

    Response:
      HTTP Status Code: 404 Not Found
      Response Body:
       {
        "error": "Person 'Farouk Bello', is not in our database..!"
       }
```

Because we've changed the name hence the **user_id** to get the details have changed too.

4. [```/api/user_id```](http://hngix-task2.eu-4.evennode.com/api/user_id) - DELETE Method - For deleting a person.

```
    Request:
      HTTP Method: DELETE
      Endpoint: /api/Farouk
      Request Body: {}

    Response:
      HTTP Status Code: 200 OK
      Response Body:
       {
          "success": "Person 'Farouk' deleted successfully..!"
       }
```

Calling the endpoint the second time with the same **user_id** will result in:

```
    Request:
      HTTP Method: DELETE
      Endpoint: /api/Farouk
      Request Body: {}

    Response:
      HTTP Status Code: 404 Not Found
      Response Body:
       {
        "error": "Person 'Farouk', is not in our database..!"
       }
```
