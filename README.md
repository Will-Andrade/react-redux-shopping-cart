![image](https://user-images.githubusercontent.com/52185265/212722359-26582da4-c647-4a9d-b133-290202e62f00.png)

# react-redux-shopping-cart
A shopping cart redux app created to solve the React-Redux challenge from the  React - The Complete Guide (incl Hooks, React Router, Redux) Udemy course

## Technologies
- CRA
- React.js
- JavaScript
- CSS Modules
- Redux, Redux Toolkit
- Firebase Realtime Database

## Using the app
After downloading the repository, please run `npm install` to install dependencies and then `npm start` to boot up the live server. Later, please substitute the following lines with your Firebase DB baseURL to fetch & send cart data asynchronously:

```js
const fetchData = async () => {
    const response = await fetch(YOUR_FIREBASE_URL_HERE);

    if (!response.ok) throw new Error('Could not fetch cart data!');
    
    return await response.json();
}

const sendRequest = async () => {
    const response = await fetch(YOUR_FIREBASE_URL_HERE, {
      method: 'PUT',
      body: JSON.stringify(cartData)
    });

    if (!response.ok) throw new Error('Sending cart data failed!');
};
```
