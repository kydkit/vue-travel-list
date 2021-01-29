// import { now } from 'core-js/fn/date'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        destination: "Los Angeles",
        author: "Kyd",
        time: new Date().toLocaleString(),
        details: "Visit fam, Broad Museum, Dim Sum"
      },
      {
        destination: "Thailand",
        author: "Astrid",
        time: new Date().toLocaleString(),
        details: "Bangkok, Mae Hong Son, Koh Kut"
      },
      {
        destination: "Medellin",
        author: "Anaïs",
        time: new Date().toLocaleString(),
        details: "Cartagena, platanos, mangostino"
      },
      {
        destination: "Switzerland",
        author: "Nikki",
        time: new Date().toLocaleString(),
        details: "Wanna see lots of snow and St Bernards"
      }
    ], 
    doneList: [
      {
        destination: "Myanmar"
      }
    ]
  },
  mutations: {
    addTodo(state, payload){
      state.todos.unshift(payload)
    },
    clickToRemove(state, eachTodo){
      state.todos = state.todos.filter(t => t !== eachTodo)
    },
    movingUp(state, payload){
      let num = state.todos.indexOf(payload);
      if(num < 0 || num >= payload.length){
        return;
      }
      state.todos.splice((num-1),2,state.todos[num], state.todos[num-1]);
    }, 
    movingDown(state, payload){
      let num = state.todos.indexOf(payload);
      if(num < 0 || num >= payload.length){
        return;
      }
      state.todos.splice(num, 2, state.todos[num+1], state.todos[num]);
    },
    doneMoveDown(state, payload){
      let num = state.todos.indexOf(payload);
      state.todos.splice(num, 1);
      state.doneList.push(payload)
      // state.todos.push(payload)
    },

    //methods for for doneCards
    clickToRemoveDone(state, eachDone){
      state.doneList = state.doneList.filter(t => t !== eachDone)
    },
  } 
})
