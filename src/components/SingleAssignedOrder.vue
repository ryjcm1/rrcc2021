<template>
  <div class="labeledOrder">
  
    <p id="description">{{ order.description }}</p>

    <div class="revenue">
      <p class="dollarSign">$</p>
      <p id="revenue">{{ order.revenue }}</p>
    </div>

    <div class="cost">
      <p class="dollarSign">$</p>
      <p id="cost">{{ order.cost }}</p>
    </div>

    <button @click="unassignOrder">
      <span class="material-icons"> remove_circle_outline </span>
    </button>

  </div>
</template>

<script>
export default {
  props: {
      order: Object
  },
  methods: {
    //unassign order from a specified driver
    unassignOrder() {
      fetch("api/orders/" + this.order._id, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          driver: "unassigned",
        }),
      })
        //send order detail to be updated visually
        .then(() => this.$emit("unassignOrder", this.order))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style scoped>


/* ------------------gerneral styles--------------------- */



button {
  margin: auto;
  height: 30px;
  width: 30px;

  background: none;
  border: none;
  color: rgb(54, 69, 79,0.3);
  cursor: pointer;
  display: flex;
  justify-content: center;
}



/* ----------------------------------------------- */



.labeledOrder {
  display: flex;
  margin: auto;
  padding: 4px;
  width: fit-content;

  border: 1.5px solid black;
  border-radius: 5px;
}

.revenue p, .cost p, #description {
  display: flex;
  align-items: center;
  margin: auto;
  height: 40px;

  text-align: left;
  font-size: 0.9em;
  font-weight: bold;
}

#description {
  width: 110px;
  padding-right: 15px;
}

.revenue, .cost{
  display:flex;
  justify-content: center;
}

#revenue,
#cost {
  width: 40px;
  padding-right: 25px;
}

#revenue{
  color: var(--money_color);
}

#cost{
  color: var(--negative_color);
}



/* --------------------pseudo elements----------------- */


button:hover{
  color: rgb(177, 101, 101);
}

</style>