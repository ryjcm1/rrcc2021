<template>
  <div class="unassignedDriver" @drop="ondrop($event, unassigned)" @dragenter.prevent @dragover.prevent>
  
    <h3>
      Unassigned Orders
    </h3>

    <AddOrder @newOrder="echoNewOrder" class="addOrder" />

    <div v-if="filteredOrders==0" class="message">
      <p>Create a new order</p>
    </div>

    <div class="unassignedorders" v-for="filteredOrder in filteredOrders" :key="filteredOrder.id">
      <SingleUnassignedOrder :order="filteredOrder"
      @delete="echoDelete" @edit="echoEdit"
      draggable="true" @dragstart="startDrag($event,filteredOrder)"/>
    </div>

  </div>
</template>

<script>

import SingleUnassignedOrder from "./SingleUnassignedOrder.vue"
import AddOrder from "./AddOrder.vue"

export default {
    props: {
      "orders" : Array
    },
    data(){
      return{
        unassigned: "unassigned" 
      }
    },
    components: {
        SingleUnassignedOrder,
        AddOrder
    },
    methods: {
      //transmit order id to be deleted visually
      echoDelete(targetId){
        this.$emit('delete', targetId)

      },
      //transmit order information to update the frontend when new order is made
      echoNewOrder(orderInfo){
        this.$emit('addOrder', orderInfo)

      },
      //transmit order information to update the front end when order is updated
      echoEdit(editedValues){
        this.$emit('editOrder', editedValues)

      },
      //provides order id for the order that is being dragged
      startDrag(event,order){
        event.dataTransfer.dropEffect ='move'
        event.dataTransfer.effectAllowed ='move'
        event.dataTransfer.setData('orderID', order.id)
      },

      ondrop(event, driver){
        //Changes local data for visual updating
        const orderID = event.dataTransfer.getData('orderID')
        const order = this.orders.find((order) => order.id == orderID)
        order.driver = driver

        //Changes server data
        fetch("api/orders/"+order._id,{
          method: 'PATCH',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify({
            driver: this.unassigned
          })
        }).catch(err => console.log(err))
        
      }
    },
    computed: {
        //returns all orders that are unassigned
        filteredOrders() {
         return this.orders.filter((x) => x.driver == "unassigned");
        }
    }


}
</script>

<style scoped>


/* ------------------gerneral styles--------------------- */



  h3{
    padding-top: 10px;
    padding-bottom: 0.7em;
    border-bottom: 1.5px solid black;
    margin-bottom: .65em;
    margin-top: 0;

    color: #f2f2f2;
    text-align: center;
    background: var(--theme_color);
    
  }



/* ------------------------------------------------------- */


  .unassignedDriver{
    margin-right: 1em;
    min-height: 450px;
    min-width: 400px;
    
    border: 1px solid black;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
  }

  .unassignedorders{
    padding: 0.3em;
  }

  .message{
    text-align: center;
  }

</style>  