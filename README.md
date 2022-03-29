
<h1>Yupay Mikhuy</h1>

<div align="center">
  <img src="./src/assets/backgrounds/Yupay-Mikhuy-banner.png" weight="100%">
</div>

<h2>Overview</h2>

 <p>Yupay Mikhuy is a Web App that helps you to manage the food flow in your house using artificial intelligence and simple functionalities that
    can help you what kind of dish will can you prepare with the ingredients that you have and alert when your food is it about to expire.
</p>

<h2>Getting started </h2>

1. <a href="https://github.com/HimblerCap/Yupay-Mikhuy">Fork this respository</a> and clone the resository in your local machine. 
2. Setup Enviroment: 
    - install <a href="https://nodejs.org/en/download/">Node.js (v8.9.4 or above)</a>
    - install vue cli: `npm install -g @vue/cli`
3. Install project dependecies: `npm install`
4. Create a <a href="https://console.firebase.google.com/">firebase account</a> and create a new Project.
5. In Firebase Project console dashboard. Click on create new web app.
6. Go to Firebase Project Settings and then General Settings Tab.
7. Scroll down and go to your app section under Firebase SDK snippet.
8. Now click on the config
9. Copy the code which looks similar to the below sample.
     ```js
    apiKey: "Axxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxx.firebaseapp.com",
    projectId: "xxxxxxxxx",
    storageBucket: "xxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxx",
    appId: "1:xxxxxxxxx:web:xxxxxxx",
    measurementId: "xxxxxxxxxxxx"
    ```
10.  Now go to project code and inside `src/config/firebase.js` update the `firebase.js` file with these codes.
11.  Update the field name in `vue.config.js`
12. click in Firestore database and create a new database.
13. Go to Project settings and go to service account and searrch firebase admin SDK for Node.js
14. Click in generate new private keys and then firebase generate a JSON file.
15. Replace this JSON file with the JSON in `functions/config`.
16. change the URL in databaseURL with the that your proyect. 
17. Run locally
    - `npm run serve`
    - For this time you can see anything in the home view you need to inspect and change the view to phone view to see the functionalities of the app.
