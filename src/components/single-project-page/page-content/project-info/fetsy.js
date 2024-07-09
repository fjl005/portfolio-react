import { allProjects } from './allProjects';
import fetsyImage from '../../../../img/fetsyImage.png';

export const projectInfo = {
    id: allProjects.fetsy,
    intro: {
        title: 'Fetsy Shop Online',
        img: fetsyImage,
        subTitle: 'A MERN-stack e-commerce shop modeled after my Etsy Shop.',
    },
    markdownContent: `
### Introduction
Rewinding back to June of 2023, there were two key components of my life that intertwined into this project:
* I ran an [Etsy Shop](https://www.etsy.com/shop/DigiWitz) (and still do today), selling digital cards and templates of various types.
* I finished up my coding bootcamp, and wanted to further my knowledge of user authentication, administrator authorization, and manipulation of data from a data storage via Node.JS, Express, and MongoDB.

I then thought to myself, *“wouldn’t it be a great idea to implement what I’ve learned from NuCamp to recreate my own online shop apart from Etsy?”*

Thus, the idea was born, and I was ready to commit the next several months to this endeavor.


### Why It Matters
On Etsy, my average product price is about $4.50 per template. Etsy takes essentially half of that from fees and advertising. While the difference between $2.25 and $4.50 isn’t much, the difference is definitely noticeable if I make, for example, 100 sales in a given month ($225 vs $450). 

As a goal to combat these fees, I would like to create my own ecommerce platform so that I don’t need to implement any additional fees, taking nearly 100% of the sales as profit.

I do acknowledge, however, that this project in its entirety will take many months and perhaps years to have every component of the site functioning professionally and perfectly. Beyond the scope of the project's current status, future implementations include (but are not limited to): 
* Incorporating seamless user interfaces paired with professional graphic design, 
* Managing data storage securely and sustainably to a larger scale,
* Marketing and driving customers to my shop via social media platforms,
* Overseeing and handling actual financial payments, 
* Creating a mobile version via React Native, 
* Establishing opportunities to run sales and coupons.

For this current project, my focus is to create the minimum viable product (MVP). When I successfully transition into the web developer industry, I’ll revisit this project and plan to complete it entirely. 


### Game Plan
At its core, the Minimum Viable Product (MVP) should have login authentication, items available to purchase, and administrator privilege to add/edit products.

More specifically, the MVP should accomplish the following:
* Allow users to log in and out, with their information securely stored and passwords hashed/salted,
* Enable one specific user, the admin, to add more products, edit and delete existing products, and access all orders and reviews. 
* Provide the general public (not logged in) the ability to only view products
* Offer ecommerce essential functions, such as adding/removing items to/from your cart, purchasing these items, accessing your orders, and leaving reviews.


### Backend Setup
Before even setting up any frontend code, I wanted to make sure that I was able to set up the backend correctly, since user authentication plays a large role in the purpose of this project. So, it made sense to start with crafting the Node.JS server. 

To set up the backend, we’ll need to go through the following:
1. With Node.js, set up Express Application in a server.js file (primary backend framework)
2. Configure Passport (handle user logins)
3. Create sessions and utilize MongoDB Store (allow logged-in users to remain logged in)
4. Create models from schemas to interact with MongoDB Database (store login data)
5. Establish endpoints for the frontend (so the application can interact with the server)


Now, let’s go through these one by one!

#### 1. Set up Express Application in server.js (part 1)
Before diving into the code, I needed to figure out the requirements for my application. In a nutshell, these include:
* Express: the main framework for the backend server that will simplify the process of handling HTTP requests, defining routes, and implementing middleware. 
* User authentication: People need to login to access their accounts, as well as log out. 
* Session management: Given the statelessness of HTTP requests, I can’t have logged-in users passing their username and password with following requests; that’d be a major security risk! Instead, I need to use some form of session management.
* Database storage: I need to store user info as well as other shop-related items (products, reviews, orders, etc.) in some database. And with this database, I need to perform CRUD operations (create users, get user info, update users, delete users, same principle applied to any other feature).

**With these main principles in mind, let’s go ahead and start by importing the necessary modules.**

##### A) Import Necessary Modules
![Module Imports for Backend Server](https://res.cloudinary.com/da7edv0cg/image/upload/v1716568696/portfolio/fetsy/code/backend_module_imports.png "Module Imports")

* Express: we need to import express and implement it into our application, which can be accomplished by creating an instance of Express with const app = express(). Now, whenever we use the instance ‘app’, we are referring to our instantiated Express application. This will especially come in handy when we start defining our routes and introducing our middleware (more on these later)
* User Authentication: Authentication will be handled by a middleware called Passport. This will be discussed in further detail later, as a separate file was created to configure the passport. So, we will import the configured passport.
* Session Management: When you successfully log in, we will need to create a session so that subsequent HTTP requests can have the session ID attached to authenticate our user. Thus, the following will be needed:
    * Session: we’ll need access to session management provided by the express-session package.
    * CookieParser: to parse cookies from incoming requests, since the sessions will be stored in the browser’s cookie. Otherwise, without this, we won’t be able to parse the cookies.
    * CORS (Cross-Origin Resource Sharing): this isn’t specific to session, but while on the topic of HTTP requests, we need CORS because the frontend application will be from a different domain. To allow these requests, we need CORS. Due to security reasons, the default is to not allow requests from a different origin.
* Database Storage: we need to access sessions, user info, product info, etc. from a database. For this project, we’ll use MongoDB. To interact with MongoDB in Node.js, we need to import mongoose, which allows us to define schemas and perform CRUD operations with MongoDB. Mongoose is an object data modeling (ODM) library. 
    * Additionally, we’ll need a dotenv file to connect to the MongoDB database. The dotenv file is used to store environment variables that should be kept secret from the public. 

##### B) Introduce Middlewares
![Backend Middlewares](https://res.cloudinary.com/da7edv0cg/image/upload/v1716568696/portfolio/fetsy/code/backend_module_imports.png "Backend Middlewares")

Now, with these imports out of the way, let’s get into middleware functions, which are used in the processing pipeline of incoming HTTP requests and outgoing HTTP responses. They are called “middlewares” because they operate in the middle of the client’s request and the server’s response. Thus, middleware functions have access to the request and response objects. 

In Express, middlewares can be introduced by using the .use method on the ‘app’ instance defined from the previous section. 

The middlewares used in this server include:
* express.json(): This parses the req.body property of incoming requests with a Content-Type of application/json, making it available to access. Without this, we would have to manually parse the JSON data with every request. 
* cookieParser(): As mentioned earlier, this parses cookies attached to the client’s request, making it easier to work with cookies and therefore access the session ID. 
* express.urlencoded(): This parses incoming request bodies encoded in URL-encoded format that are sent with Content-Type as ‘application/x-www-form-urlencoded’ (typically with form data).
    * URL-encoded: refers to data with special characters replaced with ‘%XX’, where the ‘XX’ represents the two hexadecimal digits of the character’s ASCII code. For example, ‘!’ is replaced by ‘%21.’ This format is used in form submissions and is generally good practice for safety and compatibility. 
    * Without URL encoding, special characters, spaces, and non-ASCII characters would not be transmitted correctly in the URL. This prevents special characters like ‘&’ and ‘=’ from being misinterpreted as part of the URL structure. Additionally, spaces aren’t even allowed in the URL. 
    * This function takes an object that could be of select properties, but in this case we set the extended property to false. In doing so, we can only utilize the querystring library as opposed to the qs library. Qs library isn’t necessary for our application as it parses nested objects from the request body, which is just too much. Just using the querystring library is simpler and more lightweight. 
* passport.initialize(): Passport is a JS library that handles user authentication and persisting sessions. Here, we’re initializing our configured passport to our server, allowing it to work with Express’ middleware system. 
* cors(): allows specific requests from varying client URLs.
    * We set credentials to true because we need to allow cookies from the frontend application’s requests. By default, browsers will not include credentials in cross-origin requests. 
    * The origin is specified to only allow requests from our frontend application’s URLs. These URLs may vary from development to deployment, but currently, we only need to allow requests from the second and third URLs.

Since we’ve already mentioned configuring passport and incorporating it as a middleware into our Express application, I think it makes sense to take a little detour from our server.js to talk about Passport!

#### 2. Configure and Incorporate Passport in passport-config.js

Passport has been mentioned a couple times already. What is it, exactly? It’s a popular authentication middleware for Node.JS applications with various strategies, including username/password (local, which we’ll use), OAuth, etc. Passport will help ease the process of authenticating the user and generating sessions associated with the logged in user!

##### A) Import Necessary Modules
To use passport in our Express application, we need to first configure it given the various strategies available.

![Passport Modules](https://res.cloudinary.com/da7edv0cg/image/upload/v1717429230/portfolio/fetsy/code/passport_imports.png "Passport Modules")

We will need to import the following:
* Passport: because, well, we need passport. This imports the Passport.js library into this file.
* LocalStrategy: we are importing specifically the Strategy constructor from the passport-local module. We only need this constructor function to create instances of the local authentication strategy. 
    * There are a wide variety of strategies available on Passport, but we’re sticking with local strategy since we’ll only do a username/password login method. 
* Bcrypt: a popular library used for securely salting and hashing passwords, and also comparing them. This is important because we don’t want to store passwords directly into our database for security reasons!
* User: we’re importing the User model, which allows us to access user data from MongoDB.

##### B) Define Local Strategy Authentication
In this passport-config file, we are defining an authentication strategy using Passport's *use* method. This method takes an instance of the authentication strategy, which, in this case, is **LocalStrategy**. The LocalStrategy constructor takes two arguments:
1. An optional options object, which specifies the configuration options for the strategy. 
    * In my code, since the HTML username and password input names already say "username" and "password" respectively, this object is not required.
    * Here is an example where the username and password have HTML names "email" and "passwd" respectively, which would then require an options object.
    ![Options Object Required](https://res.cloudinary.com/da7edv0cg/image/upload/v1717429567/portfolio/fetsy/code/options_object_required.png "Options Object Required")

2. A ‘verify’ callback function that is invoked when a user attempts to authenticate. This callback function accepts three arguments:
![Define Local Strategy](https://res.cloudinary.com/da7edv0cg/image/upload/v1717429335/portfolio/fetsy/code/define_local_strategy.png "Define Local Strategy")

    * **Username**: the username entered by the user.
    * **Password**: the password entered by the user.
    * **Done**: A 'done' callback function, which indicates whether the authentication was successful or not. This itself takes three parameters:
        * **Error**: If an error occurs during the authentication process, this parameter should be set to the error object. Otherwise, it should be set to null.
        * **User object**: If authentication is successful, this parameter should contain the user object associated with the authenticated user. If authentication fails, it should be set to false or null.
        * **Info**: This is an optional argument that provides additional information about the authentication attempt, typically as an error message or other details.


To further elaborate on the verify callback function, let's break down what's occuring in the 'done' callback function:
![Done cb Function LocalStrategy](https://res.cloudinary.com/da7edv0cg/image/upload/v1718034752/portfolio/fetsy/code/done_cb_function_localStrategy.png "Done cb Function LocalStrategy")


1. First, it finds if the username exists from the MongoDB database. If one doesn’t exist, then that means this username is fake! Or at least it’s not registered yet. Whatever the case, the done callback function is returned, with no error (since the function was run successfully), a null user object, and an error message saying no user was found.
2. Instead, if the username does exist in our database, then we will use bcrypt to compare the entered password with the username’s hashed password from the database. Bcrypt will hash the recently entered password to compare the two. The bcrypt compare method takes three arguments:
    * The entered password,
    * The database hashed password,
    * A callback function that takes two parameters: error and isMatch. 
        * If there is an error during this process, it will throw an error into the catch block. 
        * If it is a match, the 'done' function defined in the 'verify' callback function will be returned, having a null error and the correct user object. This will trigger the serialization process (discussed next).
        * If the passwords don’t match, the 'done' function will have a null error (since the bcrypt method was technically successful despite the password being incorrect), a 'false' user, and an error message saying password incorrect. 

To invoke this local strategy, we need to use passport.authenticate associated with the /login endpoint. This will be run as a middleware function and assuming success, will continue the login process. 

![LocalStrategy Login Middleware](https://res.cloudinary.com/da7edv0cg/image/upload/v1718034796/portfolio/fetsy/code/localStrategy_login_middleware.png "LocalStrategy Login Middleware")

Assuming success, a session is generated! But how is the session created? We’ll need to use a method called serializeUser.


##### C) Serialize User (and Deserialize)
![SerializeUser](https://res.cloudinary.com/da7edv0cg/image/upload/v1720541531/portfolio/fetsy/code/image9_u0zyzj.png "SerializeUser")

If authentication is complete and successful, the method **serializeUser** will be run. This takes a callback function, which has two arguments: 
1. The User Object
    * During the ‘verify’ callback function, if the hashed password comparison was successful, then the user object retrieved from MongoDB was passed into the ‘done.’ Because it was passed through ‘done’, it’s now available here, and we can serialize the user ID into this session for future HTTP requests. 
2. A ‘done’ callback function

The serializeUser function will then use this **unique identifier** (user.id) from the user object and store it in the session data. The session ID should be stored in the browser’s cookie such that in future HTTP requests, we pass along the session that can be deserialized to determine whether the user ID matches that from the MongoDB Database. 

![DeserializeUser](https://res.cloudinary.com/da7edv0cg/image/upload/v1720541592/portfolio/fetsy/code/image3_frtmol.png "DeserializeUser")

The deserializeUser follows the same format as serializeUser. There are a couple differences:
* The function is asynchronous since we need to interact with the MongoDB database. 
* Its first argument is the ID that was passed from the browser’s session, which we hope will match the ID from MongoDB assuming you’re you! 


**After serialization, the user authentication process is complete!**


##### To Summarize:
* When we use Local Strategy (authenticating with only username and password), we need to check if both match what’s in our database.
* Ideally, the password would be salted and hashed (which we did via bcrypt) for security purposes.
* Assuming a match, we take the user ID from the database (a unique identifier) and use it to serialize the given session.
* When serialized, the session cookie will store this information and will be held in the browser.
* In subsequent requests, the session cookie will be parsed by our backend server, and will deserialize the user ID in the cookie to verify it matches that from the database.
* Assuming a match, your HTTP requests are golden!


**Since we’ve been talking about storing the serialized ID in sessions and using sessions in subsequent requests, it now makes sense to talk about sessions in more detail!**



#### 3. Create Sessions and MongoDB Store
The **MongoDBStore** is a session store for Express applications that uses MongoDB to store session data. 


##### A) Import MongoDB Store and Initialize it with Session
![Import and Initialize MongoDB Store](https://res.cloudinary.com/da7edv0cg/image/upload/v1720542049/portfolio/fetsy/code/image11_i6iemp.png "Import and Initialize MongoDB Store")

* We first import the MongoDBStore class from the ‘connect-mongodb-session’ and initialize it by passing the Express session middleware as an argument.


##### B) Create a New Instance of the MongoDBStore
![Instantiate MongoDB Store](https://res.cloudinary.com/da7edv0cg/image/upload/v1720542173/portfolio/fetsy/code/image19_f7ltsw.png "Instantiate MongoDB Store")

The instance takes an options object as a parameter. The object contains the following properties:
* URI: specifies the MongoDB connection URI where the session data will be stored.
* TTL: sets the time to live (TTL) for the sessions in seconds. After this time period, the session will expire and be automatically deleted from the database.
* Collection: specifies the name of the MongoDB collection where the session data will be stored.

##### C) Set Up Error Handling
![MongoDB Store Error Handling](https://res.cloudinary.com/da7edv0cg/image/upload/v1720542259/portfolio/fetsy/code/image5_phsr77.png "MongoDB Store Error Handling")

If there is any error connecting to the MongoDB database for session storage, it will display this error in the console.


##### D) Include Session Middleware to Express App, Configured Properly
![Add Session Middleware to Express](https://res.cloudinary.com/da7edv0cg/image/upload/v1720542325/portfolio/fetsy/code/image21_z2igf2.png "Add Session Middleware to Express")

Let’s break down each option in the argument passed into the session function:
* Secret: a required option used to sign the session ID cookie. 
    * It should be a string that is unique to your application. 
    * It's typically a long, randomly generated string. In this code, it's set to process.env.SESSION_SECRET, indicating that the secret is retrieved from an environment variable named SESSION_SECRET.
* Resave: determines whether the session should be saved back to the session store on every request, even if the session data was not modified during the request. 
    * Setting it to false avoids unnecessary session updates, improving performance and reducing storage usage.
* saveUninitialized: This option indicates whether a session should be saved in the session store even if it's uninitialized (i.e., new, but not modified). 
    * Setting it to false ensures that a session is only created when it's modified, which can help reduce storage usage. So, we’re only saving initialized sessions!
* store: specifies the session store where session data will be stored, which will be the MongoDBStore instance initialized earlier. 
    * This means that session data will be stored in MongoDB using the configured MongoDBStore.
* cookie: configure the session cookie settings. 
    * maxAge: the time the session cookie will expire (in milliseconds) after inactivity. 
    * httpOnly: session cookie is only accessible via HTTP(S) requests and cannot be accessed by client-side JavaScript, providing extra security.
    * Secure: If set to true, then the session cookie can only be sent over secure HTTPS connections, providing further protection. It shouldn’t be set to true during development, but should be for production.
    * sameSite: allows you to control when the session cookie should be sent in cross-origin requests.
        * Strict: only sent in requests originating from the same site as the server.
        * Lax: less restrictive compared to strict; cookie can only be sent in cross-origin GET requests.
        * None: can be sent in all cross-origin requests. However, this requires that the secure attribute is set to true.


(4) Resume Express Setup in server.js (part 2)
After our little detour talking about Passport authentication, MongoDB Store, and Sessions, let’s resume back to our server.js file that we had mentioned in the first section. 





### Frontend Setup



-----

And now I have **this** part in bold.

*Italic text*: *italic*


#### Ordered List
1. Item 1
2. Item 2
3. Item 3

#### Unordered List
* Item 1
* Item 2
* Item 3

#### Image
![Fetsy Image](https://res.cloudinary.com/da7edv0cg/image/upload/v1716305907/portfolio/fetsyImage_domi6x.png "Fetsy Image")





`
};
