
<p>
<a  href=""  rel="noopener">
</p>
<h2>Winter Hack: Search App Backend</h2>

</p>

<img src="https://www.techomoro.com/wp-content/uploads/2021/04/mongodb-atlas-express-backend-copy.jpg" width="400">


## 📝 Contents

  

-  [About](#about)

-  [Built Using](#built_using)

-  [Demo / Working](#demo)

-  [How it works](#working)

-  [Set Up and Run the App](#usage)

-  [Deployment](#deployment)

-  [Author](#author)
<br/>


## 🌻 About <a name = "about"></a>

This is the backend for WinterHack App - a website that helps in seamless search of hotels, temporary accommodation according to location.
This backend application creates the API for Geo-Spatial and Atlas Search using one of the MongoDB public data-sets: sample_airbnb.

<br/>


## ⛏️ Built Using <a name = "built_using"></a>


-  [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.

-  [Express](https://github.com/aria2/aria2) - a flexible Node.js web application framework that provides a robust set of features for web/mobile applications and APIs.

-  [MongoDB Atlas](https://www.mongodb.com/atlas/database) - Fully-managed cloud database that handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice.

-  [Heroku](https://www.heroku.com/) - SaaS hosting platform.


<br/>

## 🎥 Demo / Working <a name = "demo"></a>

This is a tiny demo of my search API in action:



![searchAPIgif](https://user-images.githubusercontent.com/59119265/149759468-b65b2263-f5be-4fc4-ac7a-016587b1e65f.gif)


<br/>

## 💭 How it works <a name = "working"></a>

 

It has the feature of searching on a location with Atlas Search and Geospatial Operators. It uses Atlas Search and the compound operator to search based on text entered and within a certain geographical area. For the text entered, it uses the autocomplete operator, and for the geospatial component, it uses the geoWithin operator. This logic is written in the backend Node.js Expess App that creates the Search API which searches across a radius of 10000 meters from the latitude and longitude. 

![yoy](https://www.thepolyglotdeveloper.com/uploads/2020/08/mongodb-atlas-search-index.png)
![Picture1](https://user-images.githubusercontent.com/59119265/149762963-c24d4718-4a5b-429a-8cd1-b57177c2ba78.png)
When you are searching, you will get a list of records of hotels or apartments with price, facilities, details of host as well as reviews. 



I also got some stats of the database from MongoDB Charts.
The entire website is written in MERN Stack and with MongoDB features like Atlas, Realm and Charts.

<br/>


## 🎈 Set Up and Run the App <a name = "usage"></a>

### 💬 Prerequisites:

- **Node.js** :  v16.13.1
- **npm** :  v8.1.2
- **React**: This project was bootstrapped with Create React App 



### 💬 Getting Started:
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. To run the app locally, install its dependencies and then call the run script:
```
npm install
```
```
npm run start
```
<br/>



## 🚀 Where is it deployed ?<a name = "deployment"></a>


The backend app is deployed on Heroku. Here's a guide to deploy Atlas on Heroku: [Docs](https://www.mongodb.com/developer/how-to/use-atlas-on-heroku/)

<p float="left">
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7f5GjxUW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/c29t9uc8roz8g9rddbqs.png" width="200"/>
  <img src="https://assets-global.website-files.com/5f1c75e63b2f950eb473d3e4/603c5eb831820c3ce6a8f057_603a1586fa052d17fc2a6929_MongoDBAtlas.png" width="200" />
</p>

The frontend is built and deployed using MongoDB Realm. For frontend app visit repository: [WinterHack](https://github.com/Ayushi673/WinterHack)


<br/>


  ## ✨ Contributing

Found a Bug ? Create an [Issue](https://github.com/Ayushi673/WinterHack/issues).

<br/>

## 💖 Like this project ?

Leave a ⭐ If you think this project is cool.

<br/>

## ✍️ Author <a name = "author"></a>
[@Ayushi673](https://github.com/Ayushi673) 
