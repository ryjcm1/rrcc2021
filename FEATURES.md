# ๐ฎ๐ Added Features๐

### 1. Create new drivers and orders!!

*  new orders can be made in the unassigned order container
*  all new orders are unassigned
*  new orders can only be made when the description, revenue, and cost input fields are filled in
*  adding new drivers prompts a modal form using vue teleportโจ
*  new drivers can only be created when both the name and license input fields are filled

<img src="./src/assets/add-driver-ui.png/" width="45%" title="hover text">


### 2. Delete drivers and orders ๐ ๐ง๐ปโ๐คโ๐ง๐ฟ!!

* orders can be deleted only if they are unassigned orders
* drivers can be deleted when they do not have any orders assigned to them
* user will be prompted again when they decide to delete an order or a driver

<img src="./src/assets/delete-order-ui.png/" width="45%" title="hover text">


### 3. Data is peresisted through a database ๐พ!!

* data will be persisted through mongoDb atlas 
* to link the server to the database, username and password is needed in the .env file

### 4. Simulated loading spinner ๐ซ!!

* to simulate loading delay, a purposeful delay of 1 second will be added before the intial data fetch call




