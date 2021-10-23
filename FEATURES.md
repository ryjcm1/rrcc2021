# 😮🎉 Added Features🎉

### 1. Create new drivers and orders!

*  new orders can be made in the unassigned order container
*  all new orders are unassigned
*  new orders can only be made when decription, revenue, and cost input fields are filled in
*  adding new driver prompts a modal form using vue teleport✨
*  new drivers can only be created when both the name and license input fields are filled

### 2. Delete drivers and orders 🚚 🧑🏻‍🤝‍🧑🏿!

* orders can be deleted only if they are unassigned orders
* drivers can be deleted when they do not have any orders assigned to them
* user will be prompted again when they decide to delete an order or a driver

### 3. Data is peresisted through a database 💾!

* data will be persisted through mongoDb atlas 
* to link the server to the database, username and password is needed to be changed in the .env file

### 4. Simulated loading spinner 💫!

* to simulate loading delay, a purposeful delay of 1 second will be added before the intial data fetch call




