<template>
  <div
    class="uniqueDriver"
    @drop="ondrop($event, uniqueDriver)"
    @dragenter.prevent
    @dragover.prevent

  >
    <div class="heading">

      <h3>Driver: {{ uniqueDriver }}</h3>

      <button class="deleteDriver" v-if="!filteredOrders.length" @click="deleteDriver">
        <span class="material-icons" > clear </span>
      </button>
    </div>

    <div v-if="filteredOrders == 0" class="message">

      <p>No Orders Assigned</p>
    </div>

    <div
      class="uniqueOrders"
      v-for="filteredOrder in filteredOrders"
      :key="filteredOrder.id"
    >
      <SingleAssignedOrder
        :order="filteredOrder"
        @unassignOrder="unassignEcho"
        draggable="true"

        @dragstart="startDrag($event, filteredOrder)"

      />
    </div>
  </div>
</template>

<script>
import SingleAssignedOrder from "./SingleAssignedOrder.vue";

export default {
  components: {
    SingleAssignedOrder,
  },
  data() {
    return {};
  },
  props: {
    orders: Array,
    uniqueDriver: String,
  },
  methods: {
    //relays unassign order id to parent component to change what is shown
    unassignEcho(targetId) {
      this.$emit("unassignOrder", targetId);
    },

    //provides the order id for the order that is being dragged
    startDrag(event, order) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("orderID", order.id);
    },

    //changes the driver information on drop
    ondrop(event, driver) {
      const orderID = event.dataTransfer.getData("orderID");
      const order = this.orders.find((order) => order.id == orderID);
      order.driver = driver;

      //update database
      fetch("api/orders/" + order._id, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          driver: this.uniqueDriver,
        }),
      }).catch((err) => console.log(err));
    },

    //sends drivers name to the parent for deletion
    deleteDriver(){
      console.log(this.uniqueDriver)
      if(confirm('Are you sure you want to permanently delete this driver?'))
        this.$emit('deleteDriver', this.uniqueDriver)
    }
  },
  computed: {
    //provides orders unique to the specified driver
    filteredOrders() {
      return this.orders.filter((x) => x.driver == this.uniqueDriver);
    },
  },
};
</script>

<style scoped>


/* ------------------gerneral styles--------------------- */



h3 {
  padding-top: 10px;
  padding-bottom: 0.7em;
  margin-bottom: .5em;
  margin-top: 0;
  border-bottom: 1px solid black;

  background: #f2f2f2;
  text-align: center;
}



/* ----------------------------------------------- */



.heading{
  position: relative;
}

.deleteDriver{
  position: absolute;
  top:0;
  right: 0;
  width: 20px;
  height: 24px;
  padding: 0;
  margin: 0;
  border: none;
}

.deleteDriver span{
 display: flex;
 justify-content: center;
 padding: 0;
 margin: 0;
 color: grey;
}

.uniqueDriver {
  border: 1px solid black;
  margin-right: 1em;

  min-height: 450px;
  min-width: 330px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.uniqueOrders {
  padding: 0.3em;
}

.message {
  display: flex;
  justify-content: center;
  min-height: 300px;
  width: auto;
}



/* --------------------pseudo elements----------------- */



.uniqueDriver:-moz-drag-over {
  border-style: dashed;
}

.deleteDriver:hover span{
  color:black;
  cursor: pointer;
}

</style>