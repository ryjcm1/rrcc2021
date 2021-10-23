<template>
  <div class="unassigned-Order-Wrapper">
    <div class="unlabeledOrder" v-if="!toggleEdit">

      <p id="description">{{ order.description }}</p>

      <div class="revenue">
        <p class="dollarSign">$</p>
        <p id="revenue">{{ order.revenue }}</p>
      </div>

      <div class="cost">
        <p class="dollarSign">$</p>
        <p id="cost">{{ order.cost }}</p>
      </div>

      <button @click="deleteOrder">
        <span class="material-icons delete"> delete </span>
      </button>
      <button @click="toggleEdit = !toggleEdit">
        <span class="material-icons edit"> edit </span>
      </button>
    </div>

    <div class="editOrder" v-if="toggleEdit">
      <p class="editDescription">{{ order.description }}</p>
      <input
        type="number"
        :placeholder="order.revenue"
        class="editRevenue"
        v-model="revenue"
      />
      <input
        type="number"
        :placeholder="order.cost"
        class="editCost"
        v-model="cost"
      />
      <button @click="editOrder">
        <span class="material-icons save"> save </span>
      </button>
      <button @click="toggleEdit = !toggleEdit">
        <span class="material-icons cancel"> cancel </span>
      </button>
    </div>
    <p class="error" v-if="error && toggleEdit">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      revenue: "",
      cost: "",
      error: "",
      toggleEdit: false,
    };
  },
  props: {
      "order": Object
  },
  methods: {

    //deletes order via fetch call and emits data to delete data locally
    deleteOrder() {
      
      if(confirm('Are you sure you want to permanently delete this order?'))
        fetch("api/orders/" + this.order._id, { method: "DELETE" })
            .then(() => this.$emit("delete", this.order.id))
            .catch((err) => console.log(err));
    },

    //Edits can only be submitted when the both input fields are filled in
    editOrder() {
      if (this.revenue && this.cost != "") {
        let updatedInfo = [
          this.order,
          {
            revenue: this.revenue,
            cost: this.cost,
          },
        ];

        console.log(this.order._id)

        //edits server data
        fetch("api/orders/" + this.order._id, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            revenue: this.revenue,
            cost: this.cost,
          }),
          //local data editing for visual
        }).then(this.$emit("edit", updatedInfo));

        //exits edit menu and clears error message if present
        this.toggleEdit = !this.toggleEdit;
        this.error = "";

      } else {
        //when user does not fill in input fields correctly
        this.error = "please fill in all the blank if you wish to save";
      }
    },
  },
};
</script>

<style scoped>



/* ------------------gerneral styles--------------------- */



button {
  margin-top: 5px;
  height: 30px;
  width: 30px;

  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  color:rgb(54, 69, 79,0.3);
}



/* ----------------------------------------------- */




.unlabeledOrder {
  display: flex;
  align-items: center;
  padding: 4px;
  margin: auto;
  width: fit-content;
  height: 40px;

  border: 1.5px solid black;
  border-radius: 5px;

  text-align: left;
  font-weight: bold;
}



/* --------------------edit order styles---------------- */



.editOrder {
  display: flex;
  padding: 4px;
  margin: auto;
  width: fit-content;

  border: 2px solid black;
  border-style: dashed;
}

.editOrder input {
  padding-right: 15px;
  margin-right: 5px;
  margin-top: auto;
  margin-bottom: auto;
  height: 20px;

  font-size: 0.8em;
}

.editDescription {
  display: flex;
  align-items: center;
  padding-right: 15px;
  margin: 0;
  width: 140px;
  height: 40px;

  font-size: 0.8em;
  font-weight: bold;
}

.editRevenue {
  width: 50px;
}

.editCost {
  width: 50px;
}



/* --------------------regular order styles---------------- */



.revenue, .cost{
  display: flex;
  justify-content: center;
}

.dollarSign{
  padding-right: 0;
}

#description {
  width: 150px;
  padding-right: 15px;
}

#revenue,
#cost {
  width: 50px;
  padding-right: 15px;
}

#revenue{
  color:var(--money_color);
}

#cost{
  color: var(--negative_color);

}


.error {
    margin: 0;
    text-align: center;
    color: var(--negative_color);
    font-size: 0.8em;
    font-weight: bold;
}



/* --------------------pseudo elements----------------- */



.delete:hover,
.cancel:hover {
  color: var(--negative_color);
}

.edit:hover{
 color: black;
}

.save:hover {
  color: var(--money_color);
}


</style>