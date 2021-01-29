<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"

export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Thasadith:wght@400;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Thasadith', sans-serif;
}

body {
  background: url(./assets/eberhard.jpg);
  background-size: cover;
  background-repeat: repeat-y;
  min-height: 100vh
}
</style>
