<template>
  <div class="backdrop-addDriver" @click.self="closeModal">
    <form class="modal" @submit.prevent ="addDriver">

      <h2>New Driver</h2>

      <label>Name </label>
      <input type="text" required v-model="name" />

      <label> License# </label>
      <input type="text" required v-model="license" />

      <button>SUBMIT</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: "",
      license: ""
    }
  },
  methods: {

    //exits the backdrop
    closeModal() {
      this.$emit("close");
    },

    //creates a new driver
    addDriver(){
      const saveDriver = {
        name: this.name,
        license: this. license
      }

      //creating new driver on database
      fetch("api/drivers", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(saveDriver),
      })
      .then(
        //clears input values
        this.name ="",
        this.license ="",
        this.$emit('addDriver', saveDriver))
        
        //exits the form interface
      .then(this.closeModal)
      .catch((err)=> console.log(err))
    }
  },
};
</script>

<style scoped>


/* ------------------gerneral styles--------------------- */


h2 {
  margin:0;

  text-align: center;
  text-transform: uppercase;
  color: var(--theme_color);
  font-family: Open Sans;
}

input {
  outline: none;
  display: block;
  padding: 12px 20px;
  width: 100%;
  outline: none;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;

  color: black;
  background: rgb(0, 0, 0, 0.2);
}

button{
  padding: 13px;
  margin-top: 20px;

  border: none;
  border-radius: 4px;

  color: #f2f2f2;
  background: var(--theme_color);
  text-transform: capitalize;
  font-size: 15px;

  cursor: pointer;
}

label {
  display: block;
  margin: 0 0 10px;
  margin-top: 10px;

  color: black;
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}


/* ----------------------------------------------- */


.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 300px;
  height: 300px;
  padding: 20px;
  margin: 100px auto;
  border-radius: 10px;

  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.backdrop-addDriver {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  font-family: Poppins;
}


/* --------------------pseudo elements----------------- */


button:hover{
  background: #1f53a7;
  transition: 500ms;
}


</style>