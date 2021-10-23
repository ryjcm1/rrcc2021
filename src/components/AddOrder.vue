<template>
  <form @submit.prevent="addOrder" class="placeOrder">

    <input
      type="text"
      required
      placeholder="Description"
      class="newDescription"
      v-model="description"
    />

    <input
      type="number"
      required
      placeholder="Revenue"
      class="newRevenue"
      v-model="revenue"
    />

    <input
      type="number"
      required
      placeholder="Cost"
      class="newCost"
      v-model="cost"
    />

    <button class="submit"><span class="material-icons"> add_circle </span></button>
    
  </form>
</template>

<script>
export default {
  data() {
    return {
      description: "",
      revenue: "",
      cost: "",
    };
  },

  methods: {
    addOrder() {
      //creates and order object to emit to parent component
      let tempOrder = {
        description: this.description,
        driver: "unassigned",
        revenue: this.revenue,
        cost: this.cost,
      };
      //sends object to parent
      this.$emit("newOrder", tempOrder);

      //clears list after submit
      this.description = "";
      this.revenue = "";
      this.cost = "";
    },
  },
};
</script>

<style scoped>


/* ------------------gerneral styles--------------------- */


input {
  margin-right: 14px;
  margin-top: auto;
  margin-bottom: auto;
  height: 25px;

  font-size: 0.8em;
}



/* ----------------------------------------------- */



.placeOrder {
  display: flex;
  width: fit-content;
  margin: 10px auto 10px;
  padding: 0.5em;
  border: 3px solid green;
  border-radius: 5px;
  border-style: dashed;

  font-family: Poppins;
}


.newDescription {
  width: 140px;
}


.newRevenue,
.newCost {
  width: 60px;
}

.material-icons{
  color: var(--money_color);
}

.submit{
  background: none;
  border: none;
  cursor:pointer;
}
</style>