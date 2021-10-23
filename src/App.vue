<template>
  <div class="allOrders">

    <!-- loading spinner -->
    <SimulateDelaySpinner v-if="!allDrivers.length" />

    <div class="orders-grid-container" v-if="allDrivers.length " >

      <div class="unassignedOrders">

        <UnassignedOrders
          :orders="allOrders"
          @delete="handleDelete"
          @addOrder="handleAddOrder"
          @editOrder="handleEdit"
        />
      </div>

      <div class="flex-container">
        <div
          v-for="uniqueDriver in uniqueDrivers"
          :key="uniqueDriver"
          class="specificDriver"
          @dragenter.prevent
          @dragover.prevent
        >
          <AssignedOrders
            :orders="allOrders"
            :uniqueDriver="uniqueDriver"
            @unassignOrder="handleUnassign"
            @deleteDriver="handleRemoveDriver"
          />
        </div>

        <!-- toggles the modal below -->
        <button class="toggleFormModal" @click="closeAddDriverForm">
          <div>
            <img
              src="./assets/person_add_black_48dp.svg"
              alt="add_icon"
              class="addPersonIcon"
            />
          </div>
        </button>
      </div>
    </div>

    <!-- add new driver modal -->
    <teleport to=".modals" v-if="addUserForm">
      <AddDriver @close="closeAddDriverForm" @addDriver="handleAddDriver" />
    </teleport>
  </div>
</template>

<script>
import AssignedOrders from "./components/AssignedOrders.vue";
import UnassignedOrders from "./components/UnassignedOrders.vue";
import AddDriver from "./components/AddDriver.vue";
import SimulateDelaySpinner from "./components/SimulateDelaySpinner.vue";


export default {
  name: "App",
  components: {
    AssignedOrders,
    UnassignedOrders,
    AddDriver,
    SimulateDelaySpinner
  },

  data() {
    return {
      allOrders: [],
      allDrivers: [],
      addUserForm: false,
    };
  },
  methods: {
    //fake simulated loading time
    async stall(time = 1500){
      await new Promise(resolve => setTimeout(resolve, time))
    },

    //grabs inforation from the server provided route
    async fetchOrders(type) {
      const res = await fetch("api/" + type);
      const data = await res.json();
      return data;
    },

    //visually updates orders when assigned orders are unassigned
    handleUnassign(targetOrder) {
      this.allOrders[this.allOrders.indexOf(targetOrder)].driver = "unassigned";
      console.log(targetOrder);
    },

    //visually updates orders when assigned orders are deleted
    handleDelete(targetId) {
      this.allOrders = this.allOrders.filter((x) => x.id != targetId);
    },

    //adds new order to the server
    handleAddOrder(orderInfo) {
      orderInfo.id = this.nextOrderNumber;
      fetch("api/orders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(orderInfo),
      })
        .then(() => {
          //visually updates orders to include the new order
          this.allOrders = [...this.allOrders, orderInfo];
        })
        .catch((err) => console.log(err));
    },

    //visually updates orders when an order has been edited
    handleEdit(editedInformation) {
      let tempIndex = this.allOrders.indexOf(editedInformation[0]);
      this.allOrders[tempIndex].revenue = editedInformation[1].revenue;
      this.allOrders[tempIndex].cost = editedInformation[1].cost;
    },

    //visually updates driver order menu when new driver is created
    handleAddDriver(newDriver) {
      this.allDrivers = [...this.allDrivers, newDriver];
    },

    //closes the modal for adding new drivers
    closeAddDriverForm() {
      this.addUserForm = !this.addUserForm;
    },

    //removes driver from the server
    handleRemoveDriver(driverName){
      //index of the driver to be removed
      let removeIndex = this.allDrivers.findIndex(x => x.name == driverName)

      //updates the server
      fetch("api/drivers/" + this.allDrivers[removeIndex]._id, { method: "DELETE" })
            //visually removes driver from frontend
            .then(this.allDrivers = this.allDrivers.filter((x) => x.name != driverName))
            .catch((err) => console.log(err));
    }
  },
  // fetches order and driver data
  async created() {
    //simulated stall of 1.5secs
    await this.stall();
    this.allOrders = await this.fetchOrders("orders");
    this.allDrivers = await this.fetchOrders("drivers");
  },

  computed: {
    //returns and array of driver names
    uniqueDrivers() {
      const uniqueDrivers = [];
      this.allDrivers.map((x) => uniqueDrivers.push(x.name));

      return uniqueDrivers;
    },

    //returns all unassigned orders
    driverlessOrders() {
      return this.allOrders.filter((x) => x.driver == "unassigned");
    },

    //provides the next order number
    nextOrderNumber() {
      return this.allOrders[this.allOrders.length - 1].id + 1;
    },
  },
};
</script>

<style>


/* ----------------------general layout---------------------- */


.orders-grid-container {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 1em;
}


.flex-container {
  display: flex;
  flex-wrap: wrap;
}


/* ---------------------------------------------------------- */


.allOrders {
  padding: 1.5em;
}

.unassignedOrders,
.specificDriver {
  padding-bottom: 1em;
}


/* --------------------add driver modal styles-------------------------- */


.toggleFormModal {
  min-width: 330px;
  height: 450px;

  border: 6px solid rgb(54, 69, 79, 0.3);
  border-radius: 5px;
  border-style: dashed;
  background: none;

  display: flex;
  justify-content: center;
}

.toggleFormModal div {
  margin-top: 40%;
  height: 165px;
  width: 165px;
  background: none;
  border: none;
}

.addPersonIcon {
  height: 100%;
  width: 100%;
}

.addPersonIcon {
  opacity: 0.3;
}


/* --------------------------pseudo elements------------------------------ */


.toggleFormModal:hover {
  border: 6px solid rgb(94, 192, 94, 0.3);
  border-style: dashed;
  transition: 0.3s;
  cursor: pointer;
}

.toggleFormModal:hover .addPersonIcon {
  filter: invert(61%) sepia(34%) saturate(740%) hue-rotate(71deg)
    brightness(89%) contrast(90%);
  transition: 0.3s;
}

</style>
