install nodemodule globally using npm i

MongoDb
----------
Run mongod and mongo in two different command prompt
Create a database with name ishare by use ishare
Create a Collection with name articles and insert by, db.articles.insert([]) command and the insert the following data.


{ "_id" : 1, "title" : "Say No to Racism", "author" : "Mark Twain", "tags" : [ "Racism", "Prejudice", "Social Exclusion" ], "date" : "10-Feb-20", "rating" : 5 }
{ "_id" : 2, "title" : "The effective cardio workout", "author" : "John Daniel", "tags" : [ "Health", "Fitness" ], "date" : "1-Feb-20", "rating" : 4 }
{ "_id" : 3, "title" : "Pursue your dreams", "author" : "Steve Jackson", "tags" : [ "Dream big", "Work Hard" ], "date" : "20-Jan-20", "rating" : 4.5 }
{ "_id" : 4, "title" : "All about OTT platforms", "author" : "Annie", "tags" : [ "Streaming", "Video", "Digital Platform" ], "date" : "18-Jan-20", "rating" : 4.8 }


Microservice
-----------------
Run the articles_service.js file, using nodemon articles_service.js command.

Link to test: http://localhost:9000/act?role=articles&op=fetchAll

ExpressApp
--------------
install nodemodule packages by, npm i.
run express app by, npm start.

Link to test: http://localhost:3000/articles

AngularClient
-------------------------
install nodemodule packages by, npm i.
run angulaclient by, ng server --open (or) ng serve and use the link the to test

Link to test: http://localhost:4200/

