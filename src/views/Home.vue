<template>
  <div class="home">
    <div class="todo-container">
      <p>Wanna Go...</p>
      <TodoList />
    </div>
    <div class="done-container">
      <p>Been There!</p>
      <DoneList />
    </div>
  </div>
</template>

<script>
import TodoList from "../components/TodoList"
import DoneList from "../components/DoneList"

export default {
  components: {
    TodoList,
    DoneList
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.todo-container {
  background: rgba(230, 230, 230, .8);
  height: auto;
  width: 340px;
  margin-top: 30px;
  padding: 10px 15px;
}

.done-container {
  background: rgba(230, 230, 230, .8);
  height: auto;
  width: 340px;
  margin: 50px 0;
  padding: 10px 15px;
}

p {
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
}

@media only screen and (min-width: 1024px) {
  .home {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: row;
  }

  .todo-container, .done-container {
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .done-container {
    padding-top: 17px;
  }
}
</style>
