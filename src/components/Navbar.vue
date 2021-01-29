<template>
  <div class="navbar">
    <div class="logo-container">
      <img :src="icon" alt="nature logo">
    </div>
    <h1>TRAVEL LIST</h1>
    <div class="nav-links">   
      <router-link to="/">Places</router-link>
      <router-link to="./add">Add</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
import icon from "../assets/campground-solid.svg"
export default {
  data(){
    return {
      icon: icon
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}

h1{
  font-weight: 700;
  margin: 10px 0;
}

.logo-container {
    width: 80px;
}

.nav-links {
  display: flex;
  /* background: rgba(230, 230, 230, .8); */
  width: 340px;
  justify-content: space-around;
}

.nav-links a:link {
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0 40px;
  color: black;
  font-weight: 700;
}

a:visited {
  color: rgb(27, 35, 33);
}

a:hover {
  font-weight: bold;
}
</style>