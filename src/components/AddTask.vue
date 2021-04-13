<template>
  <div>
    <h3>Add Task</h3>
    <form @submit.prevent = "addNewTask">
      <fieldset>
        <input type = "text" name = "task" id = "task" v-model = "title" placeholder = "Add Task">
        <button class = "button input-button" type = "submit">Add Task</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "AddTask",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTask']),
    addNewTask() {
      this.addTask(this.title)
      this.title = ''
    }
  }
}
</script>

<style scoped>
fieldset {
  display: flex;
  align-items: center;
  border: none;
  width: 100%;
  padding: 1em;
}

input {
  border: none;
  background: white;

  padding: 0.5em 1em;
  font-size: 1.2em;
  font-weight: 500;

  height: 100%;

  flex: 1 0 auto;
}

.button {
  padding: 0.5em 1em;
  font-size: 1.2em;
  font-weight: 600;

  border: none;
  border-radius: 0;
}

.input-button {
  background: rgb(74, 184, 131);
  color: white;
}
</style>