<template>
  <div>
      <h3>Orders</h3>
      <p>order: {{count}}</p>
      <button @click="increment"> add one </button>
  </div>

</template>

<script>

import { useStore } from 'vuex'
import { computed } from 'vue'


export default {
    name: "Orders",
    setup (){
      const store = useStore()

      return {

        count: computed(() => store.state.count),

        increment: () => store.commit('increment')
      }
    }

}
</script>

<style>

</style>