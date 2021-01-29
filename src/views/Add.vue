<template>
  <div class="add">
    <form @submit.prevent="">
      <div class="todo-card">
        <label for="Destination">Destination: </label>
        <input type="text" v-model="destination" class="form-field" placeholder="required"/>
        <label for="Details">Details: </label>
        <input v-model="details" class="form-field"/>
        <label for="author">Author: </label>
        <input type="text" v-model="author" class="form-field" placeholder="required"/>
        <div class="button-container">
          <button @click="reset">Clear</button>
          <button @click="addTodo">Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      destination: "",
      author: "",
      time: "",
      details: ""
    }
  },

  methods: {
    reset(){
      this.destination = "",
      this.author = "",
      this.details =""
    },
    addTodo(){
      let todoItem = {
        destination: this.destination,
        author: this.author,
        time: new Date().toLocaleString().slice(0,17),
        details: this.details
      }
      if(this.destination.length > 0 && this.author.length > 0){
        this.destination = "",
        this.author = "",
        this.details = "",
        this.$store.commit('addTodo', todoItem),
        this.$router.push('/')
      } else {
        return
      }
    }
  }
}
</script>

<style scoped>
.add {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.todo-card {
  width: 340px;
  background: rgb(255, 255, 255, .8);
  margin-top: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.form-field {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
}

label {
  padding: 2px 0;
  font-weight: 700;
}
input {
  width: 100%;
  font-size: 1rem;
}

textarea {
  resize: none;
  width: 100%;
  padding: 2px;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 12px;
}

button {
  padding: 2px 8px;
}

a:link, a:visited {
  text-decoration: none;
}
</style>