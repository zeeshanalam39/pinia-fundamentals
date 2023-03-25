import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoList', {
  state: () => ({ todList: [], id: 0 }),

  actions: {
    addTodo(item) {
      this.todList.push({
        item,
        id: this.id++,
        completed: false,
      });
    },

    deleteTodo(itemId) {
      this.todList = this.todList.filter((todo) => {
        return todo.id !== itemId;
      });
    },

    toggleCompleted(idToFind) {
      const todo = this.todList.find((todo) => todo.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
