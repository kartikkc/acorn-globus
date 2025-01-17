# ASSIGNMENT
You have to develop endpoints in whichever tech stack you like along with the database of your choice.
The description for the following endpoints are given below

### POST /questions/load
- Loads questions from stackoverflow API to local database
- Store the data in suitable tables/documents
- Refer Stackoverflow API - https://api.stackexchange.com/docs/questions 

### GET /questions
- Return all questions
- Should support following filtering
   1) is_answered
   2) tags
   3) < and > answers_count
- Should support following sorting
   1) Trending: sort=score(Based on score)
   2) Latest: sort=created_at(Based on created_at)
- Pagination (Page Number based i.e page=1)

Ex -
### GET - /questions?is_answered=true&tags=git,python&answers_count__gt=5&answers_count__lt=10&sort=score&page=3

### GET - /questions/:id
- Fetch the details of the particular question

### POST - /questions
- Creates a new question

### PUT/PATCH - /questions/:id
- Updates a particular question

### DELETE - /questions/:id
- Deletes a particular questions

#### All the above endpoints should perform operations on your local database except the first API which involves interacting with the stackoverflow API

## Setting up the project
 Before Starting the project 
 run "npm i" command to install the necessary packages
 then create an .env file and add your local database url to the file 
 Now, run the project.

## Accessing the routes

### GET routes
    /questions/get?Queries
    or 
    /questions/:id 
### POST routes
    /questions/post/
    
    requst body:
    {
         "tags": [
      "flutter",
      "git"
    ],
    "owner": {
      "account_id": "000000",
      "user_id": "000000",
      "username": "Anonymous"
    },
    "is_answered": false,
    "view_count": 1,
    "answer_count": 0,
    "score": 0,
    "creation_date": "1970-01-21T02:31:46.238Z",
    "question_id": 79364016,
    "content_license": "Unknown",
    "link": "",
    "title": "test Question",
    "last_edit_date": 1737106238,
    "__v": 0
  }

  ### PUT route
    /questions/put/:id

  #### DELETE route
    /questions/delete/:id