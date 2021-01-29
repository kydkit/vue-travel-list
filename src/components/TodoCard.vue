<template>
  <div class="card-container">
    <div class="todo-card">
      <p class="destination">Destination: {{ eachTodo.destination }}</p>  
      <p class="details">Details: {{ eachTodo.details }}</p>  
      <div class="ownership">  
        <p class="author">Author: {{ eachTodo.author }}</p>
        <p class="time">Time: {{ eachTodo.time }}</p>
      </div>
      <button @click="doneMoveDown" class="done-button">Been</button>
    </div>
    <div class="button-options">
      <img @click="removeCard" class="close" :src="closeIcon" alt="close icon">
      <img @click="moveUp" class="move-up" :src="moveUpIcon" alt="up arrow">
      <img @click="moveDown" class="move-down" :src="moveDownIcon" alt="down arrow">
    </div>
  </div>
</template>

<script>
import closeIcon from "../assets/times-circle-regular.svg"
import moveDownIcon from "../assets/arrow-down-solid.svg"
import moveUpIcon from "../assets/arrow-up-solid.svg"

export default {
  data(){
    return {
      closeIcon: closeIcon,
      moveDownIcon: moveDownIcon,
      moveUpIcon: moveUpIcon
    }
  },

  props: ['eachTodo'],
  methods: {
    removeCard(){
      this.$store.commit('clickToRemove', this.eachTodo)
    }, 
    moveUp(){
      this.$store.commit('movingUp', this.eachTodo)
    }, 
    moveDown(){
      this.$store.commit('movingDown', this.eachTodo)
    },
    doneMoveDown(){
      this.$store.commit('doneMoveDown', this.eachTodo)
    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  align-items: center;
  position: relative;
}


.todo-card {
  display: flex;
  flex-direction: column;
  width: 92%;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  margin: 10px 0;
  padding: 5px 10px;
  box-shadow: 0 2px 3px gray;
}

.button-options {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  width: 8%;
  padding-left: .7rem;
}

.close {
  width: 16px;
}

.move-up, .move-down {
  width: 13px;
}

.done-button {
  position: absolute;
  top: 18px;
  right: 34px;
}

.destination {
  font-weight: 700;
  padding-bottom: 15px;
}

.author, .time, .details {
  font-size: .8rem;
}

.ownership {
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
}
</style>