<template>
  <div class="about">
    <p class="header">{{ header }}</p>
    <p class="desc">{{ description }}</p>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      header: "Time for exploration",
      description: "Today, travel may or may not be much easier depending upon the destination you choose (e.g. Mt. Everest, the Amazon rainforest), how you plan to get there (tour bus, cruise ship, or oxcart), and whether you decide to “rough it” (see extreme tourism and adventure travel). “There’s a big difference between simply being a tourist and being a true world traveler”"
    }
  }
}
</script>

<style scoped>
.about {
  margin: 0 auto;
  background: rgb(255, 255, 255, .8);
  width: 340px;
  padding: 30px;
  margin-top: 20px;
}

.header {
  text-align: center;
  font-weight: 700;
  font-size: 1.3rem;
}

.desc {
  text-align: center;
  height: auto;
  width: 280px;
  margin: 0 auto;
  padding-top: 15px;
}

@media only screen and (min-width: 768px) {
  .about {
    width: 550px;
  }

  .desc {
    width: 480px;
  }
}
</style>