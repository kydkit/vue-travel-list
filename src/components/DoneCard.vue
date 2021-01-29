<template>
  <div class="card-container">
    <div class="done-card">
      <p class="destination">Destination: {{ eachDone.destination }}</p>  
      <img :src="icon" class="heart-icon" alt="empty heart" @click="changeHeart">
    </div>
    <div class="button-options">
      <img @click="removeCard" class="close" :src="closeIcon" alt="close icon">
    </div>
  </div>
</template>

<script>
import closeIcon from "../assets/times-circle-regular.svg"
import heartIcon from "../assets/heart-regular.svg"
import filledHeart from "../assets/heart-solid.svg"
export default {
  data(){
    return {
      closeIcon: closeIcon,
      icon: heartIcon
    }
  }, 
  props: ['eachDone'], 
  methods: {
    removeCard(){
      this.$store.commit('clickToRemoveDone', this.eachDone)
    }, 
    changeHeart(){
      if(this.icon !== filledHeart){
        this.icon = filledHeart;
      } else {
        this.icon = heartIcon;
      }
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

.done-card {
  width: 92%;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  margin: 7px 0;
  padding: 5px 10px;
  box-shadow: 0 2px 3px gray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.button-options {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 8%;
  padding-left: .7rem;
}

.heart-icon {
  width: 17px;
  margin-right: 10px;
}

.close {
  width: 16px;
}

.destination {
  font-weight: 700;
}
</style>