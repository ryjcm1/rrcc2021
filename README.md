# Order Handler
### _The simplistic order & driver manager_


<!--TABLE OF CONTENTS-->
<ol>
  <li><a href="#about-the-project">About The Project</a></li>
  <li><a href="#getting-started">Getting Started</a></li>
    <ul>
      <li><a href="#BackendInstallation">Backend Setup</a></li>
      <li><a href="#FrontendInstallation">frontend setup</a></li>
    </ul>
  <li><a href="#acknowledgements">Acknowledgements</a></li>
</ol>


## 📒 About The Project

<img src="./src/assets/order-handler-ui.png/" width="55%" title="hover text">
Order-handle allows for the user to create, edit and assign orders to existing drivers.
New drivers can be created and they can be deleted on the condition that they have no orders assigned to them.

### 👨‍💻 Tech stack
<img src="./src/assets/mevn-cli.jpg/" width="55%" title="hover text">
  -this project uses <a href="https://nodejs.org/en/"><b>Vue</b></a> to build responsive and reusable components
  -For persistence storage (database) this web app uses mongoDb, where two types are schemas are authorized to be stored (orders and drivers)


## Getting Started
<a href="https://vuejs.org/"><b>Node</b></a> is required to run this program.
npm
```sh
npm install -g npm
```

### Backend Setup
Navigate into the server directory and run:
```sh
npm install
```
This will install all the dependencies for the server




### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
