<template>

  <div id="app">
    <div class="order-container">
      <Orders />
    </div>
  </div>
 


</template>

<script>

import Orders from "./components/Orders.vue"


export default {
  name: "App",
  components: {
    Orders
  },

  data() {
    return {
      
    };
  },
}

</script>
