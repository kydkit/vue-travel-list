<template>
  <div>
    <TodoCard v-for="(eachTodo, i) in todos"
    :key="i"
    :eachTodo="eachTodo"/>
  </div>
</template>

<script>
import TodoCard from "./TodoCard"

export default {
  components: {
    TodoCard
  }, 

  computed: {
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>

<style>
</style>