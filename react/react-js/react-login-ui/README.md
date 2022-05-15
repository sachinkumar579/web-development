# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### App.js

This gets evaluated first. If token is not valid display the Login component which has the login form .
If token is valid display Application and If you are visiting http://localhost:3000/dashboard you will see dashboard , if you are visiting http://localhost:3000/preferences you
will see preferences page . react-router-dom library is used for routing 

useToken is a custome hook . sessionStorage is used to store the token which means the token is active as long as the user is on the same browser tab .
When Login button is clicked saveToken function gets called which will rerender App component . It will update sessionStorage token and display Application 

### Components

Dashboard - a dashboard with some title where we could add some nice UI
Preferences - this could be another page
Login - contains the login form  
App - constains the custom hook for updating token in session storage when Login button is clicked . This will also rerender the main page 


### External services 

POST http://localhost:8080/token

Should return a JSON object 
{
"token" : "token123"
}

The API call is made using fetch in Login.js 

### Source for this UI

https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
