# Order Handler


### _The simplistic order & driver manager_


## 🗂️ Table of Contents
<ol>
  <li><a href="#about-the-project">About The Project</a></li>
  <li><a href="#getting-started">Getting Started</a></li>
    <ul>
      <li><a href="#Server-Installation">Server Installation</a></li>
      <li><a href="#Frontend-Installation">Frontend Installation</a></li>
    </ul>
  <li><a href="#Running-the-application">Running the application</a></li>
</ol>



## 📒 About The Project

<img src="./src/assets/order-handler-ui.png/" width="55%" title="hover text">
Order-handler allows the user to create, edit and assign orders to existing drivers.
New drivers can be created and they can be deleted on the condition that they have no orders assigned to them.

### 👨‍💻 Tech stack
<img src="./src/assets/mevn-cli.jpg/" width="35%" title="hover text">

* this project used vue to build responsive and reusable componets
* for persistence storage (database) this web app used mongoDb. Two types of schemas are accepted (orders and drivers)
* NodeJs and ExpressJs are used to manage the backend of this project



## Getting Started


<a href="https://nodejs.org/en/"><b>Node</b></a> is required to run this program.

```sh
npm install -g npm
```

### Server Installation

The server is built using nodeJs.

Included dependencies:

```sh
express   cors  body-parser   mongodb   mongoose
```

To install all above dependencies, simply navigate into the server directory and run:

```sh
npm install
```


### Frontend Installation

Frontend is built using VueJs.
To install all required dependencies, in the project directory run:

```sh
npm install
```



## Running the application

To start the server, navigate into the server directory terminal and run
```
npm run start
```

To access the server route

```sh
http://localhost:5000/ ____
```

To build the frontend, run the following in the main directory terminal

```sh
npm run serve
```

The frontend should be accessible on:
```sh
http://localhost:8080/
```

