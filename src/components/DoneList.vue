<template>
  <div>
    <DoneCard v-for="(eachDone, i) in doneList"
    :key="i"
    :eachDone="eachDone" />
  </div>
</template>

<script>
import DoneCard from "./DoneCard"
export default {
  components: {
    DoneCard
  },

  computed: {
    doneList(){
      return this.$store.state.doneList
    }
  }
}
</script>

<style>
</style>