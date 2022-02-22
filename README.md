# day1

## Path
The path module provides a lot of very useful functionality to access and interact with the file system.

const path = require('path')


## coockie parser

Cookies are simple, small files/data that are sent to client with a server request and stored on the client side. Every time the user loads the website back, this cookie is sent with the request. This helps us keep track of the user’s actions.

Now to use cookies with Express, we will require the cookie-parser. cookie-parser is a middleware which parses cookies attached to the client request object. To use it, we will require it in our index.js file; this can be used the same way as we use other middleware.

var cookieParser = require('cookie-parser');
app.use(cookieParser());

cookie-parser parses Cookie header and populates req.cookies with an object keyed by the cookie names. To set a new cookie, let us define a new route in your Express app like −

var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.cookie('name', 'express').send('cookie set'); //Sets name = express
});

app.listen(3000);

## express.json()
express.json() is a built-in middleware function in Express. This method is used to parse the incoming requests with JSON payloads and is based upon the bodyparser.

This method returns the middleware that only parses JSON and only looks at the requests where the content-type header matches the type option.

## Express.js express.urlencoded() 
The express.urlencoded() function is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
express.urlencoded( [options] )
Parameter: The options parameter contains various property like extended, inflate, limit, verify etc.
Return Value: It returns an Object.


## coockie parser

A cookie is a piece of data that is sent to the client-side with a request and is stored on the client-side itself by the Web Browser the user is currently using. With the help of cookies –

It is easy for websites to remember the user’s information
It is easy to capture the user’s browsing history
It is also useful in storing the user’s sessions

## path.join(__dirname, 'public')

__dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.


### Day 2

I created router for users data and login 